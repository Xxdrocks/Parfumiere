// Ambil elemen form login
const loginForm = document.getElementById('signupForm');

// Event listener untuk menangani form login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Mencegah refresh halaman

  // Ambil nilai dari input
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Ambil data dari localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Cek apakah username dan password cocok
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // Simpan data pengguna yang login ke localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    // Notifikasi sukses menggunakan SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Login successful!',
      text: `Welcome, ${user.username}!`,
    });

    // Redirect atau tindakan lain setelah login
    setTimeout(() => {
      window.location.href = "index.html"; // Ganti dengan halaman tujuan setelah login
    }, 1500);
  } else {
    // Jika username atau password salah
    Swal.fire({
      icon: 'error',
      title: 'Login failed',
      text: 'Invalid username or password!',
    });
  }
});


document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const passwordIcon = document.getElementById('togglePassword');
    const isPasswordVisible = passwordField.type === 'text';
  
   
    passwordField.type = isPasswordVisible ? 'password' : 'text';
  
    // Change icon and add animation
    if (isPasswordVisible) {
      passwordIcon.src = '../assets/Eye.png';
    } else {
      passwordIcon.src = '../assets/Invisible.png';
    }
  
    // Add animation effect to the icon
    passwordIcon.style.transform = 'rotate(360deg)';
    
    // Reset the animation after it's done
    setTimeout(() => {
      passwordIcon.style.transform = 'rotate(0deg)';
    }, 300); // Time in milliseconds to match the duration of transition
  });
  