function ClockController() {
    var service = new ClockService()

    function checkTime(i) {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }

    function toggleTime(type){
        if (type=='hr'){
            startTimeHr()
        }
         else if(type=='military'){
        startTime()
        } 
    }

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        h = checkTime(h);
        m = checkTime(m);
        document.getElementById('clock').innerHTML = `<button type="button"class="btn clock-btn" onclick="app.controllers.clockController.getTime('hr')"><h2 class="clock-face"><b>${h}:${m}</b></h2></button>`
        var t = setTimeout(toggleTime('military'), 500);
    }

    function startTimeHr() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var ampm = ''
        if (m < 10){
            m = '0'+m;
        }
        if (h == 24) {
            h == 0
            ampm = 'am'
        } else if (h >= 12) {
            ampm = 'pm'
        } else {
            ampm = 'am'
        }
        h = h % 12;
        var time = h + ':' + m + ' ' + ampm;
        document.getElementById('clock').innerHTML = `<button type="button"class="btn clock-btn" onclick="app.controllers.clockController.getTime('military')"><h2 class="clock-face-hr">${time}</h2></button>`
        var t = setTimeout(toggleTime('hr'), 500);
    }

    this.getTime = function getTime(type) {
        toggleTime(type)
    }

}