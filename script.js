
document.getElementById("btn").addEventListener("click", function () {
  let isUserReady = confirm("Are you ready?");
  console.log(isUserReady);
  if (isUserReady) {
    document.getElementById("result").textContent = "User is ready!";
  } else {
    document.getElementById("result").textContent = "User is not ready.";
  }
});