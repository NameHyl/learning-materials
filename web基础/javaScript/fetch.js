// get基本使用
fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
// post使用
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({ name: "123" }),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(response => response.json())
    .then(data => { console.log(data); })