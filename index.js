// Add your code here

const URL = "http://localhost:3000/dogs";

fetch(URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com"
  });
})
