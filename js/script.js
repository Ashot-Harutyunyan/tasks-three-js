// փոխել զանգվածի սկզբնական և վերջավոր թվերի դիրքերը

let arr1 = [1, 2, 3, 4, 5, 6]

let firstElement = arr1[0]
arr1[0] = arr1[arr1.length -1]
arr1[arr1.length -1] = firstElement
 
console.log(arr1)

console.log('----------------------------------------------------------')

// զանգվածում թողնել միայն պարզ թվեր

let arr2 = [100, 212, 332, 449, 587, 684, 757, 860, 929]
let ind = 0

internal:
for(let i = 0; i < arr2.length; i++){
    for(let j = 2; j < Math.sqrt(arr2[i]); j++){
        if(arr2[i] % j === 0){
            continue internal
        }
    }
    arr2[ind] = arr2[i]
    ind++
}

arr2.length = ind

console.log(arr2)

console.log('----------------------------------------------------------')

// Ստացեք զանգվածի առաջին և երկրորդ կեսերի պարզ թվերը և ստուգեք, թե որ մասում է ամենաշատ պարզ թվերը

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let secondArr = []
let index = 0
let secondIndex = 0

internal:
for(let i = 0; i < arr3.length; i++){

    for(let j = 2; j < Math.sqrt(arr3[i]); j++){
        if(arr3[i] % j === 0) continue internal
    }

    if(i > arr3.length / 2){
        secondArr[secondIndex] = arr3[i]
        secondIndex++
    }else {
        arr3[index] = arr3[i]
        index++
    }
}

arr3.length = index

if(arr3.length > secondArr.length){
  console.log('The first half contains more prime numbers')  
}else if(arr3.length < secondArr.length){
  console.log('The second half contains more prime numbers')
}else{
  console.log('Both halves contain the same number of primes') 
}

console.log('----------------------------------------------------------')

// գումարել իրար զանգվածի զույք և կենտ թվերը հասկանալ որն է մեծ

let arr4 = [1, 2, 3, 4, 5, 6, 7]

    let evenNumbers = 0
    let oddNumbers = 0
   
for(let i = 0; i < arr4.length; i++){
    if(arr4[i] % 2 == 0) evenNumbers = evenNumbers + arr4[i]
    else oddNumbers = oddNumbers + arr4[i] 
}  

evenNumbers < oddNumbers ? console.log('odd numbers ' + oddNumbers) : console.log('even numbers ' + evenNumbers)

console.log('----------------------------------------------------------')

// զանգվածները վերադասավորել նվազման և աճման կարգով

let decrease = [10, 22, 3, 48, 5, 66]
let ascending  = [10, 22, 3, 48, 5, 66]

for(let i = 0; i < decrease.length; i++){
    for(let j = 0; j < decrease.length; j++){
        let x = decrease[j]
        if(decrease[j] > decrease[j + 1]){
            decrease[j] = decrease[j + 1]
            decrease[j + 1] = x
        }
    }
}

for(let i = 0; i < ascending.length; i++){
    for(let j = 0; j < ascending.length; j++){
        let x = ascending[j]
        if(ascending[j] < ascending[j + 1]){
            ascending[j] = ascending[j + 1]
            ascending[j + 1] = x
        }
    }
}

console.log(decrease)
console.log(ascending)

// գրել ֆուկցիա, որը պարզում է
// տրված բնական թվի թվանշանների գումարը զույգ է թե կենտ ։

function evenOrOdd(n){
    let count = 0
    while(n > 0){
        let a = n % 10
        n = Math.floor(n - a) / 10
        count += a
    }
    return count % 2 === 0 ? 'even' : 'odd'    
}


console.log(evenOrOdd(202))
console.log(evenOrOdd(203))

console.log('-----------------------------------------------------')

// Գտնել ֆունկցիա որը ստանում է, որպես պարամետր իրարից պրաբելով առանձնացված ստրինգ
// և մասիվ, որի էլէմենտները ստրինգներ են: Գտնել մասիվում առկա բառերը ստրնգում
// և փոխարինել այդ բառիը սինվոլների քանակի ասղանիշներով։

