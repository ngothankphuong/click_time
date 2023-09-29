const shape = document.getElementById('shape')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
let startTime

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function makeShapeAppear() {
    let top = Math.floor(Math.random() * 100)
    let left = Math.floor(Math.random() * 100)
    let size = Math.floor(Math.random() * 20)
    let border = size + 30

    shape.style.backgroundColor = getRandomColor()
    shape.style.display = "block"
    shape.style.top = top + '%'
    shape.style.left = left + '%'

    if (size < 10) {
        shape.style.width = '10%'
        shape.style.height = '10%'
        shape.style.borderRadius = '20%'
    }
    else if (size > 20) {
        shape.style.width = '40%'
        shape.style.height = '40%'
        shape.style.borderRadius = '50%'
    }
    else {
        shape.style.width = size + '%'
        shape.style.height = size + '%'
        shape.style.borderRadius = border + '%'
    }

    startTime = new Date().getTime()
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() + 1000)
}

startBtn.onclick = () => {
    startTime = new Date().getTime()
    appearAfterDelay()
}

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none"
    let endTime = new Date().getTime()
    let timeTaken = (endTime - startTime) / 1000
    document.getElementById("timeTaken").innerHTML = timeTaken + "s"
    appearAfterDelay()
}