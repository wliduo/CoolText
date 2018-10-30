// 检测是否是手机查看
var sUserAgent = navigator.userAgent.toLowerCase();
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
var bIsMidp = sUserAgent.match(/midp/i) == "midp";
var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
var bIsAndroid = sUserAgent.match(/android/i) == "android";
var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    // 跳转移动端页面
    // alert("检测到是手机预览，横屏或者电脑体验更佳哦∩_∩");
    var demo = document.getElementsByClassName("demo-text")[0];
    demo.style.fontSize = "2em";
    var container = document.getElementsByClassName("container")[0];
    container.style.paddingLeft = "10px";
    container.style.paddingRight = "0px";
}

var shine = new Shine(document.getElementById('headline'));

function handleMouseMove(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  // console.log(event.clientX + ":" + event.clientY);
  shine.draw();
}

window.addEventListener('mousemove', handleMouseMove, false);

var x = 0;
var y = 200;
var maxX = screen.width;
var maxY = screen.height;
var order = 0;

function getXY(){
  if(x >= screen.width){
    order = 1;
  }
  if(x <= 0){
    order = 0
  }
  if(order == 0){
    x = x + 100;
  }
  if(order == 1){
    x = x - 100;
  }
  // console.log(x + ":" + y);
}

function drawShow() {
  getXY();
  shine.light.position.x = x;
  shine.light.position.y = y;
  shine.draw();
}

var timer = setInterval("drawShow()" ,100);

/**
 * 获取最小到最大的随机数
 */
function getRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return(Min + Math.round(Rand * Range));
}