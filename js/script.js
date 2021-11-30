let counters = document.querySelectorAll('.box')
let target = new Date("Dec 15, 2021 23:59:59").getTime()

let interval



interval = setInterval(() => {
    let curr = new Date().getTime()
    let distance = target - curr

    let counter = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }

    if(distance < 0){
        clearInterval(interval)
    }else{
        counters[0].innerHTML = counter.days < 10 ? `0${counter.days}` : counter.days
        counters[1].innerHTML = counter.hours < 10 ? `0${counter.hours}` : counter.hours
        counters[2].innerHTML = counter.minutes < 10 ? `0${counter.minutes}` : counter.minutes
        counters[3].innerHTML = counter.seconds < 10 ? `0${counter.seconds}` : counter.seconds
    }
    
}, 1000)

