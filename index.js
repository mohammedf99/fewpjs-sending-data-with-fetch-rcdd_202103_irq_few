// Add your code here

const submitData = (userName, userEmail) => {
  const URL = "http://localhost:3000/dogs";

  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    }).then((response) => response.json()).then((json) => {
        const body = document.getElementsByTagName('body')[0];
        const p = document.createElement('p')
        p.innerHTML = `${json.id}`
        body.append(p);
    }).catch((error) => console.log(error.message))
  });
}

submitData("mohammed", "hamid");