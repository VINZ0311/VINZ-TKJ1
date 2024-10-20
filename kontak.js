// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman saat formulir dikirim

    // Ambil nilai dari input formulir
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi sederhana
    if (name === '' || email === '' || message === '') {
        displayResult('Semua kolom harus diisi!', 'red');
        return;
    }

    // Jika validasi berhasil, tampilkan pesan sukses
    displayResult('Pesan Anda telah berhasil dikirim!', 'green');

    // Bersihkan formulir setelah pengiriman sukses
    document.getElementById('contactForm').reset();
});

// Fungsi untuk menampilkan pesan hasil
function displayResult(message, color) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.style.color = color;
}
