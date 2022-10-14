if (window.location.toString() === 'https://www.facebook.com/'){
//change images
const imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?resize=1536,1097' 
}
const blackScreen = document.querySelector('body');
const newDiv = document.createElement('img');
newDiv.style.height = "100vh";
newDiv.style.width = "100vw";
newDiv.setAttribute('src', 'https://thumbs.dreamstime.com/b/funny-face-baby-27701492.jpg') 
blackScreen.innerHTML = '';
blackScreen.appendChild(newDiv);

// chrome.tabs.getSelected({active: true, lastFocusedWindow: true}, tabs => {
//     let url = tabs[0].url;
//     // use `url` here inside the callback because it's asynchronous!
// });
}
