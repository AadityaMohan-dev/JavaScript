function myFunction(){
    document.querySelector('i').style.transform = 'translate(-50%,-50%) scale(1)';
    document.querySelector('i').style.opacity = 0.8;
    setTimeout(function myFunction(){
        document.querySelector('i').style.opacity = 0;
    },1500);
    setTimeout(function myFunction(){
        document.querySelector('i').style.transform = 'translate(-50%,-50%) scale(0)';
    },2000);
        
}
    