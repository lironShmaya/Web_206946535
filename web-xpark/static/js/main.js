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

