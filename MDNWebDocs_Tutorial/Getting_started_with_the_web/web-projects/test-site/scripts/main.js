let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/AirSqrew_4.gif') {
      myImage.setAttribute ('src','images/Miyamoto_san_S.png');
    } else {
      myImage.setAttribute ('src','images/AirSqrew_4.gif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  if(!myName || myName === null) {
    setUserName();
  } else {  localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
  }
}

myButton.onclick = function() {
  setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

