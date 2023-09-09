const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let container_el = document.getElementById("container");
function renderPosts() {
  let logo_el = document.createElement("img");
  let avatar_el = document.createElement("img");
  let header_el = document.createElement("header");

  logo_el.classList.add("logo");
  avatar_el.classList.add("avatar");

  logo_el.src = "images/logo.png";
  avatar_el.src = "images/user-avatar.png";

  header_el.append(logo_el);
  header_el.append(avatar_el);

  container_el.append(header_el);
  for (let i = 0; i < posts.length; i++) {
    let name_el = document.createElement("p");
    let location_el = document.createElement("p");
    let user_id_el = document.createElement("div");
    let post_avatar_el = document.createElement("img");
    let user_info_el = document.createElement("div");
    let post_el = document.createElement("img");
    let icon_heart_el = document.createElement("img");
    let icon_comment_el = document.createElement("img");
    let icon_dm_el = document.createElement("img");
    let icons_el = document.createElement("div");
    let likes_el = document.createElement("p");
    let comment_el = document.createElement("p");
    let post_body_el = document.createElement("div");
    let insta_el = document.createElement("section");
    let post_div_el = document.createElement("section");

    name_el.classList.add("font-weight700");
    location_el.classList.add("font-size12");
    user_id_el.classList.add("user-id");
    post_avatar_el.classList.add("avatar");
    user_info_el.classList.add("user-info");
    post_el.classList.add("post");
    icon_heart_el.classList.add("icon");
    icon_comment_el.classList.add("icon");
    icon_dm_el.classList.add("icon");
    icons_el.classList.add("icons");
    likes_el.classList.add("font-weight700");
    post_body_el.classList.add("post-body");
    post_div_el.classList.add("post-div");

    user_id_el.append(name_el);
    user_id_el.append(location_el);
    user_info_el.append(post_avatar_el);
    user_info_el.append(user_id_el);
    icons_el.append(icon_heart_el);
    icons_el.append(icon_comment_el);
    icons_el.append(icon_dm_el);
    post_body_el.append(icons_el);
    post_body_el.append(likes_el);
    post_body_el.append(comment_el);
    insta_el.append(user_info_el);
    insta_el.append(post_el);
    insta_el.append(post_body_el);

    container_el.append(insta_el);

    name_el.textContent = `${posts[i].name}`;
    location_el.textContent = `${posts[i].location}`;
    post_avatar_el.src = `${posts[i].avatar}`;
    post_el.src = `${posts[i].post}`;
    icon_heart_el.src = "images/icon-heart.png";
    icon_comment_el.src = "images/icon-comment.png";
    icon_dm_el.src = "images/icon-dm.png";
    likes_el.textContent = `${posts[i].likes} likes`;
    comment_el.innerHTML = `<span class="font-weight700">${posts[i].username}</span> ${posts[i].comment}`;

    post_el.addEventListener("dblclick", function () {
      posts[i].likes += 1;
      likes_el.textContent = `${posts[i].likes} likes`;
    });

    icon_heart_el.addEventListener("dblclick", function () {
      posts[i].likes += 1;
      likes_el.textContent = `${posts[i].likes} likes`;
    });

    if (i != posts.length - 1) {
      container_el.append(post_div_el);
    }
  }
}

window.onload = function () {
  renderPosts();
};
