(function () {
    var username = '钱辉'; var usertext = "一支穿云箭，千军万马来相见！";
    var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
    var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
    console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
    var a_idx = 0;
    window.onclick = function (event) {
        var a = new Array("+1");

        var heart = document.createElement("b");
        heart.onselectstart = new Function('event.returnValue=false');

        document.body.appendChild(heart).innerHTML = a[a_idx];
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed;left:-100%;";

        var f = 16,
            x = event.clientX - f / 2,
            y = event.clientY - f,
            c = randomColor(),
            a = 1,
            s = 1.2;
        var timer = setInterval(function () {
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                    c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                    s + ");";

                y--;
                a -= 0.016;
                s += 0.002;
            }
        }, 15)

    }
    function randomColor() {

        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
            .random() * 255)) + ")";

    }
}());