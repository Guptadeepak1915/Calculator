    function display(num){
      document.getElementById("input").value+=num
    }
    function blanck(){
      document.getElementById('input').value="";
    }
    function removeOne(){
      document.getElementById('input').value-=value
    }
    function total(){
      document.getElementById('input').value=eval(input.value);
    }
 document.addEventListener("keydown",(event)=>{
  if(event.key==="Enter"){
    total();
  }
  else if(event.key==="Backspace"){
    removeOne();
  }
  else if(event.key==="Delete"){
    blanck();
  }
  else if(event.key==="Escape"){
    blanck();
  }
  else if(event.key==="c"){
    blanck();
  
  }
    console.log(event.key);
 })