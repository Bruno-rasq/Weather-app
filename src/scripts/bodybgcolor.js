const body = document.querySelector('#body')

const colors = {
    'quente': 'linear-gradient(to bottom, #e4a702, #fcf37e)',
    'ambiente': 'linear-gradient(to bottom, #5654d3, #87c5f8)',
    'frio': 'linear-gradient(to bottom, #414088, #4e57a7)',
    'gelido': 'linear-gradient(to bottom, #4d2969, #6a39aa)'
}


//mudando cor de background do body
 export const BGColorchange = (weather) => {

    if(weather >= 28) body.style.backgroundImage = colors['quente']
    if(weather < 28 && weather > 22) body.style.backgroundImage = colors['ambiente']
    if(weather < 22 && weather > 15) body.style.backgroundImage = colors['frio']
    if(weather < 15) body.style.backgroundImage = colors['gelido']  
}