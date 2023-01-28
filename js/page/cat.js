const catCss = `
    #maomao {
        position: fixed;
        bottom: 40px;
        right: -5px;
        width: 57px;
        height: 70px;
        background: url(https://cdn.staticaly.com/gh/quinhua/api@main/svg/other/cat.svg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: background .3s;
    }
    #maomao:hover {
        background-position: 60px 50%;
    }
`;
const catJs = `    <script>
var randomNum = function(minNum, maxNum) {
       switch(arguments.length){
           case 1:
               return parseInt(Math.random() * minNum + 1, 10);
               break;
           case 2:
               return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
               break;
           default:
               return 0;
               break;
       }
   }
   var duoMaomao = function () {
       var maomao = $('#maomao');
       maomao.css('bottom', randomNum(5, 80) + 'vh');
   }
</script>`;

function loadJS(url, callback) {
    var script = document.createElement('script')
    var fn = callback || function () { };
    script.type = 'text/javascript';
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == 'loaded' || script.readyState == 'complete') {
                script.onreadystatechange = null;
                fn();
            }
        };
    } else {
        script.onload = function () {
            fn();
        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
const loadStyle = (style) => {
    var dataStyle = document.createElement('style');
    dataStyle.type = 'text/css';
    dataStyle.appendChild(document.createTextNode(style));
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(dataStyle)
}
!(function () {
    loadJS("https://cdn.staticaly.com/libs/jquery/3.6.3/jquery.min.js", () => {
        var username = '钱辉'; var usertext = "一支穿云箭，千军万马来相见！";
        var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
        var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
        console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
        loadStyle(catCss);
        $("body").append(`<div id="maomao" onMouseOut="duoMaomao()"></div>${catJs}`);
    })
})();
