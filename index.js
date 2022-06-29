var sec=0
var min=0
var hra=0
var interval

function twoDigits(digit) {
  if (digit<10){
    return('0'+digit)
  } else {
    return (digit)
  }
}

function start() {
  stopwatch()
  interval = setInterval(stopwatch, 1000)
}

function pause() {
  console.log('paused')
  clearInterval(interval)
}

function reset() {
  console.log('stoped')
  sec = 0
  min = 0
  document.getElementById('numbers.stopwatch').innerText = '00:00:00'
}

function stopwatch() {
  sec++ //  sec = sec + 1
  if (sec == 60) {
    min++
    sec = 0
    if ( min == 60) {
      hra++
      min = 0
    }
  }
  document.getElementById('numbers.stopwatch').innerText =  twoDigits(hra)+':'+twoDigits(min)+':'+ twoDigits(sec)
}