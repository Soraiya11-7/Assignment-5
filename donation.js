// console.log("connected.....");
const donationBtn = document.getElementById('donate-btn');
donationBtn.addEventListener('click', function(event){
    
    // event.preventDefault();
    // input field value
    const addDonation = document.getElementById('donate-for-noakhali').value;
    let addDonationNoakhali = parseFloat(addDonation);


    // Actual account Balance
    const myBalance = document.getElementById('myBalance').innerText;
    let myBalanceAmount = parseFloat(myBalance);

    //newAdded  Balance
    const getTotalAmountNoakhali = document.getElementById('total-amount-Noakhali').innerText;
    let amountOfNoakhali = parseFloat(getTotalAmountNoakhali);
    console.log("amonut of Noakhali", amountOfNoakhali);


    console.log(addDonation, myBalance);
    console.log("myBalanceAmount",myBalanceAmount);
//    
// console.log(typeof addDonation);

const modal = document.getElementById('myModal');
    if((!isNaN(addDonation) && addDonationNoakhali > 0 ) && addDonationNoakhali <= myBalanceAmount){
        
        amountOfNoakhali += addDonationNoakhali;
        document.getElementById('total-amount-Noakhali').innerText = amountOfNoakhali;

        myBalanceAmount -= addDonationNoakhali;
        document.getElementById('myBalance').innerText = myBalanceAmount;
        modal.showModal();
    }
    else{
        alert("Invalid Amount");
    }
    console.log(myBalanceAmount);

    document.getElementById('donate-for-noakhali').value = "";

})
// console.log(document.getElementById('myBalance').innerText, document.getElementById('donate-for-noakhali').value);