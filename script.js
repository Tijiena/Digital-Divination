const btnEl = document.getElementById('btn')
const textEl=document.getElementById('text')
const canvas=document.getElementById('drawing-board');
const toolbar=document.getElementById('toolbar');
const ctx=canvas.getContext('2d');

const canvasOffsetX=canvas.offsetLeft;
const canvasOffsetY=canvas.offsetTop;
console.log(canvas.width);
console.log(canvas.height);

/*canvas.width=window.innerWidth-canvasOffsetX;
canvas.height=window.innerHeight-canvasOffsetY;
console.log(canvas.width);
console.log(canvas.height);*/

const apikey="sRN2BH0Xmvjz92FfSTwpuw==lWvoYpamYJ0IjO3G";
 
  
 const apiURL= 'https://api.api-ninjas.com/v1/randomword';

const options={
    method:"GET",
    contentType:"verb",
    headers:{
        "X-Api-Key":apikey,
    }
    

};
  
 async function getText(){
    textEl.innerText="Updating...";
    const response=await fetch(apiURL,options);
    const data = await response.json();
    console.log(data);
    textEl.innerText=data.word;
  }
 
 
    btnEl.addEventListener("click",getText);

    let isPainting=false;
    let lineWidth=5;

   /* toolbar.addEventListener('click',e=>{
        if(e.target.id==='clear'){
            ctx.clearRect(0,0,canvas.width,canvas.height);}
        });
    toolbar.addEventListener('change',e=>{
        if(e.target.id==='stroke'){
            ctx.strokeStyle=e.target.value;
        }
        if(e.target.id==='lineWidth'){
            lineWidth=e.target.value;
        }
    });

    const draw=(e)=>{
        if(!isPainting){
            return;
        }
    
    ctx.linwWidth=lineWidth;
    ctx.lineCap='round';
    ctx.lineTo(e.clientX-canvasOffsetX,e.clientY);}
   

    
    canvas.addEventListener('mousedown',(e)=>{
        isPaint=true;
        startX=e.clientX;
        startY=e.clientY;
    });

    canvas.addEventListener('mouseup',e=>{
        isPainting=false;
        ctx.stroke();
        ctx.beginPath();
    });

    canvas.addEventListener('mousemove',draw);*/
        
    