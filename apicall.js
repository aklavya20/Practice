let urls = [
  "https://serpapi.com/search.json?q=Coffee&location=Austin,+Texas,+United+States&hl=en&gl=us&google_domain=google.com",
];

function apicall(urls) {
  fetch(urls)
    .then((res) => {
      if (res.ok) {
        return console.log(res.json());
      } else {
        return console.log("Error");
      }
    })
    .then((data) => {
      console.log(data);
    });
}

apicall(urls);
