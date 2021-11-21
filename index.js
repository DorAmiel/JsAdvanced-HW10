//EX1
const showTimeEx1 = () => {
    console.log("Start")
    let today = new Date()
    let hours = (today.getHours())
    let minutes = (today.getMinutes())
    let seconds = (today.getSeconds())
    let currentTime = `${hours}:${minutes}:${seconds}`
    console.log(currentTime)
    console.log("End")

}



//EX2

const showTimeEx2 = () => {
    console.log("Start")
    showTime2((currentTime) => (console.log(currentTime)))
    console.log("End")

}

const showTime2 = (callBack) => {
    setTimeout(() => {
        let today = new Date()
        let hours = (today.getHours())
        let minutes = (today.getMinutes())
        let seconds = (today.getSeconds())
        let currentTime = `${hours}:${minutes}:${seconds}`
        callBack(currentTime)
    }, 3000);
}



//Ex3

const showTimeEx3 = () => {
    console.log("Start")
    showTime3((currentTime) => (console.log(currentTime)))
    console.log("End")

}

const showTime3 = (callBack) => {
    let today = new Date()
    setTimeout(() => {
        let hours = (today.getHours())
        let minutes = (today.getMinutes())
        let seconds = (today.getSeconds())
        let currentTime = `${hours}:${minutes}:${seconds}`
        callBack(currentTime)
    }, 3000);
}



//Ex4

const runNumberEx4 = () => {
    console.log("Start")
    runNumbersAfter3Seconds((x) => console.log(x))
    runNumbersAfter5Seconds((y) => console.log(y))
    runNumbersAfter7Seconds((z) => console.log(z))
    console.log("End")

}

const runNumbersAfter3Seconds = (callBack3Seconds) => {
    let randomNumber = Math.floor(Math.random() * 101);
    setTimeout(() => {
        callBack3Seconds(randomNumber)
    }, 3000);
}
const runNumbersAfter5Seconds = (callBack5Seconds) => {
    let randomNumber = Math.floor(Math.random() * 101);
    setTimeout(() => {
        callBack5Seconds(randomNumber)
    }, 5000);
}
const runNumbersAfter7Seconds = (callBack7Seconds) => {
    let randomNumber = Math.floor(Math.random() * 101);
    setTimeout(() => {
        callBack7Seconds(randomNumber)
    }, 7000);
}



//Ex5

let runNumberEx5 = setInterval(() => {
    textAreaNumber = document.getElementById("const-number").value
    pHolderNumber = document.getElementById("interval-number")
    let randomNumber = Math.floor(Math.random() * textAreaNumber);
    pHolderNumber.innerHTML = randomNumber
}, 1000);

const stopRunnigNumbers = () => {
    clearInterval(runNumberEx5)
}



//Ex6

let changeBackgroundColor = setInterval(() => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let intervalBackground = document.getElementById("ex6")
    intervalBackground.style.backgroundColor = "#" + randomColor
}, 1000);


const stopRunnigColors = () => {
    clearInterval(changeBackgroundColor)
}



//Ex7

const runEx7 = () => {
    document.body.style.backgroundColor = "green";
    setTimeout(alert, 1000, "Done");
}


//Ex8
let pHolder8 = document.getElementById("ex8-pHolder")
const showNumberEx8 = () => {
    getRandomNumberAfterDelay8((randomNumber) => pHolder8.innerHTML = randomNumber)

}
const getRandomNumberAfterDelay8 = (callBack) => {
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 101);
        callBack(randomNumber)
    }, 5000);
}

//Ex9
let pHolder9 = document.getElementById("ex9-pHolder")
const showNumberEx9 = () => {
    getRandomNumberAfterDelay9((randomNumber) => pHolder9.innerHTML = randomNumber)
}
const getRandomNumberAfterDelay9 = (callBack, limit = 10000) => {
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * limit);
        callBack(randomNumber)
    }, 5000);
}

//Ex10

let pHolder10 = document.getElementById("ex10-pHolder")
const showNumberEx10 = () => {
    getRandomNumberAfterDelay10((randomNumber) => pHolder10.innerHTML = randomNumber)
}
const getRandomNumberAfterDelay10 = (callBack, min = 100, max = 200) => {
    setTimeout(() => {
        min = Math.ceil(min);
        max = Math.floor(max);
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        callBack(randomNumber)
    }, 1000);
}

//Ex11

let pHolder11 = document.getElementById("ex11-pHolder")
const showNumberEx11 = () => {
    getRandomNumberAfterDelay11((randomNumber) => pHolder11.innerHTML = randomNumber)
}
const getRandomNumberAfterDelay11 = (evenNumberCallBack, min = 100, max = 200) => {
    setTimeout(() => {
        min = Math.ceil(min);
        max = Math.floor(max);
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber)
        for (let i = 0; i < 1; i++) {
            if (randomNumber % 2 === 0) {
                callBack(randomNumber)
            } else {
                randomNumber++
                evenNumberCallBack(randomNumber)
            }
        }
    }, 1000);
}

//Ex12
const showUserFromServer = () => {
    getUserFromServer((user) => (console.log(user)))
}

const getUserFromServer = (userCallBack) => {
    setTimeout(() => {
        const user = { firstName: "Moishe", lastName: "Ufnik" }
        userCallBack(user)
    }, 4000);
}


//Ex13
const showGradesFromServer = () => {
    getGradesFromServer((grades) => (console.log(grades)))
}

const getGradesFromServer = (gradesCallBack) => {
    setTimeout(() => {
        const grades = [100, 98, 75, 80, 100, 87];
        gradesCallBack(grades)
    }, 7000);
}

//Ex14
let locationSpanHolder = document.getElementById("ex14-spanHolder")
const showCurrentLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationSpanHolder.innerHTML = "Geolocation is not supported by this browser.";
    }
}

const showPosition = (position) => {
    locationSpanHolder.innerHTML = `latitude is: ${position.coords.latitude}<br> longitude is: ${position.coords.longitude} `
}