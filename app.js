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
//feed function and reset hunger in pet 
let feed = function() {
    $('.pet').after('<img src="./gizmo_food.jpg" class="food">')
    setTimeout(function() {
        $('.food').remove()
    }, 5000)
    pet.hunger = 0
    $('.hunger').replaceWith('<li class="hunger"> hunger ' + pet.hunger + '</li>')

}
//play with pet function and reset boredem 
let play = function() {
    $('.pet').before('<img src="./toy.png" class="toy">')
    setTimeout(function() {
        $('.toy').remove()
    }, 5000)
    pet.boredom = 0
    $('.bored').replaceWith('<li class="bored"> boredom ' + pet.boredom + '</li>')
}
//lights off and sleepyness reset
let light = function() {
    pet.sleepiness = 0
    $('.gizmo').hide(1000)
    setTimeout(function() {
        $('.gizmo').show(1000)
        alert('gizmo is awake')
    }, 1000)
    $('.sleep').replaceWith('<li class="sleep"> sleepiness ' + pet.sleepiness + '</li>')
}
//death function
let death = function() {
    $('.pet').replaceWith('<img src="./death.jpg">')
    $('.title').replaceWith('<h1>YOUR PET IS DEAD YOU FAILED HIM</h1>')
}
let interval = function() {
    pet.age += 1
    $('.age').replaceWith('<li class="age"> age ' + pet.age + '</li>')
    //the age interval and replacement 
    //the growth section
    if (pet.age === 10) {
        $('.pet').replaceWith('<img src="./age10.png" class="pet">')
    } else if(pet.age ===20){
    	$('.pet').replaceWith('<img src="./age20.png" class="pet">')
    }
    pet.hunger += 1
    $('.hunger').replaceWith('<li class="hunger"> hunger ' + pet.hunger + '</li>')
    //the hunger replacement
    pet.sleepiness += 1
    $('.sleep').replaceWith('<li class="sleep"> sleepiness ' + pet.sleepiness + '</li>')
    //the hunger replacement
    pet.boredom += 1
    $('.bored').replaceWith('<li class="bored"> boredom ' + pet.boredom + '</li>')
    //the bordem replacement
    //the alive chech point
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
//v the intervel section and interval id assignment

let intervalId = setInterval(interval, 3000)




//JQuery selectors for the list items and click functions


$('#light').click(light)
$('#feed').click(feed)
$('#play').click(play)
$('#stats').append('<li class="age"> age ' + pet.age + '</li><li class="hunger"> hunger ' + pet.hunger + '</li><li class="bored"> boredom ' + pet.boredom + '</li><li class="sleep"> sleepiness ' + pet.sleepiness + '</li>')









