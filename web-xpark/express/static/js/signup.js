function validateForm () {
    let fullName = document.forms["signup"]["fullName"].value;
    let username = document.forms["signup"]["username"].value;
    let contact = document.forms["signup"]["contact"].value;
    let pass = document.forms["signup"]["pass"].value;
    let email = document.forms["signup"]["email"].value;
    let about = {fullName, username, email}
    console.log(about)
    localStorage.setItem("about", JSON.stringify(about))

    if (fullName == "") {
      alert('Name must be filled out');
      return false
    } else if(!fullName.match(/^[a-zA-Z]*$/)) {
      alert("Please fillout you full name using only English letters.")
    } else if (fullName.length < 2) {
      alert('Name is too short');
      return false
    } else if (fullName.length > 50) {
      alert('Name is too long');
      return false
    }
    else if (username == ""){
      alert('Username must be filled out');
      return false
    }
    else if (contact == "") {
      alert('Contact number must be filled out')
      return false
    }
    else if (contact.length < 10) {
      alert("Contact number to short")
      return false
    }
    else if (contact.length > 10) {
      alert("Contact number to long")
      return false
    }
     else if (pass == "" || pass.length < 8) {
      alert('Password must meet the requirements')
      return false
    }
      else if (email == "") {
      alert('Please enter a valid email address')
      return false
    }
      else if (IAgree === false){
      alert ("You must agree to the Terms and Services")
      return false
    }
    else if(!this.form.checkbox.checked){
    alert("You have to accept the Terms and Services")
    return false
    }
      else return true
}

const signupButton = document.querySelector('#submit');
signupButton.addEventListener('click', e => {
  const spinner = document.querySelector('.spinner');
  const doc = document.querySelector('.doc');
  doc.style.display = 'none';
  spinner.style.display = 'block';
  spinner.style.marginTop = '300px';
});

addEventListener('submit', () => {
});

