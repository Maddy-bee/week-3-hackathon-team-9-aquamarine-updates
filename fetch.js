
// variables to inject interpolation into the api fetch request
let artistName = "Beyonce";
let songTitle = "Diva";

async function fetchData() {
    try {
      let response = await fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`, {
        headers: {
        "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Handle your data
      console.log(data.lyrics); // .lyrics to output text only
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle any errors
    }
  }

  fetchData();

