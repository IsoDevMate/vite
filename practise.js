const form = document.querySelector('form');
const input = document.querySelector('input');
const message = document.querySelector('.message');

form.addEventListener("Submit", e =>{
    e.preventDefault()
})

const numberOfChildren = parseInt(input.value)

if(!isNaN(numberOfChildren))
{message.innerText +="Bad"}
else
{
    message.innerText +="Good"
}

