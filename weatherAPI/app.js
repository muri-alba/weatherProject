let button =  document.querySelector('.button')
let inputValue =  document.querySelector('.inputValue')
let name =  document.querySelector('.name')
let desc =  document.querySelector('.desc')
let temp =  document.querySelector('.temp')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=c52b792abcc72c31419b865944a43a40')
    .then(response  => response.json())
    .then(data => {
        let nameValue = data['name']
        let tempValue = data['main']['temp']
        let descValue  = data['weather'][0]['description']

        name.innerHTML = nameValue
        temp.innerHTML = tempValue - 272
        desc.innerHTML = descValue
    })

})


