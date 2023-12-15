var m1 = 0;
var m2 = 0;
var mCoins = 0;
function missions() {
    document.getElementById("_m1").innerHTML = "-Click 100 times: " + m1;
    document.getElementById("_m2").innerHTML = "-Click 1k times : " + m2;
    if(m1 > 99) {
        document.getElementById("_m1").innerHTML = "-Click 100 times: Done";
    }
    if(m2 > 999) {
        document.getElementById("_m2").innerHTML = "-Click 1000 times: Done";
    }
    if(m1 == 100) {
        mCoins = mCoins + 10;
        document.getElementById("coins").innerHTML = mCoins;
    }
    if(m2 == 1000) {
        mCoins = mCoins + 90;
        document.getElementById("coins").innerHTML = mCoins;
    }
    
}