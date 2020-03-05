const timer=document.querySelector('#timer');


let interval;
         const starttime=()=>{
   interval  = setInterval(function(){
        const date=new Date();
        const hours=date.getHours();
        const minutes=date.getMinutes();
        const second=date.getSeconds();
        timer.textContent=`${hours}:${minutes}:${second}`;
    },1000);
}
  
const restart=()=>{
const button=document.createElement('button');
button.textContent='start';
document.querySelector('body').appendChild(button);

button.addEventListener('click',()=>{
    starttime();

    

});}

restart();

const stop=()=>{
const button1=document.createElement('button');
button1.textContent='stop';
document.querySelector('body').appendChild(button1);

button1.addEventListener('click',()=>{
    clearInterval(interval);
    restart();
    
    
 
  
});};

stop();










 
