
import api from "../../../services/api";
import axios from "axios";

//------------CREATE
export async function funcaoCreate() {
    try {
      console.log("Tela Create");

      const dados = { nome: sensorNome, id: sensorId, x: sensorX, y: sensorY, status: sensorStatus };
      console.log(dados);

      const url = "http://127.0.0.1:8080/https://back-people.onrender.com/sensor/"; //Criando Objeto com os Valore dos Inputs

      const response = await axios.post(url, dados); // Envia o objeto 'dados' como corpo da requisição POST

      setSensorCriado(dados);

      console.log(response.data); // Visualizar dado no Console
    } catch (error) {
      console.error("Ocorreu um erro ao cadastrar o sensor:", error); //Em caso de erro, exibir no Console = (Mensagem + Tipo do Erro)
    }
}





//-------------READ
// START FUNCTION READ SENSORES
export async function funcaoRead() {
  // Variáveis de estado para armazenar os valores dos sensores
  const [sensores, setSensores] = useState([]);
    try {
        const response = await api.get("/sensor"); //Requisicao Get para a API
        setSensores(response.data.sensor); //Setando dados
        console.log(response); //Visualização desses dados
    } catch (error) {
        console.error("Ocorreu um erro ao buscar os sensores:", error); //Caso ocorra algum erro
    }
    return sensores;
}
//END FUNCTION READ SENSORES





//-----------UPDATE
//PRIMEIRA FUNCAO -> Procurar Sensor
async function handleAlterar() {
    try {
      console.log("Tela Update");

      const res = await axios.get("https://back-people.onrender.com/sensor"); //Busca dos Sensores na API
      const sensors = res.data.sensor;
      //console.log(sensors); //Retorna os sensores da API

      let sensorEncontrado = null;
      for (let i = 0; i < sensors.length; i++) {
        if (sensors[i].nome.toLowerCase() === sensorProcurar.toLowerCase()) {
          sensorEncontrado = sensors[i];
          break;
        }
      }

    //--
      if (sensorEncontrado) {
        // Passa o sensor que foi encontrado para o 'state' e "libera" novos inputs na tela
        setSensorParaAlterar(sensorEncontrado);
        console.log(`Sensor: "${sensorEncontrado.nome}", Encontrado!`);
      } else {
        console.log(`Sensor com nome "${sensorProcurar}" não encontrado.`);
      }
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os sensores:", error);
    }
  }

//SEGUNDA FUNCAO -> Alterar Sensor
  async function buttonUpdate() {
    try {
      //Passar os Valores do Input para o 'objeto -> dados'
      const dados = {
        nome: sensorNome,
        id: sensorId,
        x: sensorX,
        y: sensorY,
        status: sensorStatus,
      };
      /* console.log(dados); */

      //ALTERANDO
      const url = `http://localhost:8080/https://back-people.onrender.com/sensor/${sensorParaAlterar._id}`;
      const response = await axios.patch(url, dados);

      console.log(response);
      setSensorCriado(dados);
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os sensores:", error);
    }
  }



//-----------DELETE  
  async function handleDeletar() {
    console.log("Tela Delete");

    try {
      const res = await axios.get("https://back-people.onrender.com/sensor"); //Requisicao Get para a API
      const sensors = res.data.sensor;

      let sensorEncontrado = null;
      for (let i = 0; i < sensors.length; i++) {
        if (sensors[i].nome.toLowerCase() === sensorNome.toLowerCase()) {
          sensorEncontrado = sensors[i];
          console.log(sensorEncontrado.id);
          break;
        }
      }

      
      if (sensorEncontrado) {
        // Atualiza o estado 'sensorExcluido' com o sensor encontrado
        setSensorExcluido(sensorEncontrado);

        const response = await axios.delete(
          `http://localhost:8080/https://back-people.onrender.com/sensor/${sensorEncontrado._id}`
        );
        console.log(response)

        // Atualiza o estado 'sensores' excluindo o sensor encontrado
        setSensores(prevSensores =>
          prevSensores.filter(sensor => sensor.id !== sensorEncontrado.id)
        );

        console.log(`Sensor: "${sensorNome}", deletado!`);

      } else {
        console.log(`Sensor com nome "${sensorNome}" não encontrado.`);
      }
      
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os sensores:", error);
    }
  }