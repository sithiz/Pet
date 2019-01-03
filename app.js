

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






let feed = function(){
	pet.hunger = 0
	$('img').after('<img src="gizmo_food.jpg" class="food">')
	window.setTimeout(function(){
		$('.food').remove()
	}, 5000)

}
let play = function(){
	pet.sleepiness = 0
}
let light = function(){
	pet.sleepiness = 0 
	$('.gizmo').hide(5000)
	window.setTimeout(function(){
		$('.gizmo').show(5000)
		alert('gizmo is awake')
	}, 15000)

}

$('#light').click(light)
$('#feed').click(feed)








