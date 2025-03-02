function fun(val){
    document.getElementById('d1').value+=val;
}
function evl(){
    let cnt=document.getElementById('d1').value;
    let res=eval(cnt);
    document.getElementById('d1').value=res;
}
function clr(){
    document.getElementById('d1').value="";
}
