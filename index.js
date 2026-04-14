//Fetch Data from API
async function fetchPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
    
}
//Display posts
function displayPosts(posts) {
    const postList = document.getElementById("post-list");
    posts.forEach(post => {
        //Create elements
        const li = document.createElement("li");
        const h1 = document.createElement("h1")
        const p = document.createElement("p");
        //set content
        h1.textContent = post.title;
        p.textContent = post.body;

        // Append to li
        li.appendChild(h1);
        li.appendChild(p);
       

    });
}
