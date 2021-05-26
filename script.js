//tests
// fetch("https://api.thecatapi.com/v1/breeds")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
// const catResult = document.getElementById("cat-result");
// const searchBtn = document.getElementById("search-btn");
// searchBtn.addEventListener("click", getRandomCat);
// function getRandomCat() {
//   fetch("https://api.thecatapi.com/v1/images/search")
//     .then((response) => response.json())
//     .then((data) => {
//       catResult.innerHTML = `<img src="${data.url}"/>`;
//     });
// }
function getRandomCat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let url = data[0].url;
      let img = "<img src='" + url + "' height=300 width=auto/>";
      document.getElementById("result").innerHTML = img;
      // catResult.innerHTML = `<img src="${data.url}"/>`;
    });
}
