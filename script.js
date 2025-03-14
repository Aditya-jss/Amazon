document.addEventListener("DOMContentLoaded", function() {
    // This script will dynamically modify the subheader text or content if needed
    const dropbtns = document.querySelectorAll('.dropbtn');
    dropbtns.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            const dropdown = btn.nextElementSibling;
            dropdown.style.display = 'block';
        });
        btn.addEventListener('mouseout', () => {
            const dropdown = btn.nextElementSibling;
            dropdown.style.display = 'none';
        });
    });
});
