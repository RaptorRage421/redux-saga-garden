import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';


function* rootSaga() {
yield takeLatest('FETCH_PLANTS', fetchPlants)
yield takeLatest('POST_PLANT', addPlant)
yield takeLatest('REMOVE_PLANT', deletePlant)
}


function* addPlant(action) {
  try{
  const response = yield axios.post('/api/plants', action.payload)
  yield put({type: 'FETCH_PLANTS'})
  } catch(error) {
    console.error("error in post", error)
  }
}
function* fetchPlants(action) {
try{
const gardenResponse = yield axios.get('/api/plants')
yield put({type: 'ADD_PLANT', payload: gardenResponse.data})
console.log("gardenResponse.data", gardenResponse.data)
} catch(error) {
  console.error("Error Fetching the Garden", error)
}
}

function* deletePlant(action) {
  try{
    yield axios.delete(`/api/plants/${action.payload}`)
    yield put({type: 'FETCH_PLANTS'})
  } catch(error) {
    console.error('Error deleting plant:', error)
  }
}
// this startingPlantArray should eventually be removed
const sagaMiddleware = createSagaMiddleware();

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return action.payload
    default:
      return state;
  }
};

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// Note that the store is currently not
// configured to utilize redux-saga OR
// redux logger!
const store = createStore(
  combineReducers({ 
    plantList 


  }),
  applyMiddleware(sagaMiddleware, logger)
);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
sagaMiddleware.run(rootSaga)
export default store;
