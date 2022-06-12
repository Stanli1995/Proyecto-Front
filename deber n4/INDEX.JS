window.addEventListener('DOMContentLoaded', function(event){
    var form_register = document.querySelector('#form-register');
    form_register.addEventListener('submit', function(event){
        event.preventDefault();
        var canSubmit= true;

        var input_name = document.querySelector('#input_name');
      
        if(input_name.value == ""){
            document.querySelector('#name_container .input-error').innerHTML = 'El nombre es obligatorio';
            canSubmit = false;
        }else{
            if (input_name.value.length < 3){
            document.querySelector('#name_container .input-error').innerHTML = 'El nombre debe tener al menos 3 letras';
            canSubmit = false;    
            }else {
                document.querySelector('#name_container .input-error').innerHTML = '';
            }
        }

        var input_last_name= document.querySelector('#input_last_name');
        if(input_last_name.value == ""){
            document.querySelector('#last_name_container .input-error').innerHTML = 'El apellido es obligatorio';
            canSubmit = false;
        }else{
            if (input_last_name.value.length < 3){
                document.querySelector('#last_name_container .input-error').innerHTML = 'El apellido debe tener al menos 3 letras';
                canSubmit = false;    
                }else {
                    document.querySelector('#last_name_container .input-error').innerHTML = '';
                }
        }

       
       
        



        




        var input_email= document.querySelector('#input_email');
        if(input_email.value == ""){
            document.querySelector('#email_container .input-error').innerHTML = 'El email es obligatorio';
            canSubmit = false;
        }else{
            var indexOne = input_email.value.indexOf("@");
            var indexTwo = input_email.value.indexOf(".");
            if (indexOne < 0 || indexTwo < 0){
                document.querySelector('#email_container .input-error').innerHTML = 'El correo electronico no es correcto';
                canSubmit = false;
            } else {
                document.querySelector('#email_container .input-error').innerHTML = '';
            }
        }
        if(!canSubmit){
            event.preventDefault();
        }
    })
    
});
