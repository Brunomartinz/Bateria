document.body.addEventListener('keyup',(event) => {
  playSound(event.code.toLocaleLowerCase() );
});

//evento de quando clicar no botão pega oq foi digitado transforma em um array e manda para o playComposition
document.querySelector('.composer button').addEventListener('click', () => {
let song = document.querySelector('#input').value;

// transformar o q foi digitado em array
if(song !== '') {
let songArray = song.split('');
playComposition(songArray);
}

});

function playSound(sound) {
let audioElement = document.querySelector(`#s_${sound}`);
let keyElement = document.querySelector(`div[data-key="${sound}"]`)


if (audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}

//adiciona a classe active
if(keyElement) {
keyElement.classList.add('active');

// remove a classe active 
setTimeout(()=> {
  keyElement.classList.remove('active')
}, 300);
}
}

//percorre o array e pega cada item do mesmo, chama 
//função playSound e toca o item guardado na váriavel SongItem
function playComposition(songArray) {
let wait = 0;

  for(let SongItem of songArray) {
    setTimeout(() =>{
      playSound(`key${SongItem}`);
    },wait);

    wait += 250;
  }
}


