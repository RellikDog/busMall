**The Focus Group**
As a FGT(focus groupt tester) I want to come to a page that is simple and easy to read so that I don't get confused or have to spend extra time trying to figure out what I shoudld be doing.

As a FGT I want to visit a website that works and acuratly tracks my input so I don't have to waste time trying to resubmit or make sure that my votes were counted.

As a FGT I want multiple options and to not be asked repeating questions so that I feel like my time is valuable.

As a FGT I want the site to rememeber me by user name and remember my past inputs

**The Developer**
As the developer I want a page that is bug free and operates as expected.

Developers want to add some of their signiture style to the page without losing the base requirements set forth.

As a developer I want to use best pratices to insure that prospective emplyers checking out my site withh be impressed with the code.

As the developer I want visitors to enjoy comming to the site and want to come back so that the site powner is pleased.

**The Marketing Research Team**
As the MRT(marketing research team) we want a site the displays all of our products to the FGTs equally so that we get good data.

As the MRT we want the FGTs to like the way the site looks and operates so that they generate posoitive feeedback.  

As the MRT we want a site that arcutratly tracks and stores data so that the data is usable in practice.

The MRT also wants to have easy access to the site so that they can modify the products being focus tested. 


notes from peter
//source array
let originalArr = ['whatever1','whatever2','whatever3','whatever4','whatever5','whatever6', 'whatever7', 'whatever8', 'whatever9' ];
let randosGrabbed = [];

let GoingToBeSplicedArr = originalArr.map(ele => ele);


var randoGrabber = function(){

  GoingToBeSplicedArr = originalArr.map(ele => ele);// use [...orginalArr]

  let singleGrab = GoingToBeSplicedArr[Math.floor(Math.random() * GoingToBeSplicedArr.length)];
  randosGrabbed.push(singleGrab);

  let singleGrabIndexVal = GoingToBeSplicedArr.indexOf(singleGrab);
  GoingToBeSplicedArr.splice(singleGrabIndexVal, 1);
};

note from class
https://repl.it/@ncarignan/ExtralargeFakeGigahertz

var dynamicColors = function(){
  for (var i = 0; i < 20; i++) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    backgroundColors.push(`rgb(${r},${g},${b},5.0)`);
  };
  for (var i = 0; i < 20; i++) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    borderColors.push(`rgb(${r},${g},${b},5.0)`);
  };
};
