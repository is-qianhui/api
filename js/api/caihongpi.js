
fetch("https://api.shadiao.pro/chp") 
  .then(response => response.json())
  .then(data => {
    const caihongpi_api = document.querySelector('#caihongpi_api');
    caihongpi_api.innerText = data.data.text;
  })
  .catch(console.error)

//  <p id="caihongpi_api"></p>