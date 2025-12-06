// 1. Get DOM elements
const textarea = document.querySelector(".create-post textarea");
const postButton = document.querySelector(".create-post button");
const feed = document.querySelector(".feed");

// 2. When user clicks "Post"
postButton.addEventListener("click", function () {
  // Get text from textarea
  const text = textarea.value.trim();

  // If empty, do nothing
  if (text === "") {
    return;
  }

  // 3. Create a new post div
  const newPost = document.createElement("div");
  newPost.className = "post";

  // 4. Create <h4> for name
  const name = document.createElement("h4");
  name.textContent = "You";

  // 5. Create <p> for post text
  const content = document.createElement("p");
  content.textContent = text;

  // 6. Put h4 and p inside the post div
  newPost.appendChild(name);
  newPost.appendChild(content);

  // 7. Add the new post to the feed
  // Option A: add at the bottom
  feed.appendChild(newPost);

  // If you want newest post at top (just after create-post), use this instead:
  
//   const firstPost = feed.querySelector(".post");
//   if (firstPost) {
//     feed.insertBefore(newPost, firstPost);
//   } else {
//     feed.appendChild(newPost);
//   }
  


  textarea.value = "";
});

