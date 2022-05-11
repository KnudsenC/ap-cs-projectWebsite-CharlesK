function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

AD = getRandomInt(5);

Notification.requestPermission().then(function (permission) {
    console.log(permission);
});

var title = "DOWNLOAD NOW!";
var options = {};

// Minecraft
if(AD == 0) {
  options = {
    image: "img/minecraftDownload.png",
    body: "OMG, FREE MINECRAFT! DOWNLOAD NOW!",
    requireInteraction: true,
  }
} // Amgo
else if(AD == 1) {
  options = {
    image: "img/amDownload.png",
    body: "FREE AMOGUS????? SUS AMIGOS??? UIBIOHCMAPSTFKQVQRQPKVDPEAQPWNVGSGUR",
    requireInteraction: true,
  }
} // Hot dogs in your area
else if(AD == 2) {
  options = {
    image: "img/hotdogsDownload.jpeg",
    body: "SINGLE HOT DOGS IN YOUR AREA! CONTACT NOW!",
    requireInteraction: true,
  }
} // Donkey
else if(AD == 3) {
  options = {
    image: "img/donkeyDownload.jpg",
    body: "do it",
    requireInteraction: true,
  }
} //Coin Wars
else if(AD == 4) {
  options = {
    image: "img/coin.png",
    body: "DOWNLOAD COIN WARS! IT'S FREE, THE MOST FUN GAME EVER! BE A REAL STRATEGY GAMER.",
    requireInteraction: true,
  }
}

var notification = new Notification(title, options);

notification.onclick = function() {
  window.open("coinWars/index.html","_target");
};