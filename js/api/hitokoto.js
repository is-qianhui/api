
fetch("https://v1.hitokoto.cn?c=a&c=d&c=e&c=f&c=j&c=k") 
  .then(response => response.json())
  .then(data => {
    const hitokoto_api = document.querySelector('#hitokoto_api');
    hitokoto_api.innerText = data.hitokoto;
  })
  .catch(console.error)

// <p id="hitokoto_api"></p>