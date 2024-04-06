document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("confirmBtn").addEventListener("click", function() {
    // Mengarahkan pengguna ke WhatsApp dengan pesan "saya ingin mengonfirmasi"
    window.location.href = "https://wa.me/6287777483865?text=Saya%20ingin%20mengonfirmasi%20pembayaran%20saya";
  });
});
