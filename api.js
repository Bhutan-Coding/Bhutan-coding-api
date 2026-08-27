if (!BhutanAPI.userAllowed) {
    document.body.innerHTML = "<h1>Access Rejected ❌</h1>";
}
<!------- window ------->
  
window.location.href = "https://bhutan-coding.github.io/rejected";
<!------- pages ------->
  
throw new Error("Page rejected");

res.status(403).send("Forbidden");

if (window.location.hostname === "bhutan-coding.github.io") {
    console.log("Welcome to Bhutan Coding!");
} else {
    console.log("REDIRECTING.");
}
