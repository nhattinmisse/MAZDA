 //đky
 const text = "Nhập từ khóa tìm kiếm...";
 const searchInput = document.getElementById("search-input");
 let index = 0;

 function typeEffect() {
   if (index < text.length) {
     searchInput.setAttribute("placeholder", searchInput.getAttribute("placeholder") + text.charAt(index));
     index++;
setTimeout(typeEffect, 100);
   }
 }

 window.onload = function() {
   typeEffect();
 };
// header 
 $(document).ready(function () {
   // Đảm bảo carousel hoạt động
   $('.carousel').carousel({
       interval: 5000 // Thay đổi hình ảnh mỗi 5 giây
   });

   // Bổ sung các sự kiện hoặc tương tác tại đây
   // Ví dụ: xử lý sự kiện cho các nút hoặc menu
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

//SUV

        $(document).ready(function() {
            $('#suv-link').click(function(event) {
                event.preventDefault();
                $('#suv-container').toggle();
            });
        });
  