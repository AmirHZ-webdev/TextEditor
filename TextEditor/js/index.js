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

  if(text.style.fontWeight=='normal')
  {text.style.fontWeight='bold'
    }else{
      text.style.fontWeight='normal'
    }
  
}

function italicbtn(){
  
  if(text.style.fontStyle=='normal')
  {text.style.fontStyle='italic'
    }else{
      text.style.fontStyle='normal'
    }
  
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