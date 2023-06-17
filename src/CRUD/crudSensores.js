import axios from "axios";
import api from "../../services/api";



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
        const response = await axios.delete(`https://back-people.onrender.com/sensor/${varSensor._id}`);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}



//----UPDATE
export async function funcaoUpdateSensors(varSensor) {
    try{
        const dados = {
            nome: varSensor.nome,
            status: varSensor.status,
            tipo: varSensor.tipo,
            area: varSensor.area,
            id: varSensor.id,
            x: varSensor.x,
            y: varSensor.y,
        };

        console.log(dados);

        const url = `https://back-people.onrender.com/sensor/${varSensor._id}`;
        const response = await axios.patch(url, dados);
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}


