const corsAnywhere = require('cors-anywhere');

const host = '0.0.0.0';
const port = 8080;

// Inicializa o servidor do cors-anywhere
corsAnywhere.createServer({
  originWhitelist: [], // Define quais domínios podem acessar o proxy (deixe vazio para permitir todos)
}).listen(port, host, () => {
  console.log(`Servidor do cors-anywhere iniciado em http://${host}:${port}`);
});