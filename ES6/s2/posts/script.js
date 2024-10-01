
// Q2 promises 


// fetch Users and Create Tabs
function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()).then(users => {
            createTabs(users);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

function createTabs(users) {
    const tabsContainer = document.getElementById('tabs');
    users.forEach(user => {
        // Create a div for each user as a tab
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = user.username;
        tab.dataset.userId = user.id;

        // fetch posts for the clicked user tab
        tab.addEventListener('click', () => {
            // Fetch posts when a tab is clicked
            fetchUserPosts(user.id);
            // Set the clicked tab as active
            setActiveTab(tab);
        });

        tabsContainer.appendChild(tab);
    });
}

function setActiveTab(activeTab) {
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('active'));

    activeTab.classList.add('active');
}

// fetch Posts When a Tab Is Clicked
async function fetchUserPosts(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json(); // Parse the posts response
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    // Create a list item for each post title and append it to the posts container
    posts.forEach(post => {
        const postItem = document.createElement('li');
        postItem.textContent = post.title;
        postsContainer.appendChild(postItem);
    });
}

// on page load
fetchUsers();