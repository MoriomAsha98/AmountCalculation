document.getElementById('deposit_button').addEventListener('click',function (){

   var depositFiled = document.getElementById('deposit_amount');
   var depositAmount = parseFloat(depositFiled.value);

   if(isNaN(depositAmount)){
      return 0;
    }

   var depositBalance = document.getElementById('deposit_balance');
   var depositNumber = parseFloat(depositBalance.innerText);
      


   var totalDepositBalance = depositAmount + depositNumber; depositBalance.innerHTML = totalDepositBalance;
   
   var depositTotal = document.getElementById('deposit_total');
   var depositTotalNumber = parseFloat(depositTotal.innerText);
   if(isNaN(depositTotalNumber)){
      return 0;
    }

      
   depositTotal.innerHTML = totalDepositBalance;


   depositFiled.value = '';
})

// withdraw amount calculation start here

document.getElementById('withdraw_button').addEventListener('click',function(){

   var withdrawField = document.getElementById('withdraw_amount');
   var withdrawNumber = parseFloat(withdrawField.value);
      
   if(isNaN(withdrawNumber)){
      return 0;
    }


   var withdrawBalance = document.getElementById('withdraw_balance');
   var withdrawBalanceNumber = parseFloat(withdrawBalance.innerText);

   var TotalWithraw = withdrawNumber + withdrawBalanceNumber;
       withdrawBalance.innerHTML = TotalWithraw;

 var depositTotal = document.getElementById('deposit_total');
 var depositTotalNumber = parseFloat(depositTotal.innerText);
    if(depositTotalNumber == -0){
      return alert("you don't have enough Balance to withdraw")
    }

     depositTotalNumber = depositTotalNumber - withdrawNumber;
     depositTotal.innerHTML =depositTotalNumber


  withdrawField.value = '';




       
    

})
 




