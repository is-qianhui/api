const mountBody=(url)=> {
    const mountBodyScript = document.createElement('script');
    mountBodyScript.type = 'text/javascript';
    mountBodyScript.src = url;
    document.body.appendChild(mountBodyScript);
  }
   