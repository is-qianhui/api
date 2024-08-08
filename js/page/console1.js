const colorA="#fff";const colorB="#000";
const author = '钱辉'; const autograph = "一支穿云箭，千军万马来相见！";
console.log(
    `\n %c ${author} %c ${autograph}`,
     `color:${colorA};background:${colorB};padding:5px 0;border: 1px solid ${colorB};`,
      `color:${colorB};background:${colorA};padding:5px 0;border: 1px solid ${colorB};`
);