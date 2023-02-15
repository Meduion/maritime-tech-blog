const postFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the comment form
    const postTitle = document.querySelector('#postTitle').value.trim();
    const postBody = document.querySelector('#postBody').value.trim();
    console.log(postTitle);
    console.log(postBody);
  
    if (postTitle && postBody) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ postTitle, postBody }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        console.log(response);
        document.querySelector('#new-post-button').classList.remove('d-none');
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('#postForm')
    .addEventListener('submit', postFormHandler);