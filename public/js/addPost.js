const addPost = (event) => {
    event.preventDefault();

    document.querySelector('#postForm').classList.remove('d-none');
    document.querySelector('#new-post-button').classList.add('d-none');
  }

  document
  .querySelector('#new-post-button')
  .addEventListener('click', addPost);