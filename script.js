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
      movies.forEach(movie => {
        const template = document.querySelector("template").content;
        const copy = template.cloneNode(true);
        copy.querySelector("h1").textContent = movie.name;
        copy.querySelector("h2").textContent = movie.year;
        copy.querySelector("p").textContent = movie.protagonist;
        document.querySelector("#app").appendChild(copy);
      });
    });
}

get();
