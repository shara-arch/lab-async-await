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