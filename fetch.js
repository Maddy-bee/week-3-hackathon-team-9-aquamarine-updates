
async function fetchData() {
  try {
    let response = await fetch(`https://api.lyrics.ovh/v1/${artistName.value}/${songTitle.value}`, {
      headers: {
      "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Handle your data
    console.log(data.lyrics); // Test .lyrics to output text only
    return data;
  } catch (error) {
    alert("We're sorry, we don't have that song yet, please try again!")
    // Handle any errors
  }
}

// Button
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", getAndDisplayLyrics);

// Text Input - Full element, requires .value for grabbing the text (ie artistName.value)
const artistName = document.querySelector(".artist-input"); 
const songTitle = document.querySelector(".title-input"); 

// waits for the fetch to finish, then runs the displayLyrics function
async function getAndDisplayLyrics() {
let theLyrics = await fetchData();
displayLyrics(theLyrics);
}

function displayLyrics(lyricObject) {
  let lyrics = document.getElementById("lyrics");

  // Split the lyrics by new lines, then append each line as a separate <p> element
  let lyricsArray = lyricObject.lyrics.split("\n");

  // Clear any existing content
  lyrics.textContent = "";

  // Append each line as a separate paragraph element
  lyricsArray.forEach(line => {
    let paragraph = document.createElement("p");
    paragraph.textContent = line; // Add the line of lyrics as text
    lyrics.appendChild(paragraph); // Append the paragraph to the lyrics element
  });
}



// // grabs the lyrics element, and replaces the textContent with the new lyrics
// function displayLyrics(lyricString) {
// let lyrics = document.getElementById("lyrics");
// lyrics.textContent = lyricString.lyrics;
// }

