let dados = []
let contador = 0
document.addEventListener("DOMContentLoaded", event => {
let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
Instascan.Camera.getCameras().then(cameras => {
scanner.camera = cameras[cameras.length - 1];
scanner.start();
}).catch(e => console.error(e));

scanner.addListener('scan', content => {
  dados.push(content)
    contador++
  //document.querySelector('.changeHere').innerHTML = dados.toString()
  document.querySelector('.number-count').innerHTML = contador + " itens"
});
});