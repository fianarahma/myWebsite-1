let search = document.querySelector('.search-box')

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

let navbar = document.querySelector('.navbarx')


let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".timeline-item");
    
    function reveal() {
        let windowHeight = window.innerHeight;
        items.forEach(item => {
            let position = item.getBoundingClientRect().top;
            if (position < windowHeight - 50) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }
    
    window.addEventListener("scroll", reveal);
    reveal();
});
// Menunggu halaman untuk dimuat
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(progress => {
        const skillPercentage = progress.getAttribute('data-skill'); // Mengambil data-skill
        progress.style.width = '0%';  // Setel lebar ke 0% terlebih dahulu

        // Membuat elemen span untuk menampilkan persentase
        const percentageText = document.createElement('span');
        percentageText.classList.add('progress-text');
        percentageText.textContent = '0%'; // Setel awal ke 0%

        progress.appendChild(percentageText); // Menambahkan span ke dalam progress bar

        setTimeout(() => {
            // Mulai animasi lebar dan tampilkan nilai persentase
            progress.style.width = skillPercentage;  
            percentageText.textContent = skillPercentage; // Menampilkan persentase yang benar
        }, 500); // Delay 500ms agar transisi animasi terlihat
    });
});


