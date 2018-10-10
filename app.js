'use strict';
//globals
var mainSection = document.getElementById('clickMe');
var disp1 = document.getElementById('item1');
var disp2 = document.getElementById('item2');
var disp3 = document.getElementById('item3');

//object construct
StoreItem.array = [];
function StoreItem(src, title) {
  this.src = src;
  this.title = title;
  this.liked = 0;
  this.viewed = 0;

  StoreItem.array.push(this);
}

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


disp1.src = StoreItem.array[0].src;
disp2.src = StoreItem.array[1].src;
disp3.src = StoreItem.array[2].src;



