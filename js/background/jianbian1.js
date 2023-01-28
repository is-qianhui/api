var username = '钱辉'; var usertext = "一支穿云箭，千军万马来相见！";
var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const loadStyle = (style) => {
    var dataStyle = document.createElement('style');
    dataStyle.type = 'text/css';
    dataStyle.appendChild(document.createTextNode(style));
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(dataStyle)
}
loadStyle(`
      body{
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-image: linear-gradient(to left top, ${randomHex()} 0%, ${randomHex()} 100%);
        background-image: linear-gradient(to right top,${randomHex()}, ${randomHex()},
        ${randomHex()}, ${randomHex()}, ${randomHex()}, ${randomHex()}, ${randomHex()},
         ${randomHex()}, ${randomHex()}, ${randomHex()}, ${randomHex()}, ${randomHex()});
      }
`)

