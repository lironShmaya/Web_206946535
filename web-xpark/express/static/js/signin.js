function validateForm() {
  let email = document.forms["signin"]["email"].value;
  let pass = document.forms["signin"]["pass"].value;
  if(email == ""){
    alert("Please enter a valid email address");
    return false
  } else if (pass == "" || pass.length < 8) {
    alert("Please enter a valid password");
    return false
  }
  return true;
}

const signinButton = document.querySelector('#submit');
signinButton.addEventListener('click', e => {
  const spinner = document.querySelector('.spinner');
  const doc = document.querySelector('.doc');
  doc.style.display = 'none';
  spinner.style.display = 'block';
  spinner.style.marginTop = '300px';
});