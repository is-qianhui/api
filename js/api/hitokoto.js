
fetch("https://v1.hitokoto.cn?c=a&c=d&c=e&c=f&c=j&c=k") 
  .then(response => response.json())
  .then(data => {
    const hitokoto = document.querySelector('#hitokoto_api');
    hitokoto.innerText = data.hitokoto;
  })
  .catch(console.error)

// <p id="hitokoto_api"></p>