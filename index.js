const getTextButton = document.getElementById('get-text')
getTextButton.addEventListener('click', getText)

const getUsersButton = document.getElementById('getUsers')
getUsersButton.addEventListener('click', getUsers)

const getPostsButton = document.getElementById('getPosts')
getPostsButton.addEventListener('click', getPosts)

const form = document.getElementById('addPosts')
form.addEventListener('submit', addPosts)

function getText(){
    fetch('sample.txt')
    .then(response => response.text())
    .then((data) => {
        const output = document.getElementById('output')
        output.textContent = data
    })
    .catch((error) => {
        console.log(error)
    })
}

function getUsers(){
    fetch('user.json')
    .then((response) => response.json())
    .then((data) => {
        const users = document.querySelector('#users')
        let output = '<h1> Users </h1>'
        data.forEach(user => {
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `
        })
        const userContent = document.getElementById('users')
        userContent.innerHTML = output
    })
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        let output = '<h2> Posts </h2>'
        data.forEach(post => {
            output += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `
        })
        const posts = document.querySelector('#posts')
        posts.innerHTML = output
    })
}

function addPosts(e){
    e.preventDefault()

    let title = document.getElementById('title')
    let body = document.getElementById('body')

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST", 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title:title, body:body
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}
