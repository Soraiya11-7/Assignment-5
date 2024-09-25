
let currentBalance = parseFloat(document.getElementById('myBalance').innerText);

// when history btn is clicked.....
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-btn').classList.remove('bg-color_1','font-extrabold');
    document.getElementById('donation-btn').classList.add('bg-none','border','border-[#1111114D]','font-light','text-[#1111114D]', 'text-opacity-0.7');
    document.getElementById('history-btn').classList.add('bg-color_1','font-extrabold');
    document.getElementById('history-btn').classList.remove('border','border-[#1111114D]','font-light','text-[#1111114D]', 'text-opacity-0.7');

    showSectionById('history');
});

// when donation btn is clicked.......
document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('donation-btn').classList.remove('border','border-[#1111114D]','text-[#1111114D]', 'text-opacity-0.7');
    document.getElementById('donation-btn').classList.add('bg-color_1','font-extrabold');
    document.getElementById('history-btn').classList.add('bg-none','border','border-[#1111114D]','font-light','text-[#1111114D]', 'text-opacity-0.7');
    document.getElementById('history-btn').classList.remove('bg-color_1','font-extrabold');

    showSectionById('donation-container');
    document.getElementById('myBalance').innerText = currentBalance;
});

// Transaction History....
function transactionHistory(cardNum,donatedAmount){
    const time = new Date();
    const div = document.createElement('div');
    div.classList.add('border','border-gray-200','mb-8','p-4','lg:p-8','rounded-lg');
    const h2 = document.createElement('h2');
    if(cardNum === 1){
        h2.textContent = `${donatedAmount} Taka is Donated for famine-2024 at Feni, Bangladesh`;
    }
    else if(cardNum === 2){
        h2.textContent = `${donatedAmount} Taka is Donated for Flood Relief in Feni, Bangladesh`;
    }
    else{
        h2.textContent = `${donatedAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
    }
    h2.classList.add('font-bold','text-base','lg:text-xl','mb-2');
    const h3 = document.createElement('h3');
    h3.textContent = `Date: ${time}`;
    h3.classList.add('text-sm','lg:text-base','font-normal');
    div.appendChild(h2);
    div.appendChild(h3);
    document.getElementById('transaction-container').appendChild(div);
    return true;

}

// Modal........
const modal = document.getElementById('myModal');

// 1st card......................................................................................................
const donationBtn = document.getElementById('donate-btn');
donationBtn.addEventListener('click', function(){

// function call.............
    const result = addDonationByID('donate-for-noakhali','total-amount-Noakhali' );
    if(result){
        document.getElementById('total-amount-Noakhali').innerText = result[0].toFixed(2);
        currentBalance -= result[1];
        document.getElementById('myBalance').innerText = currentBalance.toFixed(2); 
        modal.showModal();
        transactionHistory(1,result[1]);
    }
    document.getElementById('donate-for-noakhali').value = "";
});


// 2nd card......................................................................................................
const donationBtn_2 = document.getElementById('donate-btn-2');
donationBtn_2.addEventListener('click', function(){

// function call.............
    const result2 = addDonationByID('donate-for-feni','total-amount-Feni' );
    if(result2){
        document.getElementById('total-amount-Feni').innerText = result2[0].toFixed(2);
        currentBalance -= result2[1];
        document.getElementById('myBalance').innerText = currentBalance.toFixed(2); 
   
        modal.showModal();
        transactionHistory(2,result2[1]);
    } 
    document.getElementById('donate-for-feni').value = "";
});


// 3rd card......................................................................................................
const donationBtn_3 = document.getElementById('donate-btn-3');
donationBtn_3.addEventListener('click', function(){
    
// function call.............
    const result3 = addDonationByID('donate-for-Qm','total-amount-Qm' );
    if(result3){
        document.getElementById('total-amount-Qm').innerText = result3[0].toFixed(2);
        currentBalance -= result3[1];
        document.getElementById('myBalance').innerText = currentBalance.toFixed(2);  
        modal.showModal();
        transactionHistory(3,result3[1]);
    }
    document.getElementById('donate-for-Qm').value = "";
});


