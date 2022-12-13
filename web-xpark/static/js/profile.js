const getLocalAbout = JSON.parse(localStorage.getItem("about"))
document.getElementById('fullName').innerHTML = getLocalAbout.fullName
document.getElementById('username').innerHTML = getLocalAbout.username
document.getElementById('contact').innerHTML = getLocalAbout.email
