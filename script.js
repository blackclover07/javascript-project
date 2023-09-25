//  declaire variable for document 
const inpvalue=document.querySelector(".input");
const button=document.querySelector(".search-btn");
const  result=document.querySelector(".result");


// function for empty field
function alertBox(){
    let show=document.querySelector(".search-wrapper");
    if (inpvalue.value==""){
        let err=document.createElement("p");
        err.innerHTML="Input field cannot be empty";
        show.appendChild(err);
    }
}


async function ShowCountryData(name){

    // create variable to collect the data from the api
    let resp=await fetch("https://restcountries.com/v3.1/name/"+name+"?fullText=true")
    let data=await resp.json();

    // checking the api is working or not
    // console.log(data)
    // console.log(data[0].name.common);
    // console.log(data[0].population);
    // console.log(data[0].flags.svg);
    // console.log(data[0].capital[0]);
    // console.log(Object.values(data[0].borders).toString());
    // console.log(data[0].continents[0]);
    // console.log(Object.keys(data[0].currencies)[0]);
    // console.log(data[0].region);
    // console.log(Object.values(data[0].languages).toString().split(",").join(","));
    // console.log(data[0].timezones[0])
    
    result.innerHTML=`<div class="wrapperimg">
    <img src="${data[0].flags.svg}" alt="flag" srcset="">
</div>
<div class="wrapper">
    <h2 class="heading2">${data[0].name.common}</h2>
</div>
<div class="wrappper">
    <h3 class="keydata">Capital :</h3>
    <span class="value">${data[0].capital[0]}</span>
</div>
<div class="wrapper">
    <h3 class="keydata">Population :</h3>
    <span class="value">${data[0].population}</span>
</div>
<div class="wrapper">
    <h3 class="keydata">Currencies :</h3>
    <span class="value">${Object.keys(data[0].currencies)[0]}</span>
</div>
<div class="wrapper">
    <h3 class="keydata">Continents :</h3>
    <span class="value">${data[0].continents[0]}</span>
</div>
<div class="wrapper">
    <h3 class="keydata">Languages :</h3>
    <span class="value">${Object.values(data[0].languages).toString().split(",").join(",")}</span>
</div>
<div class="wrapper">
    <h3 class="keydata">Time Zone :</h3>
    <span class="value">${data[0].timezones[0]}</span>
</div>`;
}

// adding events to the button
button.addEventListener("click",alertBox,false);
button.addEventListener("click",()=>{
    ShowCountryData(inpvalue.value);
},false);