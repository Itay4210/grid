

let count=0;

function myvalue(id){
    if(document.getElementById(id).value==""){
  if(count%2==0){
    document.getElementById(id).value="X"
    count++;
    check();  
}else{
    document.getElementById(id).value="O"
    count++;
    check(); 
  }

}
}



/*function haveo(id){
    if(document.getElementById(id).value=="O"){
      
        alert("not empty");
        count--;
    }else{
        document.getElementById(id).value="X"
    }
}
function havex(id){
    if(document.getElementById(id).value=="X"){
        document.getElementById(id).value="X";
        alert("not empty");
        count--;
    }else{
        document.getElementById(id).value="O";
    }
}*/

function check(){

    if(document.getElementById("1").value==document.getElementById("2").value&&document.getElementById("1").value==document.getElementById("3").value){

        if(document.getElementById("1").value!=""){
            document.getElementById("alart").innerHTML="המשחק נגמר"
        }
    }

    if(document.getElementById("4").value==document.getElementById("5").value&&document.getElementById("5").value==document.getElementById("6").value){

        if(document.getElementById("4").value!=""){
            document.getElementById("alart").innerHTML="המשחק נגמר"
        }
    }

    if(document.getElementById("7").value==document.getElementById("8").value&&document.getElementById("8").value==document.getElementById("9").value){

        if(document.getElementById("9").value!=""){
            document.getElementById("alart").innerHTML="המשחק נגמר"
        }
    }

    if(document.getElementById("7").value==document.getElementById("4").value&&document.getElementById("4").value==document.getElementById("7").value){

        if(document.getElementById("7").value!=""){
            document.getElementById("alart").innerHTML="המשחק נגמר"
        }
    }

    if(document.getElementById("8").value==document.getElementById("5").value&&document.getElementById("5").value==document.getElementById("2").value){

        if(document.getElementById("8").value!=""){
            document.getElementById("alart").innerHTML="המשחק נגמר"
        }
    }
    if(document.getElementById("9").value==document.getElementById("6").value&&document.getElementById("6").value==document.getElementById("3").value){

        if(document.getElementById("9").value!=""){
            document.getElementById("alart").innerHTML="המשחק נגמר"
        }
    }
    if(document.getElementById("1").value==document.getElementById("5").value&&document.getElementById("5").value==document.getElementById("9").value){

        if(document.getElementById("1").value!=""){
            document.getElementById("alart").innerHTML="המשחק נגמר"
        }
    }
    if(document.getElementById("3").value==document.getElementById("5").value&&document.getElementById("5").value==document.getElementById("7").value){

        if(document.getElementById("3").value!=""){
            document.getElementById("alart").innerHTML="המשחק נגמר"
        }
    }
}



    



