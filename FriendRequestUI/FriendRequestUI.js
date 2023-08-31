var flag = 1;
function sendRequest(){
    if(flag){
        document.querySelector('#btn').innerHTML = "Friends 🤙";
        document.querySelector('#status').innerHTML = "You are Friends  💗";
        document.querySelector('#btn').style.backgroundColor = "#dadada";
        document.querySelector('#btn').style.border = '1px solid black';
        document.querySelector('#btn').style.color = 'black';
        document.querySelector('#status').style.color = "rgb(21, 168, 168)";
        
        this.flag = 0;
    }
    else{
        document.querySelector('#btn').innerHTML = 'Add Friend';
        document.querySelector('#status').innerHTML = 'Send Friend Request';
        document.querySelector('#status').style.color = "red";
        document.querySelector('#btn').style.border = 'none';
        document.querySelector('#btn').style.backgroundColor = " #115dab";
        document.querySelector('#btn').style.color = "white";
        this.flag = 1;
    }
    
}