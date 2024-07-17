const bit = document.querySelector("#bitcoin");
const eith = document.querySelector("#Eitherum");
const doge = document.querySelector("#dogecoin");


let data = ("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin,bitcoin,ethereum&vs_currencies=usd")
fetch(data)
  .then((response) => response.json())
  .then((data) => {
    doge.textContent = data.dogecoin.usd;
    bit.textContent = data.bitcoin.usd;
    eith.textContent = data.ethereum.usd;
  })
  .catch((error) => console.error("Error:", error));
