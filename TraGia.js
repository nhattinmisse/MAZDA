document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Bạn đã nhấp vào: ' + this.textContent);
        });
    });
});

function updatePrice() {
    const dongXe = document.getElementById("dongXe").value;
    const phienBan = document.getElementById("phienBan").value;
    const giaXe = parseInt(dongXe) + parseInt(phienBan);
    document.getElementById("giaXe").innerText = giaXe.toLocaleString();
    calculateLoan();
}

function calculateLoan() {
    const giaXe = parseInt(document.getElementById("giaXe").innerText.replace(/,/g, '')) || 0;
    const soTienTraTruoc = parseInt(document.getElementById("soTienTraTruoc").value);
    const kyHanVay = parseInt(document.getElementById("kyHanVay").value);
    const laiSuat = parseFloat(document.getElementById("laiSuat").value);

    const traTruoc = giaXe * soTienTraTruoc / 100;
    const tongTienVay = giaXe - traTruoc;
    const tongTienLai = tongTienVay * laiSuat / 100 * kyHanVay;
    const tongTienVayLai = tongTienVay + tongTienLai;

    document.getElementById("traTruoc").innerText = traTruoc.toLocaleString();
    document.getElementById("tongTienVay").innerText = tongTienVay.toLocaleString();
    document.getElementById("laiSuatText").innerText = laiSuat.toLocaleString();
    document.getElementById("tongTienLai").innerText = tongTienLai.toLocaleString();
    document.getElementById("tongTienVayLai").innerText = tongTienVayLai.toLocaleString();
}