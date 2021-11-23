const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const blueBtn = document.querySelector('.blue')
const redBtn = document.querySelector('.red')
const yellowBtn = document.querySelector('.yellow')
const greenBtn = document.querySelector('.green')
const colorsBlue = ['#ccccff', ' #9999ff', '#6666ff', '#3333ff', '#0000ff', '#0000cc', '#000099', '#000066', '#000033', '#00001a']
const colorsRed = ['#FFEBEE', '#FFCDD2', '#B72C2C', '#933543', '#890519', '#E57373', '#FF0A22', '#D32F2F', '#7A2121', '#EDC4C4']
const colorsYellow =['#FFF59D', ' #FFEE58', '#FFEB3B', '#FBC02D', '#F57F17', '#FFFF00', '#dab800', ' #fff6a5', '#E8D636', '#FDE29F']
const colorsGreen =['#F1F8E9', ' #C5E1A5', '#9CCC65', '#8BC34A', '#689F38', '#558B2F', '#33691E', ' #A5D6A7', '#66BB6A', '#A5D6A7']




blueBtn.addEventListener('click', event => {
    document.querySelectorAll('.square').forEach(e => e.remove())
    work(colorsBlue)
})

redBtn.addEventListener('click', event => {
    document.querySelectorAll('.square').forEach(e => e.remove())
    work(colorsRed)
})

yellowBtn.addEventListener('click', event => {
    document.querySelectorAll('.square').forEach(e => e.remove())
    work(colorsYellow)
})

greenBtn.addEventListener('click', event => {
    document.querySelectorAll('.square').forEach(e => e.remove())
    work(colorsGreen)
})


function work(colors){
    for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {setColor(square,colors)})
    square.addEventListener('mouseleave', () => {removeColor(square, colors)})
    board.append(square)
}
}


function setColor(element,colors){
    const color = getRandomColor(colors)
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.backgroundColor = '#7c7c7c'
    element.style.boxShadow = `0 0 2px #a5a5a5`
}

function getRandomColor(colors){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


