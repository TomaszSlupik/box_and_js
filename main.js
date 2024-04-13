const btn = document.querySelector('.btnColor')
const body = document.querySelector('body')

const bgChange = () => {
    body.classList.toggle('bgChangeColor')
    body.classList.toggle('bgChangeColorSecond')

}

btn.addEventListener('click', bgChange)

// 
const arr = [[10, 20, 30], [121, 198, 820], [400, 800, 1200]]

let found = false
const checkNumber = (num, arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] == num) {
                found = true
                console.log(found)
                return
            }
        }
    }
    found = false
    console.log(found)
}

checkNumber(10, arr)
checkNumber(999, arr)
checkNumber(1200, arr)