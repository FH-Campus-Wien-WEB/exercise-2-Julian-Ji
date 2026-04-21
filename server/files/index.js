window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      bodyElement.innerHTML = "<h1>My Movie Collection</h1>";
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
        const movieArticle = document.createElement("article");
        movieArticle.id = movie.imdbID;
        movieArticle.innerHTML = `
          <h2>${movie.Title}</h2>
          <img src="${movie.Poster}" alt="${movie.Title}">
          <p>${movie.Plot}</p>
          <ul>
            <li><strong>Released:</strong> ${movie.Released}</li>
            <li><strong>Runtime:</strong> ${movie.Runtime} min</li>
            <li><strong>Genres:</strong> ${movie.Genres.join(", ")}</li>
            <li><strong>Directors:</strong> ${movie.Directors.join(", ")}</li>
            <li><strong>Actors:</strong> ${movie.Actors.join(", ")}</li>
            <li><strong>IMDb Rating:</strong> ${movie.imdbRating}</li>
          </ul>
        `;
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Edit'
        buttonElement.onclick = function() {
          location.href = 'edit.html?imdbID=' + movie.imdbID
        }
        movieArticle.appendChild(editBtn)
        bodyElement.appendChild(movieArticle)
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
