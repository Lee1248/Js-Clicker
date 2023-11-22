    var num = 0;
    var _upg = false;
    var _clk = false;
    var spau = 0;
    var _sp = false;
    var num = document.cookie;
  
function myFunction() {
  num++;
    m1++;
    document.cookie = "num";
  if(_upg == true) {
    num++;
      document.cookie = "num";
  }
  if(_sp == true) {
    num = num + 4;
  }
  document.getElementById("btn").innerHTML = num;
}
  
  
  function atclk() {
    num++;
    document.getElementById("btn").innerHTML = num;
  }
  
  
function upgrade() {
  if(_upg == false && num >= 100) {
  _upg = true;
  num = num - 100;
    document.getElementById("btn").innerHTML = num;
    document.getElementById("upg").innerHTML = "Bought";
  }
  
}
  
  
  function upgrade2() {
    if(num >= 400) {
      _clk = true;
      num = num - 400;
      setInterval(atclk, 1000);
    document.getElementById("btn").innerHTML = num;
    }
  }
  
  
  function upgrade3() {
    if(num >= 1400) {
      _clk2 = true;
      num = num - 1400;
      setInterval(atclk, 250);
      spau++;
    document.getElementById("btn").innerHTML = num;
    }
  }
  
  
  function multiAndAutoclk() {
    if(_sp == false && spau >= 10) {
      _sp = true;
      setInterval(atclk, 50);
        document.getElementById("upgUt").innerHTML = "Bought";
    }
  }