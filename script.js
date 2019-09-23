function get() {
  fetch("https://frontend2019-28cd.restdb.io/rest/movies", {
    method: "get",
    headers: {
      "Content-type": "application/json; charset-utf-8",
      "x-apikey": "5d887478fd86cb75861e25fe",
      "cache-control": "no-cache"
    }
  })
    .then(elm => elm.json())
    .then(movies => {
      movies.forEach(addNewMovie);
    });
}

get();

function addNewMovie(movie) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h1").textContent = movie.name;
  copy.querySelector("h2").textContent = movie.year;
  copy.querySelector("p").textContent = movie.protagonist;
  document.querySelector("#app").appendChild(copy);
}

function post() {
  const movie = {
    name: "Limitless",
    protagonist: "santa",
    year: 2018
  };

  const postData = JSON.stringify(movie);
  console.log(postData);
  fetch("https://frontend2019-28cd.restdb.io/rest/movies", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887478fd86cb75861e25fe",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      addNewMovie(data);
    });
}

document.querySelector("button").addEventListener("click", elm => {
  post();
});
