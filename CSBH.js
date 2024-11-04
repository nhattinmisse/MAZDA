document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.parentElement.nextElementSibling;
        if (content.style.display === "none" || !content.style.display) {
            content.style.display = "block";
            btn.textContent = "-";
        } else {
            content.style.display = "none";
            btn.textContent = "+";
        }
    });
});