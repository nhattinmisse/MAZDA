function filterCards() {
    const carSelect = document.getElementById('carSelect').value;
    const regionSelect = document.getElementById('regionSelect').value;
    const cards = document.querySelectorAll('.card-item');

    cards.forEach(card => {
        const car = card.getAttribute('data-car');
        const region = card.getAttribute('data-region');

        const showCar = carSelect === 'all' || carSelect === car;
        const showRegion = regionSelect === 'all' || regionSelect === region;

        if (showCar && showRegion) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}