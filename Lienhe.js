document.getElementById('carLoanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const carPrice = parseInt(document.getElementById('car').value) || 0;
    const versionPrice = parseInt(document.getElementById('version').value) || 0;
    const totalCarPrice = carPrice + versionPrice;
    const downPayment = totalCarPrice * 0.2;
    const loanAmount = totalCarPrice - downPayment;
    const interestRate = 0.1; // 10% interest rate
    const totalInterest = loanAmount * interestRate;
    const totalLoanInterest = loanAmount + totalInterest;

    document.getElementById('carPrice').innerText = totalCarPrice.toLocaleString();
    document.getElementById('downPayment').innerText = downPayment.toLocaleString();
    document.getElementById('loanAmount').innerText = loanAmount.toLocaleString();
    document.getElementById('interestRate').innerText = (interestRate * 100).toFixed(2);
    document.getElementById('totalInterest').innerText = totalInterest.toLocaleString();
    document.getElementById('totalLoanInterest').innerText = totalLoanInterest.toLocaleString();
});