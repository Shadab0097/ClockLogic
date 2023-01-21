 
function showdate (){
    var date = new Date().toDateString()
    document.getElementById('showdate').innerHTML = date
 }
 showdate()
 
//o7:37:22
 function gettime(){
    var todaydate = new Date()
    var hour = todaydate.getHours()
    var minute = todaydate.getMinutes()
    var second = todaydate.getSeconds()
    // var session = 'AM'

    if(hour==0){
        hour=12

    } else if(hour>12){
        session = 'PM'
        hour=  hour - 12
    }else if(hour<12){
        session = 'AM'
    }

    hour= hour < 10 ? 0 + "" + hour : hour
    minute= minute < 10 ? 0 + "" + minute : minute
    second= second < 10 ? 0 + "" + second : second

    var clocktime = hour +':'+minute +':'+second +"" + session
    document.getElementById('showtime').innerText=clocktime
 }

//  gettime()
 
 
  var intervaltime;
 function startclock(){
    intervaltime=setInterval(gettime,1000)
 }
 
 function stopclock(){
    clearInterval(intervaltime)
 }
 
 
 
 