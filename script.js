// Getting access to the form element and assigning it to the variable. 

const form = document.getElementById("myForm" )

// Alerting the window to give the valid country name.

setTimeout(function(){
    window.alert("Enter valid country name to get the data. E.g: Provide name as 'Sri-Lanka' and not as 'Srilanka'")
},2000)


// Using async function to fetch URL and print the data. 
async function covidData(url){
// Try and catch method to fetch the data and print the error if there are any such error in fetching the URL.
    try{
    let response = await fetch(url)
    let data = await response.json()
    console.log(data) 

    let length = data.length;
    let index = length-1;

    let confirmed = document.getElementById("confirmed")
    let recovered = document.getElementById("recovered")
    let deaths = document.getElementById("deaths")
    let active = document.getElementById("active")

    confirmed.innerHTML="";
    recovered.innerHTML ="";
    deaths.innerHTML="";
    active.innerHTML="";

    confirmed.append("Total Confirmed Cases:"+ data[index].Confirmed)
    recovered.append("Total recovered Cases:"+ data[index].Recovered)
    deaths.append("Total deaths:"+ data[index].Deaths)
    active.append("Active Cases:"+ data[index].Active)
    }

    catch(error)
    {
        console.log("Unexpected Error occurs .Try after sometimes")
    }

}

// Adding submit event to the form element to get the data when click the submit button.
form.addEventListener("submit",function(e){
    e.preventDefault()
    
    var country = document.getElementById("country").value
    
    var url="https://api.covid19api.com/dayone/country/"+country;
    
    covidData(url)
    
    })