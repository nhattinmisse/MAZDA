// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const carImage = document.getElementById('car-image');
    const colorButtons = document.querySelectorAll('.color-btn');

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            switch (color) {
                case 'red':
                    carImage.src = 'imager/BangG4.png';
                    break;
                case 'white':
                    carImage.src = 'imager/BangG5.png';
                    break;
                case 'gray':
                    carImage.src = 'imager/BangG6.jpg';
                    break;
            }
        });
    });
});