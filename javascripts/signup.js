const database = [];

const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'All fields are required!',
            confirmButtonColor: '#3085d6'
        });
        return;
    }

    const user = { username, email, password };
    database.push(user);

    console.log('Current database:', database);

    Swal.fire({
        icon: 'success',
        title: 'Signup Successful!',
        text: 'You have successfully signed up.',
        confirmButtonText: 'Proceed',
        confirmButtonColor: '#28a745'
    }).then(() => {
        window.open('./index.html', '_blank');
    });

    signupForm.reset();
});





document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const passwordIcon = document.getElementById('togglePassword');
    const isPasswordVisible = passwordField.type === 'text';
  
    passwordField.type = isPasswordVisible ? 'password' : 'text';
  
    if (isPasswordVisible) {
      passwordIcon.src = '/assets/Invisible.png';
    } else {
      passwordIcon.src = '/assets/Eye.png';
    }
  
    passwordIcon.style.transform = 'rotate(360deg)';
    
    setTimeout(() => {
      passwordIcon.style.transform = 'rotate(0deg)';
    }, 300); 
  });
  