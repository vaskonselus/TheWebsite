const birthdate = new Date(1996, 10, 29)
const careerStart = new Date(2024, 6)
const currentDate = new Date()
const asDeveloper = new Date(2021, 11)

var time = function (mostRecentDate, initialDate, choice) {
    let years = mostRecentDate.getFullYear() - initialDate.getFullYear()
    let months = mostRecentDate.getMonth() - initialDate.getMonth()

    let timeInMonths = years * 12 + months

    switch (choice) {
        case 0:
            return Math.floor(timeInMonths / 12)
            break;
        case 1:
            return Math.floor(timeInMonths / 12)
            break;
        case 2:
            return `(${Math.floor(timeInMonths / 12)} years and ${12 + months} months)`
            break;
        default:
            return '--- Forget the choice! ---'
            break;
    }
}

// Time of Experience   # 0
document.querySelector('span#professional-experience').innerHTML = `${time(currentDate, careerStart, 0)} years of experience `

// Age in About Me   # 1
document.querySelector('div.about-content h3').innerHTML = `Brazilian | ${time(currentDate, birthdate, 1)} Years Old`

// Period of Time Worked   # 2
document.querySelector('span#senior').innerHTML = time(currentDate, asDeveloper, 2)

// Copyright
document.querySelector('p#copyright').innerHTML = `Copyright &copy; ${currentDate.getFullYear()} by Vaskonselus | All Rights Reserved.`
