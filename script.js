let workTitle = document.getElementById('work'); // Elemen judul kerja  
let breakTitle = document.getElementById('break'); // Elemen judul jeda  

let workTime = 24; // Menit waktu kerja  
let breakTime = 5; // Menit waktu istirahat  

let seconds = 59; // Variabel untuk detik, diset ke 59 untuk memulai hitungan mundur dengan detik penuh  
let timer; // Variabel untuk menyimpan interval timer  

window.onload = () => {  
    resetTimer(); // Menampilkan waktu awal saat halaman dimuat  
};  

function resetTimer() {  
    clearInterval(timer); // Menghapus interval yang ada  
    document.getElementById('start').style.display = "block"; // Menampilkan tombol 'start'  
    document.getElementById('reset').style.display = "none"; // Menyembunyikan tombol 'reset'  
    seconds = 59; // Mengatur detik ke 59  
    document.getElementById('minutes').innerHTML = workTime; // Menampilkan menit kerja awal  
    document.getElementById('seconds').innerHTML = seconds; // Menampilkan detik awal  
    workTitle.classList.add('active'); // Mengaktifkan kelas 'active' pada judul kerja  
    breakTitle.classList.remove('active'); // Menghapus kelas 'active' dari judul jeda  
}  

function start() {  
    // Mengatur visibilitas tombol  
    document.getElementById('start').style.display = "none"; // Menyembunyikan tombol 'start'  
    document.getElementById('reset').style.display = "block"; // Menampilkan tombol 'reset'  

    let workMinutes = workTime; // Menetapkan total menit kerja  
    let breakMinutes = breakTime; // Menetapkan total menit istirahat  
    let breakcount = 0; // Menginisialisasi jumlah jeda  

    timer = setInterval(() => {  
        // Menampilkan menit dan detik yang tersisa  
        document.getElementById('minutes').innerHTML = workMinutes;  
        document.getElementById('seconds').innerHTML = seconds;  

        seconds--; // Mengurangi detik  

        if (seconds < 0) {  
            workMinutes--; // Mengurangi menit kerja  
            if (workMinutes < 0) {  
                // Jika sudah waktunya untuk beralih ke waktu istirahat atau kerja  
                if (breakcount % 2 === 0) {  
                    workMinutes = breakMinutes; // Beralih ke waktu istirahat  
                    breakcount++; // Menambah jumlah jeda  
                    workTitle.classList.remove('active'); // Menonaktifkan judul kerja  
                    breakTitle.classList.add('active'); // Mengaktifkan judul jeda  
                } else {  
                    workMinutes = workTime; // Kembali ke waktu kerja  
                    breakcount++; // Menambah jumlah jeda  
                    breakTitle.classList.remove('active'); // Menonaktifkan judul jeda  
                    workTitle.classList.add('active'); // Mengaktifkan judul kerja  
                }  
            }  
            seconds = 59; // Mengatur detik ke 59 setelah menit berkurang  
        }  
    }, 1000); // Menjalankan fungsi setiap detik  
}  

// Menambahkan fungsi untuk tombol reset  
document.getElementById('reset').onclick = resetTimer; // Menambahkan event listener untuk tombol reset  