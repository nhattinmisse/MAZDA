$(document).ready(function() {
    $('.filter-item label').click(function() {
        $(this).parent().toggleClass('active');
    });
});
const closeIcon = document.querySelector('.close-icon');
const floatingIcons = document.querySelector('.floating-icons');

closeIcon.addEventListener('click', () => {
floatingIcons.style.display = 'none';
});

// Hiển thị lại icons khi cần thiết (ví dụ: sau một khoảng thời gian hoặc khi người dùng thực hiện một hành động nào đó)
// ...
// Lấy các phần tử menu
const menuItems = document.querySelectorAll('nav ul li');

// Thêm sự kiện click cho mỗi mục menu
menuItems.forEach(item => {
item.addEventListener('click', () => {
    // Kiểm tra xem mục menu có submenu hay không
    const submenu = item.querySelector('ul');
    if (submenu) {
    // Ẩn/hiện submenu
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
});
});