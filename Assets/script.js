//dayjs().format()
const times = document.getElementById("time")
const dates = document.getElementById("date")

times.innerHTML = time()
dates.innerHTML = date()

function time() {
  
    const hour = dayjs().hour()
    const minute = dayjs().minute()
    const second = dayjs().second()
    
    const currentTime = hour + ":" + minute +":" + second
    return currentTime

}

function date() {
    const currentDate = (dayjs().format('MMMM-DD-YYYY'))
    console.log(currentDate)
    return currentDate

}



const coloumnOne = document.getElementById("col-one")

function isNine() {
    
    if(times < "09:00:00") {
        $('p.inputOne').css("backgroundColor", "lightgreen");
    } else if (times > "09:00:01") {
        $('p.inputOne').css("backgroundColor", "grey")
    }
}

//$('div.col-10').css("backgroundColor", "red")





