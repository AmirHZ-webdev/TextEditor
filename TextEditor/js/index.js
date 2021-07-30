const text =document.getElementById('text')
var i = 12;

function plusbtn(){ 
  i +=2;
  text.style.fontSize=i+"px"
  
}

function minusbtn(){
 i-=2
 text.style.fontSize=i+"px"
}


function boldbtn(event){

 text.classList.toggle("bold");
  
}

function italicbtn(){
  
text.classList.toggle("italic");
  
}

function rightbtn(){
  if(text.style.textAlign=='center'){
    text.style.direction='rtl'
    text.style.textAlign='unset'
  }else{
    text.style.direction='rtl'
  }

}


function leftbtn(){
  if(text.style.textAlign=='center'){
    text.style.direction='ltr'
    text.style.textAlign='unset'
  }else{
    text.style.direction='ltr'
  }  
  }


  function centerbtn(){
    text.style.textAlign='center'
    }
