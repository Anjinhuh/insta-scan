var audio = document.querySelector("audio")

let dados = []
let contador = 0
document.addEventListener("DOMContentLoaded", event => {
let scanner = new Instascan.Scanner({ video: document.getElementById('preview'), mirror: false });

Instascan.Camera.getCameras().then(cameras => {
var str = []
var myString = '';
for(var i=0; i<cameras.length; i++){
  str.push(`Câmera ${i} - ${cameras[i].name} \n`)
}
for (var m in str){
  myString = myString.concat(str[m]);
}
let numCamera = window.prompt('Selecione sua câmera. \n' + myString)
if(numCamera){
    console.log(cameras.length)
  scanner.camera = cameras[Number(numCamera)];

  scanner.start();
} else{
  window.alert('DIGITE UM NÚMERO');
  window.location.reload()
}

}).catch(e => console.error(e));

scanner.addListener('scan', content => {
  dados.push(content)
    contador++
    audio.play()
  //document.querySelector('.changeHere').innerHTML = dados.toString()
  document.querySelector('.number-count').innerHTML = contador + " itens"
});
});