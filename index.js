// Add your code here

const submitData = (userName, userEmail) => {
  const URL = "http://localhost:3000/dogs";

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    }).then((response) => response.json()).catch((error) => console.log(error.message))
  });
}