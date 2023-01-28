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

!(function () {
  loadJS("https://cdn.staticaly.com/libs/jquery/3.6.3/jquery.min.js", () => {
    var username = '钱辉'; var usertext = "一支穿云箭，千军万马来相见！";
    var userurl = "https://github.com/quinhua";
    var consoleA = "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;";
    var consoleB = "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;";
    console.log(`\n %c ${username} %c ${usertext}`, consoleA, consoleB);
    console.log(`\n %c ${username} %c ${userurl}`, consoleA, consoleB);
    xingxing();
  })
})();

const xingxing = () => {
  $("body").append($("<span class='js-cursor-container'></span>"));
  var possibleColors = ["#D61C59", "#E7D84B", "#1B8798", "#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"]
  var width = window.innerWidth;
  var height = window.innerHeight;
  var cursor = { x: width / 2, y: width / 2 };
  var particles = [];

  function init() {
    bindEvents();
    loop();
  }
  function bindEvents() {
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize(e) {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  function onMouseMove(e) {
    cursor.x = e.clientX;
    cursor.y = e.clientY;

    addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
  }

  function addParticle(x, y, color) {
    var particle = new Particle();
    particle.init(x, y, color);
    particles.push(particle);
  }

  function updateParticles() {

    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
    }
    for (var i = particles.length - 1; i >= 0; i--) {
      if (particles[i].lifeSpan < 0) {
        particles[i].die();
        particles.splice(i, 1);
      }
    }

  }

  function loop() {
    requestAnimationFrame(loop);
    updateParticles();
  }

  function Particle() {

    this.character = "*";
    this.lifeSpan = 120;
    this.initialStyles = {
      "position": "fixed",
      "display": "inline-block",
      "top": "0px",
      "left": "0px",
      "pointerEvents": "none",
      "touch-action": "none",
      "z-index": "10000000",
      "fontSize": "25px",
      "will-change": "transform"
    };

    this.init = function (x, y, color) {

      this.velocity = {
        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
        y: 1
      };

      this.position = { x: x + 10, y: y + 10 };
      this.initialStyles.color = color;

      this.element = document.createElement('span');
      this.element.innerHTML = this.character;
      applyProperties(this.element, this.initialStyles);
      this.update();

      document.querySelector('.js-cursor-container').appendChild(this.element);
    };

    this.update = function () {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.lifeSpan--;

      this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
    }

    this.die = function () {
      this.element.parentNode.removeChild(this.element);
    }

  }

  function applyProperties(target, properties) {
    for (var key in properties) {
      target.style[key] = properties[key];
    }
  }

  if (!('ontouchstart' in window || navigator.msMaxTouchPoints)) init();
};
