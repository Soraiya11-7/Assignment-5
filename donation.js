
const modal = document.getElementById('myModal');
// 1st card......................................................................................................
const donationBtn = document.getElementById('donate-btn');
donationBtn.addEventListener('click', function(event){
    
    // event.preventDefault();
    // input field value
    // const addDonation = document.getElementById('donate-for-noakhali').value;
    // Actual account Balance............
    // const myBalance = document.getElementById('myBalance').innerText;
    //newAdded  Balance................
    // const getTotalAmountNoakhali = document.getElementById('total-amount-Noakhali').innerText;


//   const modal = document.getElementById('myModal');
// function call.............
    const result = addDonationByID('donate-for-noakhali','myBalance','total-amount-Noakhali' );
    if(result){
        document.getElementById('total-amount-Noakhali').innerText = result[0];
        document.getElementById('myBalance').innerText = result[1];
        modal.showModal();
    }
    
    document.getElementById('donate-for-noakhali').value = "";

});


// 2nd card......................................................................................................
const donationBtn_2 = document.getElementById('donate-btn-2');
donationBtn_2.addEventListener('click', function(event){
    
    // event.preventDefault();
    // // input field value
    // const addDonation_2 = document.getElementById('donate-for-feni').value;
    // // Actual account Balance............
    // const myBalance = document.getElementById('myBalance').innerText;
    // //newAdded  Balance................
    // const getTotalAmountFeni = document.getElementById('total-amount-Feni').innerText;


//   const modal = document.getElementById('myModal');
// function call.............
    const result2 = addDonationByID('donate-for-feni','myBalance','total-amount-Feni' );
    if(result2){
        document.getElementById('total-amount-Feni').innerText = result2[0];
        document.getElementById('myBalance').innerText = result2[1];
        modal.showModal();
    }
    
    document.getElementById('donate-for-feni').value = "";

});


// 3rd card......................................................................................................
const donationBtn_3 = document.getElementById('donate-btn-3');
donationBtn_3.addEventListener('click', function(event){
    
    // // event.preventDefault();
    // // input field value
    // const addDonation_3 = document.getElementById('donate-for-Qm').value;
    // // Actual account Balance............
    // const myBalance = document.getElementById('myBalance').innerText;
    // //newAdded  Balance................
    // const getTotalAmountQm = document.getElementById('total-amount-Qm').innerText;

// function call.............
    const result3 = addDonationByID('donate-for-Qm','myBalance','total-amount-Qm' );
    if(result3){
        document.getElementById('total-amount-Qm').innerText = result3[0];
        document.getElementById('myBalance').innerText = result3[1];
        modal.showModal();
    }
    
    document.getElementById('donate-for-Qm').value = "";

});
