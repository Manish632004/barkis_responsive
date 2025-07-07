
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const icon = document.getElementById("menuIcon");

    menu.classList.toggle("active");

    // Toggle icon text
    if (menu.classList.contains("active")) {
        icon.textContent = "✖"; // close icon
    } else {
        icon.textContent = "☰"; // menu icon
    }
}

// document.addEventListener('click', function (event) {
//     const menu = document.getElementById('mobileMenu');
//     const toggleBtn = document.querySelector('.menu-toggle');
//     if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
//         menu.classList.remove('active');
//     }
// });
