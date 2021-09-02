let position = {x:0, y:0}

window.addEventListener('keydown', function(event){
    switch(event.key){
        case 'ArrowLeft':
            left()
            break
        case 'ArrowDown':
            down()
            break
        case 'ArrowUp':
            up()
            break
        case 'ArrowRight':
            right()
            break
    }
})


function positionReload(){
    let box = document.querySelector('#box')
    box.style.transform = `translate(${position.x*100}%, ${position.y*100}%)`
    console.log(box.style.transform)
}

function left(){
    position.x -= 1
    positionReload()
    console.log('left')
}

function down(){
    position.y += 1
    positionReload()
    console.log('down')
}

function up(){
    position.y -= 1
    positionReload()
    console.log('up')
}

function right(){
    position.x += 1
    positionReload()
    console.log('right')
}