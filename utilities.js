
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
        
        return [totalNewDonatedAmount,myBalanceAmount];
    }
    else{
        alert("Invalid Amount!");
    }
   

}