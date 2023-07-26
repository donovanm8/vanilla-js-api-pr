// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
  const userListContainer = document.querySelector(".user-list");
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  userListContainer.innerHTML = users.map((user) => userHtml(user)).join("");
}

main();

function showUserPosts(userId) {
    console.log(localStorage.setItem("id", userId))
    window.location.href = `${window.location.origin}/user.html`
}
function userHtml(user) {
  return `<div class="user" onclick="showUserPosts(${user.id})">
    <div class="user-card">
    <div class="user-card__container">
    <h3>${user.name}</h3>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Phone:</b> ${user.phone}</p>
    <p>
    <b>Website:</b>
    <a href="https://${user.website}" target="_blank"
    >${user.website}</a
    >
    </p>
    </div>
    </div>
    </div>`;
}
