const api_key="12dd5236acb253bc5ad2984432bf35ff";
let btn=document.querySelector("button");
btn.addEventListener('click',()=>{
    let form=document.getElementById('form');
    city=form.elements[0].value;
    getweather(city);
    async function getweather(city){
        let api_url="https://api.openweathermap.org/data/2.5/weather?q="+ city+ "&appid="+api_key+"&unit-imperial"

        const response = await fetch(api_url);
        const data=await response.json();
        let temp=data.main.temp;
        document.getElementById("result").textContent="The temperature in "+city+" right now is "+temp
    }
})