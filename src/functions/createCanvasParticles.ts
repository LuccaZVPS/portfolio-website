export default function CreateCanvasParticles() {
  const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  let particlesArray: any;
  let mousePosition = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: (canvas.height / 0.5) * (canvas.width / 80),
  };

  let position1 = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: (canvas.height / 75) * (canvas.width / 80),
  };

  window.addEventListener("mousemove", (e) => {
    mousePosition.x = e.x;
    mousePosition.y = e.y;
    position1.x = e.x;
    position1.y = e.y;
  });

  if (window.innerWidth < 1600) {
    position1.radius = (canvas.height / 50) * (canvas.width / 80);
    mousePosition.radius = (canvas.height / 0.001) * (canvas.width / 80);
  }
  if (window.innerWidth < 1200) {
    position1.radius = (canvas.height / 30) * (canvas.width / 80);
    mousePosition.radius = (canvas.height / 0.001) * (canvas.width / -10);
  }

  if (window.innerWidth < 700) {
    position1.radius = (canvas.height / 20) * (canvas.width / 40);
    mousePosition.radius = (canvas.height / 0.001) * (canvas.width / -10);
  }

  class Particle {
    x: number;
    y: number;
    directionX: number;
    directionY: number;
    size: number;
    color: string;
    constructor(
      x: number,
      y: number,
      directionX: number,
      directionY: number,
      size: number,
      color: string
    ) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    draw(): void {
      ctx?.beginPath();
      ctx?.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);

      if (ctx !== null) {
        const dotDistance =
          ((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2) **
          0.5;
        const distanceRatio = dotDistance / (window.innerWidth / 2.5);
        ctx.fillStyle = this.color.slice(0, -1) + `,${1 - distanceRatio})`;

        ctx?.fill();
      }
    }

    update(): void {
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }

      this.x += this.directionX * 0.2;
      this.y += this.directionY * 0.2;
      this.draw();
    }
  }

  function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 5000;

    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 0.2 + 1;
      let x =
        Math.random() * (window.innerWidth - size * 5 - size * 2) + size * 2;
      let y =
        Math.random() * (window.innerHeight - size * 5 - size * 2) + size * 2;
      let directionX = Math.random() * 5 - 2.2;
      let directionY = Math.random() * 5 - 2.2;
      let color = "rgb(81, 162, 233)";

      particlesArray.push(
        new Particle(x, y, directionX, directionY, size, color)
      );
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let index = 0; index < particlesArray.length; index++) {
      particlesArray[0].x = mousePosition.x;
      particlesArray[0].y = mousePosition.y;

      particlesArray[index].update();
    }
    connect();
  }
  function connect() {
    var opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = 0; b < particlesArray.length; b++) {
        let distance =
          (particlesArray[a].x - particlesArray[b].x) *
            (particlesArray[a].x - particlesArray[b].x) +
          (particlesArray[a].y - particlesArray[b].y) *
            (particlesArray[a].y - particlesArray[b].y);

        if (distance < (canvas.width / 7) * (canvas.height / 7)) {
          if (ctx !== null) {
            // prettier-ignore
            opacityValue = 1 - (distance / 9000);

            let p1x = position1.x - particlesArray[a].x;
            let p1y = position1.y - particlesArray[a].y;

            let distanceP1 = Math.sqrt(p1x * p1x + p1y * p1y);

            //if (distanceRatio < 0) {
            //distanceRatio = 0;
            //}

            ctx.strokeStyle = `rgb(81, 162, 233, ${opacityValue / 3})`;

            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            if (distanceP1 < position1.radius + particlesArray[a].size) {
              if (
                position1.x < particlesArray[a].x &&
                particlesArray[a].x < canvas.width - particlesArray[a].size * 10
              ) {
                ctx.stroke();
              }
              if (
                position1.x > particlesArray[a].x &&
                particlesArray[a].x > particlesArray[a].size * 10
              ) {
                ctx.stroke();
              }

              if (
                position1.y < particlesArray[a].y &&
                particlesArray[a].y <
                  canvas.height - particlesArray[a].size * 10
              ) {
                ctx.stroke();
              }
              if (
                position1.y > particlesArray[a].y &&
                particlesArray[a].y > particlesArray[a].size * 10
              ) {
                ctx.stroke();
              }
            }
          }
        }
      }
    }
  }
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  init();
  animate();
}
