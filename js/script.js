const deskripsi = ['Web Developer', 'Fotografi', 'Editing', 'Olahrga']; // tipe data array
let count = 0;
let txtIndex = 0;
let currentTxt = ''; //mengetahui lagi di teks mana
let words = ''; // ambil satu huruf

(function ngetik() {
    // console.log(deskripsi[0]);
    if (count == deskripsi.length) {
        count = 0;
    } // jika count = deskripsi : count dikembalikan lagi ke 0

    // membuat variabel
    currentTxt = deskripsi[count]; //menampung

    words = currentTxt.slice(0, ++txtIndex);
    // console.log(words);

    // menampilkan dikelas efek-ngetik 
    document.querySelector('.efek-ngetik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);
})();