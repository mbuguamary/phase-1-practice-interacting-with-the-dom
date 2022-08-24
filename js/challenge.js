setTimeout(() => {
    console.log('test!');
  }, 500);

  const plus = document.querySelector("#plus")
  number =document.getElementById("counter")
 
  let a=0;
  plus.addEventListener("click",()=>{
  a++;
  number.innerHTML=a;
  console.log(a);
  })
  const minus = document.querySelector("#minus")
  let b=0;
  minus.addEventListener("click",()=>{
  b--;
  number.innerHTML=b;
  console.log(b);
  })
  document.addEventListener("DOMContentLoaded", function(){
    
 let  pause=document.getElementById("pause")
pause.addEventListener("click",()=>{
  document.querySelector('#minus').disabled = true;
  document.querySelector('#plus').disabled = true;
  document.getElementById("pause").innerHTML="resume";
 })
 let  restart=document.getElementById("restart")
 restart.addEventListener("click",()=>{
  document.querySelector('#minus').disabled = false;
  document.querySelector('#plus').disabled = false;
  document.getElementById("pause").innerHTML="pause";
  document.getElementById("comment-input").innerText="Wow, what a fun game this is";
 })
});