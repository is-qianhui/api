
fetch("https://api.shadiao.pro/du") 
  .then(response => response.json())
  .then(data => {
    const dujitang_api = document.querySelector('#dujitang_api');
    dujitang_api.innerText = data.data.text;
  })
  .catch(console.error)

//  <p id="dujitang_api"></p>