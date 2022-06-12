window.addEventListener('DOMContentLoaded', function(e) {
    var input = document.getElementById('input');
    input.addEventListener('change', function(event){
        document.getElementById('imput-log').innerHTML = Event.TARGET.value;
        console.log()
    })
 
})

function getValueInput(){
    let imput = document.getElementById('input').value
    alert(input);
}



