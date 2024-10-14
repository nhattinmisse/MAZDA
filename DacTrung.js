document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const techLink = document.getElementById('tech-link');
    const artLink = document.getElementById('art-link');
    const safetyLink = document.getElementById('safety-link');

    const designLink = document.getElementById('design-link');
    const performanceLink = document.getElementById('performance-link');
    const techContent = document.getElementById('tech-content');
    const designContent = document.getElementById('design-content');
    const performanceContent = document.getElementById('performance-content');
    const safetyContent = document.getElementById('safety-content');

    // Function to show the selected content
    function showContent(contentId) {
        // Hide all sections
        designContent.style.display = 'none';
        techContent.style.display = 'none';
        performanceContent.style.display = 'none';
        safetyContent.style.display = 'none';

        // Show the selected section
        document.getElementById(contentId).style.display = 'block';
    }

    homeLink.addEventListener('click', function() {
        alert('Bạn đã nhấp vào Trang Chủ');
    });

    techLink.addEventListener('click', function() {
        alert('Bạn đã nhấp vào Công Nghệ');
    });

    artLink.addEventListener('click', function() {
        alert('Bạn đã nhấp vào Văn Hành');
    });

    safetyLink.addEventListener('click', function() {
        alert('Bạn đã nhấp vào An Toàn');
    });

    // New event listeners for the main section
    designLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        showContent('design-content');
    });

    performanceLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        showContent('performance-content');
    });

    techLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        showContent('tech-content');
    });

    safetyLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        showContent('safety-content');
    });
});