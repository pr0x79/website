// Get the sort buttons
const sortNewestButton = document.getElementById('sort-newest');
const sortOldestButton = document.getElementById('sort-oldest');

// Get the list of post previews
const postPreviews = document.querySelectorAll('.post-preview');

// Add event listeners to the sort buttons
sortNewestButton.addEventListener('click', () => {
  sortPosts(postPreviews, 'newest');
});
sortOldestButton.addEventListener('click', () => {
  sortPosts(postPreviews, 'oldest');
});

// Define the sortPosts function
function sortPosts(postPreviews, criteria) {
  // Convert the NodeList of post previews to an array
  const posts = Array.from(postPreviews);
  
  // Sort the posts according to the chosen criteria
  if (criteria === 'newest') {
    posts.sort((a, b) => {
      const dateA = new Date(a.querySelector('.post-date').textContent);
      const dateB = new Date(b.querySelector('.post-date').textContent);
      return dateB - dateA;
    });
  } else if (criteria === 'oldest') {
    posts.sort((a, b) => {
      const dateA = new Date(a.querySelector('.post-date').textContent);
      const dateB = new Date(b.querySelector('.post-date').textContent);
      return dateA - dateB;
    });
  }
  
  // Remove the sorted posts from the page
  postPreviews.forEach((preview) => {
    preview.parentNode.removeChild(preview);
  });
  
  // Add the sorted posts back to the page
  const postsContainer = document.getElementById('posts');
  posts.forEach((post) => {
    postsContainer.appendChild(post);
  });
}