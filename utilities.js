
function addDonationByID(addDonation,myBalance,getTotalAmount){
     // input field value
    const addDonationValue = document.getElementById(addDonation).value;
    let donatedAmount = parseFloat(addDonationValue);

    // Actual account Balance
    const myBalanceValue = document.getElementById(myBalance).innerText;
    let myBalanceAmount = parseFloat(myBalanceValue);

    //newAdded  Balance
    const getTotalAmountValue = document.getElementById(getTotalAmount).innerText;
    let totalNewDonatedAmount = parseFloat(getTotalAmountValue);
 
   
    if((!isNaN(addDonationValue) && donatedAmount > 0 ) && donatedAmount <= myBalanceAmount){
        
        totalNewDonatedAmount += donatedAmount;
        myBalanceAmount -= donatedAmount;
        
        return [totalNewDonatedAmount,myBalanceAmount,donatedAmount];
    }
    else{
        alert("Invalid Amount!! please try again.");
    }
   

}


// function 2...........
function showSectionById(id){
    // hides all the sections
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}