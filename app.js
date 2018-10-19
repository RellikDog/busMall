'use strict';
//globals
var picSection = document.getElementById('clickMe');
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
var numOne;
var numTwo;
var numTre;
function StoreItem(src, title) {
  this.src = src;
  this.title = title;
  this.liked = 0;
  this.viewed = 0;

  StoreItemArray.push(this);
}
//localstore
if (!localStorage.getItem('itemData')) {
  var StoreItemArray = [];
  //Image objects
  new StoreItem('/img/bag.jpg', 'Droid Bag');
  new StoreItem('img/banana.jpg', 'Banana Slicer');
  new StoreItem('./img/bathroom.jpg', 'Bathroom Stand');
  new StoreItem('./img/boots.jpg', 'Rain Boots');
  new StoreItem('./img/breakfast.jpg', 'All-in-One Breakfast Maker');
  new StoreItem('./img/bubblegum.jpg', 'Meatball Bubble Gum');
  new StoreItem('./img/chair.jpg', 'Abstract Chair');
  new StoreItem('./img/cthulhu.jpg', 'Cthulhu Miniature');
  new StoreItem('./img/dog-duck.jpg', 'Duck Costume for Dogs');
  new StoreItem('./img/dragon.jpg', 'Novelty Dragon Meat');
  new StoreItem('./img/pen.jpg', 'Silverware Shaped Pen Caps');
  new StoreItem('./img/pet-sweep.jpg', 'Pet Dusting Acessory');
  new StoreItem('./img/scissors.jpg', 'Pizza Shears');
  new StoreItem('./img/shark.jpg', 'Shark Shaped Sleeping Bag');
  new StoreItem('./img/tauntaun.jpg', 'StarWars Sleeping Bag');
  new StoreItem('./img/unicorn.jpg', 'Authentic Unicorn Meat');
  new StoreItem('./img/water-can.jpg', 'Worlds Best Water Can');
  new StoreItem('./img/wine-glass.jpg', 'Artsy Wine Glass');
  new StoreItem('/img/usb.gif', 'Wiggly USB Stick');
  new StoreItem('/img/sweep.png', 'Baby Mop');
} else { // if local storage, grab that data and use it
  StoreItemArray = JSON.parse(localStorage.getItem('itemData'));
}



var renderNewOptions = function () {
  do {
    numOne = Math.floor(Math.random() * StoreItemArray.length);
  } while (numOne === usedImage1 || numOne === usedImage2 || numOne === usedImage3);
  do {
    numTwo = Math.floor(Math.random() * StoreItemArray.length);
  } while (numTwo === usedImage1 || numTwo === usedImage2 || numTwo === usedImage3 || numTwo === numOne);
  do {
    numTre = Math.floor(Math.random() * StoreItemArray.length);
  } while (numTre === usedImage1 || numTre === usedImage2 || numTre === usedImage3 || numTre === numTwo || numTre === numOne);
  disp1.src = StoreItemArray[numOne].src;
  disp2.src = StoreItemArray[numTwo].src;
  disp3.src = StoreItemArray[numTre].src;

  StoreItemArray[numOne].viewed++;
  StoreItemArray[numTwo].viewed++;
  StoreItemArray[numTre].viewed++;

  disp1.dataset.index = numOne;
  disp2.dataset.index = numTwo;
  disp3.dataset.index = numTre;

  disp1Tit.textContent = StoreItemArray[numOne].title;
  disp2Tit.textContent = StoreItemArray[numTwo].title;
  disp3Tit.textContent = StoreItemArray[numTre].title;

  usedImage1 = numOne;
  usedImage2 = numTwo;
  usedImage3 = numTre;
  itemClicks++;
  if (itemClicks === 25) {
    localStorage.setItem('itemData', JSON.stringify(StoreItemArray));
    picSection.removeEventListener('click', onClick);
    picSection.parentElement.removeChild(picSection);
    makeChartData();
    
    //======================================================
    var ctx = document.getElementById('myChart');
    var scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: comboArray2,
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
              display: true,
              labelString: 'Times Viewed',
              fontSize: 20
            }
          }],
          yAxes: [{
            type: 'linear',
            // position: 'bottom',
            scaleLabel: {
              display: true,
              labelString: 'Times Liked',
              fontSize: 20
            }
          }]
        }
      }
    });
    //
    makeButt1();
    makeButt2();
  }
};
renderNewOptions();
var onClick = function (event) {
  if (event.target.id === 'item1' || event.target.id === 'item2' || event.target.id === 'item3') {
    StoreItemArray[event.target.dataset.index].liked++;
    renderNewOptions();
  }
  console.log(event.target);
};
picSection.addEventListener('click', onClick);


//==========================================================
//chart
//=========================================================
var comboArray = [];
var comboArray2 = [];
var makeChartData = function () {

  // var picNames = [];
  // var picLikes = [];
  // var picViews = [];
  var colors = ['rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(2, 36, 209, 1)',
    'rgba(173, 39, 206, 1)',
    'rgba(191, 114, 59, 1)',
    'rgba(216, 4, 4, 1)',
    'rgba(0,0,0,1)',
    'rgba(0, 249, 120, 1)',
    'rgba(7, 122, 18, 1)',
    'rgba(108, 122, 110, 1)',
    'rgba(211, 57, 2, 1)',
    'rgba(232, 0, 0, 1)',
    'rgba(249, 255, 86, 1)',
    'rgba(0, 237, 249, 1)',
    'rgba(249, 100, 100, 1)',
    'rgba(200, 50, 249, 1)',
  ];
  for (var i in StoreItemArray) {
    // picNames.push(StoreItemArray[i].title);
    comboArray.push({
      x: StoreItemArray[i].viewed,
      y: StoreItemArray[i].liked,
    });
    // colors.push('red');
  }
  for (var x in StoreItemArray) {
    comboArray2.push({
      label: StoreItemArray[x].title,
      data: [comboArray[x]],
      backgroundColor: colors[x],
      pointRadius: 10
    });
  }
  // var myChart = new Chart(ctx, scatterChart);
};


// location.reload();
// localStorage.clear();
//=====================================
//make buttons
var makeButt1 = function(){
  var mainAppend = document.getElementById('main');
  var butt1 = document.createElement('button');
  butt1.setAttribute('type', 'button');
  butt1.textContent = 'Reset Data';
  mainAppend.appendChild(butt1);
  butt1.addEventListener('click', butt1Func);
};
var butt1Func = function(){
  localStorage.clear();
  location.reload();
};
//
var makeButt2 = function(){
  var mainAppend = document.getElementById('main');
  var butt2 = document.createElement('button');
  butt2.setAttribute('type', 'button');
  butt2.textContent = 'Add more data';
  mainAppend.appendChild(butt2);
  butt2.addEventListener('click', butt2Func);
};
var butt2Func = function(){
  location.reload();
};


