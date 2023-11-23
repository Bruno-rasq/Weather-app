const body = document.querySelector('#body');

const CreateElement = (tag, classe) => {
    const element = document.createElement(tag)
    element.className = classe
    return element
}

const CreateLoading = () => {

    const title = CreateElement('h1')
    const loading = CreateElement('div', 'loading')
    const span1 = CreateElement('span')
    const span2 = CreateElement('span')
    const span3 = CreateElement('span')

    title.innerHTML = 'Weather | App'
    span1.innerHTML = '.'
    span2.innerHTML = '.'
    span3.innerHTML = '.'

    loading.appendChild(span1)
    loading.appendChild(span2)
    loading.appendChild(span3)
    body.appendChild(title)
    body.appendChild(loading)
}



window.onload = () => {
    
    CreateLoading()
    

}