

class petToma {
	constructor(){
		this.name = 'carl',
		this.age = 0,
		this.hunger = 1,
		this.sleepiness = 1,
		this.boredom = 1
		
	}
}

let pet = new petToma 

console.log(pet.hunger,pet.age,pet.name,pet.sleepiness,pet.boredom)

let feed = function(){
	pet.hunger = 0
}
let play = function(){
	pet.sleepiness = 0
}
let light = function(){
	pet.sleepiness = 0 
	$('.gizmo').hide(5000)
}

$('#play').click(light)









