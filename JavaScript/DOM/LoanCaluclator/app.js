document.getElementById('loan-form').addEventListener('submit', function(e){
    // For when we click calculate after calculation is completed and results are shown.We want to hide results of previous calculation
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 2000);
    e.preventDefault();
});

function calculateResults(){
    const principal = document.getElementById('loan-amount');
    const rate = document.getElementById('interest');
    const time = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
        
    const pv = principal.value;
    const i = (rate.value) /100/100;
    const n = (time.value) *12;
    
    const temp = Math.pow(1+i, n);
    const pmt = (pv*i*temp)/(temp-1);

    if(isFinite(pmt)){
        monthlyPayment.value = pmt.toFixed(2);
        totalPayment.value = (pmt*n).toFixed(2);
        totalInterest.value = ((pmt*n)-pv).toFixed(2);

        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    } else{
        // console.log('Please check your fields')
        showError('Please check your field');
    }    
}

function showError(error){
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(errorDiv, heading);

    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none ';

    setTimeout(clearErrorDiv, 3000);
}

function clearErrorDiv(){
    document.querySelector('.alert').remove()
}