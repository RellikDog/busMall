'use strict';
//globals
var mainSection = document.getElementById('clickMe');
var disp1 = document.getElementById('item1');
var disp2 = document.getElementById('item2');
var disp3 = document.getElementById('item3');
var disp1Tit = document.getElementById('item1Tit');
var disp2Tit = document.getElementById('item2Tit');
var disp3Tit = document.getElementById('item3Tit');
var usedImage1;
var usedImage2;
var usedImage3;
var itemClicks = 0;
//object construct
StoreItem.array = [];
function StoreItem(src, title) {
  this.src = src;
  this.title = title;
  this.liked = 0;
  this.viewed = 0;

  StoreItem.array.push(this);
}
//Image objects
new StoreItem ('/img/bag.jpg', 'Droid Bag');
new StoreItem ('img/banana.jpg', 'Banana Slicer');
new StoreItem ('./img/bathroom.jpg', 'Bathroom Stand');
new StoreItem ('./img/boots.jpg', 'Rain Boots');
new StoreItem ('./img/breakfast.jpg', 'All-in-One Breakfast Maker');
new StoreItem ('./img/bubblegum.jpg', 'Meatball Bubble Gum');
new StoreItem ('./img/chair.jpg', 'Abstract Chair');
new StoreItem ('./img/cthulhu.jpg', 'Cthulhu Miniature');
new StoreItem ('./img/dog-duck.jpg', 'Duck Costume for Dogs');
new StoreItem ('./img/dragon.jpg', 'Novelty Dragon Meat');
new StoreItem ('./img/pen.jpg', 'Silverware Shaped Pen Caps');
new StoreItem ('./img/pet-sweep.jpg', 'Pet Dusting Acessory');
new StoreItem ('./img/scissors.jpg', 'Pizza Shears');
new StoreItem ('./img/shark.jpg', 'Shark Shaped Sleeping Bag');
new StoreItem ('./img/tauntaun.jpg', 'StarWars Sleeping Bag');
new StoreItem ('./img/unicorn.jpg', 'Authentic Unicorn Meat');
new StoreItem ('./img/water-can.jpg', 'Worlds Best Water Can');
new StoreItem ('./img/wine-glass.jpg', 'Artsy Wine Glass');

var renderNewOptions = function () {
  do{
    var numOne = Math.round(Math.random() * StoreItem.array.length);
  }while(numOne === usedImage1 || numOne === usedImage2 || numOne === usedImage3);
  do{
    var numTwo = Math.round(Math.random() * StoreItem.array.length);
  }while(numTwo === usedImage1 || numTwo === usedImage2 || numTwo === usedImage3 || numTwo === numOne);
  do{
    var numTre = Math.round(Math.random() * StoreItem.array.length);
  }while(numTre === usedImage1 || numTre === usedImage2 || numTre === usedImage3 || numTre === numTwo || numTre === numOne);
  disp1.src = StoreItem.array[numOne].src;
  disp2.src = StoreItem.array[numTwo].src;
  disp3.src = StoreItem.array[numTre].src;

  StoreItem.array[numOne].viewed++;
  StoreItem.array[numTwo].viewed++;
  StoreItem.array[numTre].viewed++;

  disp1.dataset.index = numOne;
  disp2.dataset.index = numTwo;
  disp3.dataset.index = numTre;

  disp1Tit.textContent = StoreItem.array[numOne].title;
  disp2Tit.textContent = StoreItem.array[numTwo].title;
  disp3Tit.textContent = StoreItem.array[numTre].title;

  usedImage1 = numOne;
  usedImage2 = numTwo;
  usedImage3 = numTre;
  itemClicks++;
  if (itemClicks === 25) {
    mainSection.removeEventListener('click', onClick);
  }
};
renderNewOptions();
var onClick = function (event){
  if (event.target.id === 'item1' || event.target.id === 'item2' || event.target.id === 'item3') {
    StoreItem.array[event.target.dataset.index].liked++;
    renderNewOptions();
  }
  console.log(event.target);
};
mainSection.addEventListener('click', onClick);


