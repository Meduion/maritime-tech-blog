const commentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the comment form
    const commentBody = document.querySelector('#commentBox').value.trim();
    const postId = document.querySelector('#commentForm').getAttribute("data-postId")
    console.log(commentBody);
  
    if (commentBody) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ commentBody, postId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        console.log(response);
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('#commentForm')
    .addEventListener('submit', commentFormHandler);