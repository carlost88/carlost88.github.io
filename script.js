const goToIndex = () => {
  document.location = 'index.html';
}
let countDown = 8;
document.querySelector(".loadingText").innerHTML="Creating account:  " +countDown+ " s";
setInterval(() => {
  countDown --;
  document.querySelector(".loadingText").innerHTML="Creatimg account:  " +countDown+ " s";
}, 1000);


setTimeout(goToIndex, 8000);
