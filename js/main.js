// Descrizione
// Rifare, come visto in classe, l'esercizio Slider immagini con Vue
// Gestire navigazione immagini con click su freccie e pallini
// Vi allego sotto le immagini dello slider ma potete tranquillamente usare le vostre se preferite
// Bonus: fare eseguire il loop delle immagini, cambiando immagine ogni 3 secondi
const container = new Vue({
  el: '.picture',
  data: {
    index : 0,
    images: [
      {
        img : "./img/image1.jpg",
      },
      {
        img : "./img/image2.jpg",
      },
      {
        img :"./img/image3.jpg",
      },
      {
        img : "./img/image4.jpg",
      },
    ],
  },
  nextPic : function nextPic(){
    
  },
});
