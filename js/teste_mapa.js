/* 
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// criar um objeto Image e carregar a imagem
const img = new Image();
img.src = "./img/Mapa-Loc/Map-Planta-0.5x.png";
img.onload = () => {
    // definir o tamanho do canvas baseado nas dimensões da imagem
    canvas.width = img.width;
    canvas.height = img.height;

    // desenhar a imagem dentro do canvas
    ctx.drawImage(img, 0, 0);

    const icon = new Image();
    icon.src = "img/Mapa-Loc/pin-loc-orange.png";

    // adicionar um listener para o evento de clique no canvas
    canvas.addEventListener("click", handleClick);

    // adicionar um listener de clique para o botão de limpar
    const clearBtn = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
    });

    function handleClick(event) {
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;
        ctx.drawImage(icon, x - icon.width / 2, y - icon.height);
    }
};

*/




  const canvas = document.getElementById("myCanvas");
  const context = canvas.getContext("2d");

  const img = new Image();
  img.src = "./img/Mapa-Loc/Map-Planta-0.5x.png";
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
  };

  const points = [];

  //adicionar pontos na lista e na tela
  canvas.addEventListener("click", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    points.push({ x, y });
    drawPoints();
  });

  //remover ultimo ponto
  function drawPoints() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0);
    for (const point of points) {
      context.fillStyle = "red";
      context.fillRect(point.x - 2.5, point.y - 2.5, 5, 5);
    }
  }

  //quando botao apagar ponto é clicado
  const undoButton = document.getElementById("undoButton");
  undoButton.addEventListener("click", () => {
    points.pop();
    drawPoints();
  });