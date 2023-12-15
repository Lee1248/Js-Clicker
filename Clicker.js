    var num = 0;
    var _upg = false;
    let _upgCounter = 0;
    var _clk = false;
    var spau = 0;
    var _sp = false;
  
function myFunction() {
  num++;
    m1++;
    m2++;
    document.getElementById("_s1").innerHTML ="Clicked times: " + m1;
  if(_upg == true) {
    num++;
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
      _upgCounter++;
  num = num - 100;
    document.getElementById("btn").innerHTML = num;
    document.getElementById("upg").innerHTML = "Bought";
      document.getElementById("_s2").innerHTML = "Upgraded times: " + _upgCounter;
  }
  
}
  
  
  function upgrade2() {
    if(num >= 400) {
      _clk = true;
        _upgCounter++;
      num = num - 400;
      setInterval(atclk, 1000);
    document.getElementById("btn").innerHTML = num;
        document.getElementById("_s2").innerHTML = "Upgraded times: " + _upgCounter;
    }
  }
  
  
  function upgrade3() {
    if(num >= 1400) {
      _clk2 = true;
        _upgCounter++;
      num = num - 1400;
      setInterval(atclk, 250);
      spau++;
    document.getElementById("btn").innerHTML = num;
        document.getElementById("_s2").innerHTML = "Upgraded times: " + _upgCounter;
    }
  }
  
  
  function multiAndAutoclk() {
    if(_sp == false && spau >= 10) {
      _sp = true;
        _upgCounter++;
      setInterval(atclk, 50);
        document.getElementById("upgUt").innerHTML = "Bought";
        document.getElementById("_s2").innerHTML = "Upgraded times: " + _upgCounter;
    }
  }