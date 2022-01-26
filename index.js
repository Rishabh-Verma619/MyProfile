let formButton = document.getElementById('form-btn');
let bar = 0;
let dismissButton = document.getElementById('dismiss');
formButton.addEventListener('click',()=>{
    if(bar==0){
        document.getElementById('form').style.display = "block";
        bar = 1;     
    }
    else{
        document.getElementById('form').style.display = "none";
        bar=0;
    }
});
dismissButton.addEventListener('click',()=>{
    if(bar==1){
        document.getElementById('form').style.display = "none";
        bar = 0;     
    }
});

