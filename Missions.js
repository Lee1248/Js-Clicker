var m1 = 0;
var mCoins = 0;
function missions() {
    document.getElementById("_m1").innerHTML = "-Click 100 times: " + m1;
    if(m1 == 100) {
        document.getElementById("_m1").innerHTML = "-Click 100 times: Done";
        mCoins = mCoins + 10;
        document.getElementById("coins").innerHTML = mCoins;
    }
}