let str = 'Lorem ipsum dolor sit amet quod officiis quam maxime fuga'
let arr = ['sint', 'ipsum', 'elit', 'incidunt', 'quisquam', 'sit', 'delectus']

function loop(arg){
    let star = ''
    for(let j = 0; j < arg; j++){
        star += '*'
    }
    return star
}

function findWords(str, arr){
    let newArr = [] 
    let newStr = str.split(' ')

    for(let i = 0; i < arr.length; i++){
        if(newStr.includes(arr[i])){
            newArr.push(loop(arr[i].split('').length))
        }else {
            newArr.push(arr[i])
        }
    }
   
    return newArr.join(' ')
}


console.log(findWords(str, arr))

console.log('-----------------------------------------------------')

// Պատահական Hexadecimal Գույնի Գեներացիա
// Գեներացնել պատահական հեքսադեցիմալ գույնի արժեք:

function hexadecimalColor(){
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
}

function randomColor(){
    let red = hexadecimalColor()
    let green = hexadecimalColor()
    let blue = hexadecimalColor()

    return `#${red}${green}${blue}`
}
console.log(randomColor())

console.log('-----------------------------------------------------')

// Խնդիր 19: Պատահական ժամանակ գեներացիա (HH:MM)
// Գեներացնել պատահական ժամանակ ձևաչափով HH:MM:

function randomTime(){
    let hour = Math.ceil(Math.random() * 24).toString().padStart(2, '0')
    let minute = Math.ceil(Math.random() * 60).toString().padStart(2, '0')

    return `${hour}:${minute}`
}

console.log(randomTime())

console.log('-------------------------------------------------------------------------')

// Форматировать строку даты: Используйте методы, такие как getFullYear(), getMonth() и getDate(), для создания отформатированной строки даты.

let currentDate = new Date()

console.log(currentDate.getDate().toString().padStart(2, '0'),
currentDate.getMonth().toString().padStart(2, '0'),
currentDate.getFullYear().toString())

console.log('-------------------------------------------------------------------------')

// Вычислить разницу между двумя датами: Создайте два объекта Date и вычтите один из другого, чтобы получить разницу в миллисекундах. Переведите ее в другие единицы при необходимости.

let start = new Date(1997, 1, 4)
let end = new Date()

start = Date.parse(start)
end = Date.parse(end)

let day = 0

for(let i = start; i <= end; i = i + 24*60*60*1000){
    day++
}

console.log(day)

console.log('-------------------------------------------------------------------------')

// Получить текущее время: Используйте методы, такие как getHours(), getMinutes() и getSeconds(), чтобы получить текущее время.

let currentHoursMinutesSeconds = new Date()

let hours = currentHoursMinutesSeconds.getHours().toString().padStart(2, '0')
let minutes = currentHoursMinutesSeconds.getMinutes().toString().padStart(2, '0')
let seconds = currentHoursMinutesSeconds.getSeconds().toString().padStart(2, '0')

console.log(`${hours}:${minutes}:${seconds}`)

console.log('-------------------------------------------------------------------------')

// Получить день в году: Используйте методы getMonth() и getDate() для получения номера дня в году.

function getDayOfYear(date){
    let start = new Date(date.getFullYear(), 0, 0)
    let end = date

    start = Date.parse(start)
    end = Date.parse(end)

    let day = 0

    for(let i = start; i <= end; i = i + 24*60*60*1000){
        day++
    }
    console.log(day)
}

getDayOfYear(new Date())

console.log('-------------------------------------------------------------------------')

// Получить день недели для определенной даты: Используйте метод getDay() для получения дня недели для определенной даты.

let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let dayWeek = new Date().getDay()

console.log(week[dayWeek])

console.log('-------------------------------------------------------------------------')

// Получить первый день текущего месяца: Создайте новый объект Date и установите день месяца в 1.

let currentOneDate = new Date();
let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

console.log(firstDayOfMonth)

console.log('-------------------------------------------------------------------------')

// Получить последний день текущего месяца: Создайте новый объект Date, установите месяц на следующий, а день месяца на 0.

let currentEndDate = new Date();
let lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

console.log(lastDayOfMonth)

console.log('-------------------------------------------------------------------------')