const API_KEY = `bd3e22509d6bffcb4e531fa0b7b92122`;
const seachTemp = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data=> displayTemp(data))
} 

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText= text;
}
const displayTemp = (temp) =>{
    setInnerText('city', temp.name);
    setInnerText('digree',temp.main.temp);
    setInnerText('condition',temp.weather[0].main);
    // set Icon
    const url =`https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon= document.getElementById('icon');
    imgIcon.setAttribute('src',url);
    console.log(temp);
}

