const showSection = () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll('a');
   
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const number = link.getAttribute('data-section') - 1;
            sections.forEach(section => section.classList.remove('active'));
            document.querySelector('.result').style.display = 'none';
            links.forEach(otherLink => otherLink.id = "");
            link.id = 'tagSelection';
            sections[number].classList.add('active');
        });
    });
};

const sectionOne = () => {
    const btn = document.querySelector('.btnLength');
    const length = document.querySelector('#Length');
    const LengthUnit = document.querySelector('#LengthUnit');
    const LengthConvert = document.querySelector('#LengthConvert');
    let resultado = 0;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(LengthUnit.value === 'milímetro' && LengthConvert.value === 'centímetro' ){
            resultado = length.value / 10   
        }else if(LengthUnit.value === 'milímetro' && LengthConvert.value === 'metro' ){
          resultado = length.value / 1000
        } else if(LengthUnit.value === 'milímetro' && LengthConvert.value === 'quilômetro' ){
          resultado = length.value / 1000000
        } else if(LengthUnit.value === 'milímetro' && LengthConvert.value === 'milha' ){
             resultado = length.value / 1609344
        } else if(LengthUnit.value === 'milímetro' && LengthConvert.value === 'polegada' ){
            resultado = length.value / 25.4
        } else if(LengthUnit.value === 'milímetro' && LengthConvert.value === 'pé' ){
            resultado = length.value / 304.8
        } else if(LengthUnit.value === 'milímetro' && LengthConvert.value === 'jarda' ){
            resultado = length.value / 914.4
        } else if(LengthUnit.value === 'centímetro' && LengthConvert.value === 'milímetro' ){
            resultado = length.value * 10
        } else if(LengthUnit.value === 'centímetro' && LengthConvert.value === 'metro' ){
            resultado = length.value / 100
        } else if(LengthUnit.value === 'centímetro' && LengthConvert.value === 'quilômetro' ){
            resultado = length.value / 100000
        } else if(LengthUnit.value === 'centímetro' && LengthConvert.value === 'milha' ){   
            resultado = length.value / 160934
        } else if(LengthUnit.value === 'centímetro' && LengthConvert.value === 'polegada' ){
            resultado = length.value / 2.54
        } else if(LengthUnit.value === 'metro' && LengthConvert.value === 'milímetro' ){
            resultado = length.value * 1000
        } else if(LengthUnit.value === 'metro' && LengthConvert.value === 'centímetro' ){
            resultado = length.value * 100
        } else if(LengthUnit.value === 'metro' && LengthConvert.value === 'quilômetro' ){
            resultado = length.value / 1000
        } else if(LengthUnit.value === 'metro' && LengthConvert.value === 'milha' ){
            resultado = length.value / 1609.344
        } else if(LengthUnit.value === 'metro' && LengthConvert.value === 'polegada' ){
            resultado = length.value * 39.3701
        } else if(LengthUnit.value === 'metro' && LengthConvert.value === 'pé' ){
            resultado = length.value * 3.28084
        } else if(LengthUnit.value === 'metro' && LengthConvert.value === 'jarda' ){
            resultado = length.value * 1.09361
        } else if(LengthUnit.value === 'quilômetro' && LengthConvert.value === 'milímetro' ){
            resultado = length.value * 1000000
        } else if(LengthUnit.value === 'quilômetro' && LengthConvert.value === 'centímetro' ){
            resultado = length.value * 100000
        } else if(LengthUnit.value === 'quilômetro' && LengthConvert.value === 'metro' ){
            resultado = length.value * 1000
        } else if(LengthUnit.value === 'quilômetro' && LengthConvert.value === 'milha' ){
            resultado = length.value / 1.609344
        } else if(LengthUnit.value === 'quilômetro' && LengthConvert.value === 'polegada' ){
            resultado = length.value * 39370.1
        } else if(LengthUnit.value === 'quilômetro' && LengthConvert.value === 'pé' ){
            resultado = length.value * 3280.84
        } else if(LengthUnit.value === 'quilômetro' && LengthConvert.value === 'jarda' ){
            resultado = length.value * 1093.61
        } else if(LengthUnit.value === 'milha' && LengthConvert.value === 'milímetro' ){
            resultado = length.value * 1609344
        } else if(LengthUnit.value === 'milha' && LengthConvert.value === 'centímetro' ){
            resultado = length.value * 160934
        } else if(LengthUnit.value === 'milha' && LengthConvert.value === 'metro' ){
            resultado = length.value * 1609.344
        } else if(LengthUnit.value === 'milha' && LengthConvert.value === 'quilômetro' ){
            resultado = length.value * 1.609344
        } else if(LengthUnit.value === 'milha' && LengthConvert.value === 'polegada' ){
            resultado = length.value * 63360
        } else if(LengthUnit.value === 'milha' && LengthConvert.value === 'pé' ){
            resultado = length.value * 5280
        } else if(LengthUnit.value === 'milha' && LengthConvert.value === 'jarda' ){
            resultado = length.value * 1760
        } else if(LengthUnit.value === 'polegada' && LengthConvert.value === 'milímetro' ){
            resultado = length.value * 25.4
        } else if(LengthUnit.value === 'polegada' && LengthConvert.value === 'centímetro' ){
            resultado = length.value * 2.54
        } else if(LengthUnit.value === 'polegada' && LengthConvert.value === 'metro' ){
            resultado = length.value / 39.3701
        } else if(LengthUnit.value === 'polegada' && LengthConvert.value === 'quilômetro' ){
            resultado = length.value / 39370.1
        } else if(LengthUnit.value === 'polegada' && LengthConvert.value === 'milha' ){
            resultado = length.value / 63360
        } else if(LengthUnit.value === 'polegada' && LengthConvert.value === 'pé' ){
            resultado = length.value / 12
        } else if(LengthUnit.value === 'polegada' && LengthConvert.value === 'jarda' ){
            resultado = length.value / 36
        } else if(LengthUnit.value === 'pé' && LengthConvert.value === 'milímetro' ){
            resultado = length.value * 304.8
        } else if(LengthUnit.value === 'pé' && LengthConvert.value === 'centímetro' ){
            resultado = length.value * 30.48
        } else if(LengthUnit.value === 'pé' && LengthConvert.value === 'metro' ){
            resultado = length.value / 3.28084
        } else if(LengthUnit.value === 'pé' && LengthConvert.value === 'quilômetro' ){
            resultado = length.value / 3280.84
        } else if(LengthUnit.value === 'pé' && LengthConvert.value === 'milha' ){
            resultado = length.value / 5280
        } else if(LengthUnit.value === 'pé' && LengthConvert.value === 'polegada' ){
            resultado = length.value * 12
        } else if(LengthUnit.value === 'pé' && LengthConvert.value === 'jarda' ){
            resultado = length.value / 3
        } else if(LengthUnit.value === 'jarda' && LengthConvert.value === 'milímetro' ){
            resultado = length.value * 914.4
        } else if(LengthUnit.value === 'jarda' && LengthConvert.value === 'centímetro' ){
            resultado = length.value * 91.44
        } else if(LengthUnit.value === 'jarda' && LengthConvert.value === 'metro' ){
            resultado = length.value / 1.09361
        } else if(LengthUnit.value === 'jarda' && LengthConvert.value === 'quilômetro' ){
            resultado = length.value / 1093.61
        } else if(LengthUnit.value === 'jarda' && LengthConvert.value === 'milha' ){
            resultado = length.value / 1760
        } else if(LengthUnit.value === 'jarda' && LengthConvert.value === 'polegada' ){
            resultado = length.value * 36
        } else if(LengthUnit.value === 'jarda' && LengthConvert.value === 'pé' ){
            resultado = length.value * 3
        } else if(LengthUnit.value === LengthConvert.value){
            resultado = length.value = length.value
        } else {
            alert('Selecione uma unidade de medida')    
        }
        console.log(resultado); // Exibe o resultado no console

        result(resultado, LengthConvert.value);
    });
};

