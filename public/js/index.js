console.log('index js loaded');

function makeWeatherCall(){
  return fetch('weather?address=Gurugram').then((res)=>{
    console.log("returned response");
    return res.json();
});
}
