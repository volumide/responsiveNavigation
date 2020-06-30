'use strict'

let links = document.querySelectorAll('.link')
let linkBody = document.getElementById('link-body')
let closeMenu = document.getElementById('close-button')
let openMenu = document.getElementById('menu-button')

links.forEach((el) =>{
	el.addEventListener('click', () =>{
		links.forEach( result => result.classList.remove('active'))
		el.classList.add('active')
	} )
})

closeMenu.addEventListener('click', ()=>{
	linkBody.classList.remove('open')
	linkBody.classList.add('close')
})

openMenu.addEventListener('click', ()=>{
	linkBody.classList.remove('close')
	linkBody.classList.add('open')
})