const sectionTwo = () => {
    const btn = document.querySelector('.btnWeight');
    const weight = document.querySelector('#Weight');
    const WeightUnit = document.querySelector('#WeightUnit');
    const WeightConvert = document.querySelector('#WeightConvert');
    let resultado = 0;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(WeightUnit.value === 'miligrama' && WeightConvert.value === 'grama' ){
            resultado = weight.value / 1000   
        }else if(WeightUnit.value === 'miligrama' && WeightConvert.value === 'quilograma' ){
          resultado = weight.value / 1000000
        }  else if(WeightUnit.value === 'miligrama' && WeightConvert.value === 'libra' ){
             resultado = weight.value / 453592
        } else if(WeightUnit.value === 'miligrama' && WeightConvert.value === 'onça' ){
            resultado = weight.value / 28350
        }  else if(WeightUnit.value === 'grama' && WeightConvert.value === 'miligrama' ){
            resultado = weight.value * 1000
        } else if(WeightUnit.value === 'grama' && WeightConvert.value === 'quilograma' ){
            resultado = weight.value / 1000
        } else if(WeightUnit.value === 'grama' && WeightConvert.value === 'libra' ){
            resultado = weight.value / 453.592
        } else if(WeightUnit.value === 'grama' && WeightConvert.value === 'onça' ){
            resultado = weight.value / 28.3495
        } else if(WeightUnit.value === 'quilograma' && WeightConvert.value === 'miligrama' ){
            resultado = weight.value * 1000000
        } else if(WeightUnit.value === 'quilograma' && WeightConvert.value === 'grama' ){
            resultado = weight.value * 1000
        } else if(WeightUnit.value === 'quilograma' && WeightConvert.value === 'libra' ){
            resultado = weight.value * 2.20462
        } else if(WeightUnit.value === 'quilograma' && WeightConvert.value === 'onça' ){
            resultado = weight.value * 35.274
        }  else if(WeightUnit.value === 'libra' && WeightConvert.value === 'miligrama' ){
            resultado = weight.value * 453592
        } else if(WeightUnit.value === 'libra' && WeightConvert.value === 'grama' ){
            resultado = weight.value * 453.592
        } else if(WeightUnit.value === 'libra' && WeightConvert.value === 'quilograma' ){
            resultado = weight.value / 2.20462
        } else if(WeightUnit.value === 'libra' && WeightConvert.value === 'onça' ){
            resultado = weight.value * 16
        } else if(WeightUnit.value === 'onça' && WeightConvert.value === 'miligrama' ){ 
            resultado = weight.value * 28350
        } else if(WeightUnit.value === 'onça' && WeightConvert.value === 'grama' ){
            resultado = weight.value * 28.3495
        } else if(WeightUnit.value === 'onça' && WeightConvert.value === 'quilograma' ){
            resultado = weight.value / 35.274
        } else if(WeightUnit.value === 'onça' && WeightConvert.value === 'libra' ){
            resultado = weight.value / 16
        } else if(WeightUnit.value === WeightConvert.value){
            resultado = weight.value = weight.value
        } else {
            alert('Selecione uma unidade de medida')    
        }
        result(resultado, WeightConvert.value);
    });
};

