// Biến lưu trạng thái ngoại thất/nội thất
let isNgoaiThat = true;
  
// Chức năng chọn màu sắc
const colorOptions = document.querySelectorAll('.color-option');
const carImage = document.getElementById('carImage');

// Hàm cập nhật hình ảnh dựa trên lựa chọn màu và trạng thái (ngoại thất hoặc nội thất)
function updateCarImage(color) {
  const part = isNgoaiThat ? 'car-' : 'interior-'; // Xác định là ngoại thất hay nội thất
  carImage.src = `imager/${part}${color}.png`;
}

colorOptions.forEach(option => {
  option.addEventListener('click', function() {
    // Xóa viền chọn cũ
    colorOptions.forEach(c => c.classList.remove('selected'));
    // Thêm viền chọn mới
    this.classList.add('selected');
    
    // Lấy màu đã chọn và cập nhật hình ảnh xe
    const color = this.getAttribute('data-color');
    updateCarImage(color);
  });
});

// Chuyển đổi giữa ngoại thất và nội thất
document.getElementById('ngoaiThat').addEventListener('click', function() {
  isNgoaiThat = true;
  this.classList.add('btn-dark');
  this.classList.remove('btn-outline-dark');
  document.getElementById('noiThat').classList.remove('btn-dark');
  document.getElementById('noiThat').classList.add('btn-outline-dark');

  // Cập nhật hình ảnh xe dựa trên màu đã chọn và ngoại thất
  const selectedColor = document.querySelector('.color-option.selected').getAttribute('data-color');
  updateCarImage(selectedColor);
});

document.getElementById('noiThat').addEventListener('click', function() {
  isNgoaiThat = false;
  this.classList.add('btn-dark');
  this.classList.remove('btn-outline-dark');
  document.getElementById('ngoaiThat').classList.remove('btn-dark');
  document.getElementById('ngoaiThat').classList.add('btn-outline-dark');

  // Cập nhật hình ảnh xe dựa trên màu đã chọn và nội thất
  const selectedColor = document.querySelector('.color-option.selected').getAttribute('data-color');
  updateCarImage(selectedColor);
});