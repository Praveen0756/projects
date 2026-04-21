const followers = document.querySelectorAll(".followers");

followers.forEach((followersCounter) => {
  followersCounter.innerText = "0";

  const updateFollowersCounter = () => {
    const target = +followersCounter.getAttribute("data-target");
    const c = +followersCounter.innerText;

    const increment = target / 500;

    if (c < target) {
      followersCounter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateFollowersCounter, 1);
    } else {
      followersCounter.innerText = target;
    }
  };

  updateFollowersCounter();
});