const sectionThree = ()=>{
    const btn = document.querySelector('.btnTemperature');
    const temperature = document.querySelector('#Temperature');
    const TemperatureUnit = document.querySelector('#TemperatureUnit');
    const TemperatureConvert = document.querySelector('#TemperatureConvert');
    let resultado = 0;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(TemperatureUnit.value === 'celsius' && TemperatureConvert.value === 'fahrenheit' ){
            resultado = (temperature.value * 9/5) + 32
        }else if(TemperatureUnit.value === 'celsius' && TemperatureConvert.value === 'kelvin' ){
            resultado = temperature.value + 273.15
        } else if(TemperatureUnit.value === 'fahrenheit' && TemperatureConvert.value === 'celsius' ){
            resultado = (temperature.value - 32) * 5/9
        } else if(TemperatureUnit.value === 'fahrenheit' && TemperatureConvert.value === 'kelvin' ){
            resultado = (temperature.value - 32) * 5/9 + 273.15
        } else if(TemperatureUnit.value === 'kelvin' && TemperatureConvert.value === 'celsius' ){
            resultado = temperature.value - 273.15
        } else if(TemperatureUnit.value === 'kelvin' && TemperatureConvert.value === 'fahrenheit' ){
            resultado = (temperature.value - 273.15) * 9/5 + 32
        } else if(TemperatureUnit.value === TemperatureConvert.value){
            resultado = temperature.value = temperature.value
        } else {
            alert('Selecione uma unidade de medida')    
        }
        result(resultado, TemperatureConvert.value);
    });

}

const result = (result, unit) => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.remove('active'));
    const section = document.querySelector('.result');
    const results = document.querySelector('.res');
    results.innerHTML = `result: ${result} ${unit}`;
    section.style.display = 'block';

    document.querySelector('button[type="reset"]').addEventListener('click', () => {
        location.reload();
    });
};

showSection();
sectionOne();
sectionTwo();
sectionThree();
