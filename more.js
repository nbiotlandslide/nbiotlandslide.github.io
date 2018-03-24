var con1 = document.getElementById("content1");
var button = document.getElementById("more");

button.onclick = function(){
    if(con1.className=="open"){
        con1.className ="";
        button.innerHTML="more";
    }else{
        con1.className ="open";
        button.innerHTML="less";
    }
}