"use strict"

// Creating variables
const entries = document.querySelector(".entries");

const template = document.querySelector(".production");

const button = document.querySelector("button[name=show]");

// Data Fetch function
const fetchData = async function(endpoint) {
  try {
    const response = await fetch(endpoint);
    const info = await response.json();

    if (!response.ok) {
      throw new Error(`There was a problem while connecting.`);
    }

    const animeList = info.data;

    const test = function(entry) {
      // Changing null to unknown for episodes (there is only one null in episodes and its beacuse that anime is still airing so API doesn't know how much episode it would be)
      if (!entry.episodes) {
        entry.episodes = "Unknown"
      }

      // Testing data for undefined or null
      if (!entry.rank || !entry.title || !entry.url || !entry.genres || !entry.images.jpg.image_url || !entry.score || !entry.duration || !entry.type || !entry.episodes) {
        throw new Error(`There was a problem with data.`);
      }
      
      // Template Cloning
      const clone = template.content.cloneNode(true);

      // Creating variables
      let title = clone.querySelector(".js_title");
      let link = clone.querySelector(".js_link");
      let image = clone.querySelector(".js_image");
      let score = clone.querySelector(".js_score");
      let genre = clone.querySelector(".js_genre");
      let duration = clone.querySelector(".js_duration");
      let type = clone.querySelector(".js_type");
      let episodes = clone.querySelector(".js_episodes");

      // Making array for storing genres
      let genreNames = [];

      // Loop for getting genres
      for (let i = 0; i < entry.genres.length; i++) {
        genreNames.push(entry.genres[i].name);
      }

      // Connecting class variables with data
      title.textContent = `${entry.rank} - ${entry.title}`;
      link.href = `${entry.url}`;
      image.src = `${entry.images.jpg.image_url}`;
      image.alt = `${entry.title}`;
      score.textContent = `Score: ${entry.score}`;
      genre.textContent = `Genres: ${genreNames.join(", ")}`;
      duration.textContent = `Duration: ${entry.duration}`;
      type.textContent = `Type: ${entry.type}`;
      episodes.textContent = `Number of Episodes: ${entry.episodes}`;

      entries.appendChild(clone);
    }
    
    // Going through array of top animes with forEach
    animeList.forEach(test);

    button.classList.replace("show", "hide")

  } catch (error) {
    entries.innerHTML = `<h2>Ooops</h2><br><p>${error.message}</p></br>`;
  }
}

button.addEventListener("click", () => fetchData("https://api.jikan.moe/v4/top/anime"));