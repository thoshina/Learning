const myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/AirSqrew_4.gif') {
      myImage.setAttribute ('src','images/Miyamoto_san_S.png');
    } else {
      myImage.setAttribute ('src','images/AirSqrew_4.gif');
    }
}