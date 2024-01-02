async function fetchData(){
    const respone = await
fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await respone.json();
console.log(data);
}

fetchData();