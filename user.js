const postListEl = document.querySelector(".post-list");
const userId = localStorage.getItem("id");

function onSearchChange(event) {
  const id = event.target.value;
  renderUserPosts(id);
}

async function renderUserPosts(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id || userId}`
  );
  const posts = await res.json();
  postListEl.innerHTML = postsHtml = posts
    .map((post) => postHtml(post))
    .join("");
}

function postHtml(post) {
  return `<div class="post">
    <div class="post__title">${post.title}</div>
    <p class="post__body">${post.body}</p>
    </div>`;
}

renderUserPosts();
