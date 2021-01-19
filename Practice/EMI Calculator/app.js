const UIform = document.querySelector('#loan-form');
UIform.addEventListener('submit', function(e){
    document.querySelector('#loading').style.display = 'block';
    document.querySelector('#results').style.display = 'none';
    setTimeout(calculateResults, 2000);
    e.preventDefault()
});

function calculateResults(){
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
    const UIamount = document.getElementById('loan-amount');
    const UIrate = document.getElementById('interest');
    const UIperiod = document.getElementById('years');
    const UIemi = document.getElementById('monthly-payment');
    const UItotalPMT = document.getElementById('total-payment');
    const UItotalInterest = document.getElementById('total-interest');

    const pv = parseFloat(UIamount.value);
    const rate = parseFloat(UIrate.value);
    const i = rate/100/12;
    const nper = UIperiod.value * 12;
//const EMI = [P * R * (1+R)^N] / [(1+R)^N - 1]
    const temp =  Math.pow(1+i, nper );
    const EMI = (pv * i * temp) / (temp - 1);

    if(isFinite(EMI)){
        UIemi.value = EMI.toFixed(2);
        UItotalPMT.value = (EMI * nper).toFixed(2);
        UItotalInterest.value = ((EMI * nper) - pv).toFixed(2);
    } else{
        showError('Please check supplied data');
    }
}

function showError(msg){
    const div = document.createElement('div');
    div.className = 'alert alert-danger';
    div.appendChild(document.createTextNode(msg));
    const cardBody = document.querySelector('.card-body');
    cardBody.insertBefore(div, UIform);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2000)
}