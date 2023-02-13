const commentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the comment form
    const comment = document.querySelector('#commentBox').value.trim();
    console.log(comment);
  
    if (comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        console.log(response);
        document.location.reload;
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('#commentForm')
    .addEventListener('submit', commentFormHandler);