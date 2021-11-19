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
    showTime((currentTime) => (console.log(currentTime)))
    console.log("End")

}

const showTime = (callBack) => {
    setTimeout(() => {
        let today = new Date()
        let hours = (today.getHours())
        let minutes = (today.getMinutes())
        let seconds = (today.getSeconds())
        let currentTime = `${hours}:${minutes}:${seconds}`
        callBack(currentTime)
    }, 3000);
}