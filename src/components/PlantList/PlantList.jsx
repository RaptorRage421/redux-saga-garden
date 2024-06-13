import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function PlantList() {
    const dispatch = useDispatch();

    const plantList = useSelector(store => store.plantList);

    useEffect(() => {
        // dispatch an action to request the plantList from the API
        dispatch({type: 'FETCH_PLANTS'})
    }, []); 

const removePlant = (id) => {
    dispatch({type: 'REMOVE_PLANT', payload: id})
}

    return (
        <div>
            <h3>This is the plant list</h3>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Kingdom</td>
                        <td>Clade</td>
                        <td>Order</td>
                        <td>Family</td>
                        <td>Subfamily</td>
                        <td>Genus</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                {plantList.map((plant) => (
                    <tr key={plant.id}>
                        <td>{plant.name}</td>
                        <td>{plant.kingdom}</td>
                        <td>{plant.clade}</td>
                        <td>{plant.order}</td>
                        <td>{plant.family}</td>
                        <td>{plant.subfamily}</td>
                        <td>{plant.genus}</td>
                        <td><button onClick={() => removePlant(plant.id)}>Delete</button></td>
                        
                    </tr>
                    
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlantList;
