// Data dummy untuk pengguna
const dummyUsers = [
    { username: "pahri", email: "pahri@example.com", password: "123" },
    { username: "pahri", email: "pahri@example.com", password: "123" },
  ];
  
  // Simpan data dummy ke localStorage saat pertama kali (jika belum ada)
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(dummyUsers));
  }
  