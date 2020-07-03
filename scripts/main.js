let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kiamor.jpg') {
      myImage.setAttribute ('src','images/osasco.jpeg');
    } else {
      myImage.setAttribute ('src','images/kiamor.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Por favor, digite seu nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Kiamor é legal, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Kiamor é legal, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }