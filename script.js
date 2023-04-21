const btnEl = document.getElementById('btn')
const textEl=document.getElementById('text')

const apikey="sRN2BH0Xmvjz92FfSTwpuw==lWvoYpamYJ0IjO3G";
 
  
 const apiURL= 'https://api.api-ninjas.com/v1/randomword';

const options={
    method:"GET",
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