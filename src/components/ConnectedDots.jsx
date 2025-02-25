import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const ConnectedDots = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let dots = [];
      const numDots = 15; // Numero di punti
      const maxDistance = 700; // Distanza massima per collegare i punti
      const ledColor = p.color(0, 191, 255); // Colore blu elettrico (#00BFFF)
      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0); // Posiziona il canvas in alto a sinistra
        canvas.style('z-index', '-1'); // Manda il canvas dietro al contenuto
        for (let i = 0; i < numDots; i++) {
          dots.push(new Dot(p.random(p.width), p.random(p.height)));
        }
      };

      p.draw = () => {
        p.clear(); // Rimuove lo sfondo nero per far vedere il contenuto sotto
        dots.forEach((dot) => {
          dot.move();
          dot.display();
          dot.connect(dots, maxDistance, ledColor);
          
        });
      };

      class Dot {
        constructor(x, y) {
          this.pos = p.createVector(x, y);
          this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
          this.size = 5;
        }

        move() {
          this.pos.add(this.vel);
          if (this.pos.x < 0 || this.pos.x > p.width) this.vel.x *= -1;
          if (this.pos.y < 0 || this.pos.y > p.height) this.vel.y *= -1;
        }

        display() {
          p.fill(255); // Colore dei punti (bianco)
          p.noStroke();
          p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
        }

        connect(dots, maxDistance) {
          dots.forEach((dot) => {
            const d = p.dist(this.pos.x, this.pos.y, dot.pos.x, dot.pos.y);
            if (d < maxDistance) {
              p.stroke(ledColor, -d); // Colore delle linee (bianco con opacità variabile)
              p.strokeWeight(1)
              p.line(this.pos.x, this.pos.y, dot.pos.x, dot.pos.y);
            }
          });

          // Collegamento con il mouse
          const mouseDist = p.dist(this.pos.x, this.pos.y, p.mouseX, p.mouseY);
          if (mouseDist < maxDistance) {
            p.stroke(255, 255 - mouseDist);
            p.line(this.pos.x, this.pos.y, p.mouseX, p.mouseY);
          }
        }
      }
    };

    const p5Instance = new p5(sketch, sketchRef.current);
    return () => p5Instance.remove();
  }, []);

  return <div ref={sketchRef} className="absolute inset-0 z-0"></div>;
};

export default ConnectedDots;