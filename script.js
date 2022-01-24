document.addEventListener("keydown",function(e)  {
    console.log(e.keyCode);
    if(e.keyCode==38){
        console.log("hello");
        let mario=document.querySelector('.mario');
        mario.classList.add('animatemario');
        setTimeout(()=>{
            mario.classList.remove('animatemario');
        },1500);
    }

    if(e.keyCode==39){
        console.log("hello");
        let mario=document.querySelector('.mario');
        let mx = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
      mario.style.left= mx + 112 + "px";
    }

    if(e.keyCode==37){
        console.log("hello");
        let mario=document.querySelector('.mario');
        let mx = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
      mario.style.left= mx - 112 + "px";
    }
});
let gameover=document.querySelector('.gameover');
gameover.style.visibility="hidden";
setInterval(()=>{
let mario = document.querySelector('.mario');
let dino = document.querySelector('.dino');
let mx = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
let dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
let my =parseInt(window.getComputedStyle(mario,null).getPropertyValue('top'));
let dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
let offsetX =Math.abs(mx-dx);
let offsetY =Math.abs(my-dy);
// offsetY+=13;

if(offsetX<120 && offsetY<90){
    console.log(offsetX,offsetY);
    dino.classList.remove('animatedino');
    
    gameover.style.visibility="visible";

}
if(dx<mx){
    let score = document.querySelector('.score');
    let sc= parseInt(document.getElementById('score').innerHTML);
    sc=sc+1;
    document.getElementById('score').innerHTML=sc;
}
if(dx==0){
    
let animdura =parseFloat(window.getComputedStyle(dino,null).getPropertyValue('animation-duration'));
let newdur= animdura - 0.1;
dino.style.animationDuration = newdur +"s";
}
},10);