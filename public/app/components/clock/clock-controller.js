function ClockController() {
    var service = new ClockService()

    function checkTime(i) {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }

   this.startTime = function startTime(){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        h = checkTime(h);
        m = checkTime(m);
        document.getElementById('clock').innerHTML = `<h2 class="clock-face"><b>${h}:${m}</b></h2>`
        var t = setTimeout(startTime, 500);
    }

}