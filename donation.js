
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
    // added transaction history ......

    const time = new Date();
    const div = document.createElement('div');
    div.classList.add('border','border-gray-200','mb-8','p-8','rounded-lg');
    const h2 = document.createElement('h2');
    h2.textContent = `${result[2]} Taka is Donated for famine-2024 at Feni, Bangladesh`;
    h2.classList.add('font-bold','text-lg');
    const h3 = document.createElement('h3');
    h3.textContent = `Date: ${time}`;
    h3.classList.add('text-base','font-normal');
    div.appendChild(h2);
    div.appendChild(h3);
    document.getElementById('transaction-container').appendChild(div);


    

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
