const form_elem = document.querySelector('form')

form_elem.onsubmit = (e) => {
    e.preventDefault()
    let form_data = new FormData(e.target)
    let data = Object.fromEntries(form_data)
    console.log(data)
}

const div_root = document.querySelector('#root')

for (let i = 0; i < 50; i++){
    let p_elem = document.createElement('p')
    p_elem.innerText = i
    div_root.append(p_elem)
}