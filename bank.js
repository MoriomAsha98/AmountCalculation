// console.log('It will run sucesfull');

document.getElementById('submit').addEventListener('click',function(){
    // alert('submit button clicked')
    // console.log('submit button clicked' );
    var emailField = document.getElementById('email');

     var emailValue = emailField.value
        console.log(emailValue);

        var passwordField = document.getElementById('password');
        var passwordValue = passwordField .value
        console.log(passwordValue);
        if(emailValue == 'example@gmail.com' && passwordValue == 123456){
            alert('login successfull')
            window.location.href="http://127.0.0.1:5500/amountcalculation.html";
        }
        else{  
            alert('invailed cardencial')
        }

})

