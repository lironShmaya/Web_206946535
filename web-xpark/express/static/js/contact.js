function validateForm () {
    let fname = document.forms["signup"]["fullName"].value;
    let lname = document.forms["signup"]["username"].value;
    let email = document.forms["signup"]["email"].value;

    if (fname == "") {
      alert('Name must be filled out');
      return false
    } else if(!fname.match(/^[a-zA-Z]*$/)) {
      alert("Please fillout you full name using only English letters.")
    } else if (fullName.length < 2) {
      alert('Name is too short');
      return false
    } else if (fname.length > 50) {
      alert('Name is too long');
      return false
    }
    else if (lname == ""){
      alert('Last name must be filled out');
      return false
    }
    else if (mail == "") {
      alert('Please enter a valid email address')
      return false
    }
    else if (mail.length < 10) {
      alert("Please enter a valid email address")
      return false
    }
      else if (email == "") {
      alert('Please enter a valid email address')
      return false
    }
    else if (subject == "") {
        alert('Please enter your message')
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

