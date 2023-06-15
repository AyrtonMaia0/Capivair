import axios from "axios";
import api from "../../services/api";


//----READ
export async function funcaoReadSensors(){
    try{
        const response = await api.get('/sensor');
        return response.data.sensor;
    } catch (error) {
        console.log(error);
    }
}


//----DELETE
export async function funcaoDeleteSensors(varSensor){
    try{
        console.log(varSensor._id);
        const response = await axios.delete(`http://localhost:8080/https://back-people.onrender.com/sensor/${varSensor._id}`);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}



//----UPDATE
export async function funcaoUpdateSensors(varSensor) {
    try{
        console.log(varSensor.nome);
    } catch (error) {
        console.log(error);
    }
}


//----CREATE
/* 
export async function funcaoCreateSensors(){
    try{
        console.log("hey");
    } catch (error) {
        console.log(error);
    }
}
*/