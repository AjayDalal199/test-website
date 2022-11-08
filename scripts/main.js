// alert("hello");
const myImage = document.querySelector("img");
const myHeading = document.querySelector("h1");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-logo.png") {
        myImage.setAttribute("src", "images/chrome-logo.png");
        myHeading.textContent = "Chrome is cool";
    } else {
        myImage.setAttribute("src", "images/firefox-logo.png");
        myHeading.textContent = "Mozilla is cool";
    }
}

let myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("Please Enter your name");
    
    if(!myName) {
        setUserName(); 
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}