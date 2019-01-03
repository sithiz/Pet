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
    window.setTimeout(function() {
        $('.food').remove()
    }, 5000)
    pet.hunger = 0

}
let play = function() {
    $('img').before('<img src="./toy.jpeg" class="toy">')
    window.setTimeout(function() {
        $('.toy').remove()
    }, 5000)
    pet.boredom = 0
}
let light = function() {
    pet.sleepiness = 0
    $('.gizmo').hide(5000)
    window.setTimeout(function() {
        $('.gizmo').show(5000)
        alert('gizmo is awake')
    }, 15000)

}

$('#light').click(light)
$('#feed').click(feed)
$('#play').click(play)
$('#stats').append('<li> age '+pet.age+'</li><li> hunger ' +pet.hunger+'</li><li> boredom '+pet.boredom+'</li><li> sleepiness '+pet.sleepiness+'</li>')







