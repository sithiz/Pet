class petToma {
    constructor() {
        this.name = 'carl',
            this.age = 0,
            this.hunger = 1,
            this.sleepiness = 1,
            this.boredom = 1

    }
}

let pet = new petToma

let feed = function() {
    $('img').after('<img src="./gizmo_food.jpg" class="food">')
    setTimeout(function() {
        $('.food').remove()
    }, 5000)
    pet.hunger = 0
    $('.hunger').replaceWith('<li class="hunger"> hunger ' + pet.hunger + '</li>')

}
let play = function() {
    $('img').before('<img src="./toy.jpeg" class="toy">')
    setTimeout(function() {
        $('.toy').remove()
    }, 5000)
    pet.boredom = 0
    $('.bored').replaceWith('<li class="bored"> boredom ' + pet.boredom + '</li>')
}
let light = function() {
    pet.sleepiness = 0
    $('.gizmo').hide(5000)
    setTimeout(function() {
        $('.gizmo').show(5000)
        alert('gizmo is awake')
    }, 15000)
    $('.sleep').replaceWith('<li class="sleep"> sleepiness ' + pet.sleepiness + '</li>')
}
let death = function(){
	$('.pet').replaceWith('<img src="./death.jpg">')
        $('.title').replaceWith('<h1>YOUR PET IS DEAD YOU FAILED HIM</h1>')
}
let interval = function() {
    pet.age += 1
    $('.age').replaceWith('<li class="age"> age ' + pet.age + '</li>')
    pet.hunger += 1
    $('.hunger').replaceWith('<li class="hunger"> hunger ' + pet.hunger + '</li>')
    pet.sleepiness += 1
    $('.sleep').replaceWith('<li class="sleep"> sleepiness ' + pet.sleepiness + '</li>')
    pet.boredom += 1
    $('.bored').replaceWith('<li class="bored"> boredom ' + pet.boredom + '</li>')
    if (pet.hunger >= 10) {
        death()
        clearInterval(intervalId)
    } else if (pet.sleepiness >= 10) {
        death()
        clearInterval(intervalId)
    } else if (pet.boredom >= 10) {
        death()
        clearInterval(intervalId)
    } else {
        
    }
}


let intervalId = setInterval(interval, 2000)







$('#light').click(light)
$('#feed').click(feed)
$('#play').click(play)
$('#stats').append('<li class="age"> age ' + pet.age + '</li><li class="hunger"> hunger ' + pet.hunger + '</li><li class="bored"> boredom ' + pet.boredom + '</li><li class="sleep"> sleepiness ' + pet.sleepiness + '</li>')