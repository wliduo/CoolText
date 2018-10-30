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
    var render = document.getElementById("render");
    render.style.fontSize = "2.8em";
    var container = document.getElementsByClassName("container")[0];
    container.style.paddingRight = "0px";
    container.style.paddingLeft = "15px";
}

function start(){
  var box = document.querySelector('.box').textContent,
    rs = document.querySelector('.render'),
    f = [
      'arial','verdana','monospace',
      'consolas','impact','helveltica'
    ],
    c = [
      '1ABC9C','3498DB','34495E','E67E22',
      'E74C3C','2ECC71','E74C3C','95A5A6','D35400'
    ];
  var out = '';
  for (var i = 0; i < box.length; i++) {
    // Random array fonts
    var r = f[Math.floor(Math.random() * f.length)],
        // Random array colors
        sh = c[Math.floor(Math.random() * c.length)],
        st = 'color:#'+sh+
        ';font-family: '+r+
        ';text-shadow:0px 1px 0px #'+sh+',0px 2px 0px #'+sh+',0px 3px 0px #'+sh+',0px 4px 0px #'+sh+', 0px 5px 0px  #'+sh+',0px 6px 0px #'+sh+', 0px 7px 0px #'+sh+',0px 8px 7px #'+sh;
    out += '<span style="'+st+'">'+box[i]+'</span>';
  }  
  rs.innerHTML = out;
}

start();

setInterval("start()",500);