const nomorAdmin = "6283153979879";

function beli(namaProduk, harga) {
  const pesan = `Halo admin NOKOSHUB 👋

Saya mau membeli:

Produk : ${namaProduk}
Harga  : ${harga}

Apakah stok masih tersedia?`;
  
  const url =
    "https://wa.me/" +
    nomorAdmin +
    "?text=" +
    encodeURIComponent(pesan);
  
  window.open(url, "_blank");
}
