import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

const PlantForm = () => {
    const dispatch = useDispatch();
    
    //Initial state is an OBJECT, with keys id and name
    let [newPlant, setPlant] = useState({
        name: '',
        kingdom: '',
        clade: '',
        order: '',
        family: '',
        subfamily: '',
        genus: ''
      });

    const handleNameChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, name: event.target.value})
    }
    const handleKingdomChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, kingdom: event.target.value})
    }
    const handleCladeChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, clade: event.target.value})
    }
    const handleOrderChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, order: event.target.value})
    }
    const handleFamilyChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, family: event.target.value})
    }
    const handleSubFamilyChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, subfamily: event.target.value})
    }
    const handleGenusChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, genus: event.target.value})
    }

    const addNewPlant = event => {
        event.preventDefault();
        dispatch({ type: 'POST_PLANT', payload: newPlant });
        //updates the next plant to have a new id
        setPlant({
            name: '',
            kingdom: '',
            clade: '',
            order: '',
            family: '',
            subfamily: '',
            genus: ''
          });
    }
    return (
        <div > 
            <h3>This is the form</h3>
            <div className='form'>
            <form onSubmit={addNewPlant} style={{ display: 'grid', gap: '1rem' }}>
            <label>
        Name:
        <input type="text" name="name" value={newPlant.name} onChange={handleNameChange} />
      </label>
      <label>
        Kingdom:
        <input type="text" name="kingdom" value={newPlant.kingdom} onChange={handleKingdomChange} />
      </label>
      <label>
        Clade:
        <input type="text" name="clade" value={newPlant.clade} onChange={handleCladeChange} />
      </label>
      <label>
        Order:
        <input type="text" name="order" value={newPlant.order} onChange={handleOrderChange} />
      </label>
      <label>
        Family:
        <input type="text" name="family" value={newPlant.family} onChange={handleFamilyChange} />
      </label>
      <label>
        Subfamily:
        <input type="text" name="subfamily" value={newPlant.subfamily} onChange={handleSubFamilyChange} />
      </label>
      <label>
        Genus:
        <input type="text" name="genus" value={newPlant.genus} onChange={handleGenusChange} />
      </label>
                <input type='submit' value='Add New Plant' />

            </form>
            </div>
        </div>
    );
}


export default PlantForm;
