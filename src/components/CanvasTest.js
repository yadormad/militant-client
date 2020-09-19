import React, {useRef, useEffect} from 'react';

const Canvas = () => {
    const canvasRef = useRef();
    let particleDrawer;
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillRect(0, 0, canvas.width, canvas.height);
        particleDrawer = new ParticleDrawer(context);
        particleDrawer.generateRandomParticles(180);
    });
    return (
        <div onClick={() => {
            particleDrawer && particleDrawer.toggle()
        }} style={{backgroundColor: 'green'}}>
            <canvas ref={canvasRef} width="500" height="500">
                This text is displayed if your browser does not support HTML5 Canvas.
            </canvas>
        </div>
    );
}

export default Canvas;

class Particle {
    constructor (context, radius, x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.context = context;
    }

    draw() {
        // Draw a circle particle on the canvas
        this.context.beginPath();
        this.context.fillStyle = "white";
        // After setting the fill style, draw an arc on the canvas
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2, true); 
        this.context.closePath();
        this.context.fill(); 
    }

    move(vx, vy) {
        this.x = this.x + vx;
        this.y = this.y + vy;
        if (this.x > this.context.canvas.width || this.x < 0) {
            this.x -= 2*vx;
            this.vx = -this.vx;
        }
        if (this.y >= this.context.canvas.height || this.y < 0) {
            this.y -= 2*vy;
            this.vy = -this.vy;
        }
        // this.x = (this.x + vx + this.context.canvas.width) % this.context.canvas.width;
        // this.y = (this.y + vy + this.context.canvas.height) % this.context.canvas.height;
    }

    moveDraw() {
        this.move(this.vx, this.vy);
        this.draw();
    }
}

class LineDrawer {
    constructor(context, radius = 70, thickness = 1) {
        this.context = context;
        this.radius = radius;
        this.thickness = thickness;
    }

    drawLine(x0, y0, x1, y1, opacity) {
        this.context.beginPath();
        this.context.moveTo(x0, y0);
        this.context.lineWidth = this.thickness;
        this.context.lineTo(x1, y1);
        this.context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        this.context.stroke();
    }

    getDistance(particleA, particleB) {
        const xA = particleA.x;
        const yA = particleA.y;
        const xB = particleB.x;
        const yB = particleB.y;
        return Math.sqrt((xA - xB) ** 2 + (yA - yB) ** 2); 
    }

    getLineOpacity(particleA, particleB) {
        const distance = this.getDistance(particleA, particleB);
        return 1 - distance / this.radius;
    }

    drawParticleLines(particles) {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const particleA = particles[i];
                const particleB = particles[j];
                const opacity = this.getLineOpacity(particleA, particleB);
                if (opacity > 0) {
                    this.drawLine(particleA.x, particleA.y, particleB.x, particleB.y, opacity);
                }
            }
        }
    }
}

class MousePushOuter {
    constructor(context, effectRadius = 70, force = -0.1) {
        this.context = context;
        // this.updateMousePos.bind(this);
        context.canvas.addEventListener('mousemove', this.updateMousePos);
        this.effectRadius = effectRadius;
        this.force = force;
    }

    updateMousePos = (evt) => {
        const rect = this.context.canvas.getBoundingClientRect();
        this.mousePos =  {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    pushOut(particle) {
        let pushOutX = particle.x - this.mousePos.x;
        let pushOutY = particle.y - this.mousePos.y;
        let distance = Math.sqrt(pushOutX ** 2 + pushOutY ** 2); 
        let pushForce = 1 - distance / this.effectRadius;
        if (pushForce > 0) {
            pushForce *= this.force;
            // particle.move(pushOutX * pushForce / distance, pushOutY * pushForce / distance)
            particle.vx += pushOutX * pushForce / distance;
            particle.vy += pushOutY * pushForce / distance;
        }
    }
}

class ParticleDrawer {
    constructor(context) {
        this.context = context;
        this.linesDrawer = new LineDrawer(context);
        this.mousePusher = new MousePushOuter(context);
    }

    particles = [];

    erase() {
        // this.context.fillStyle = "black";
        // this.context.strokeStyle = `rgba(255, 255, 255, 1)`;
        //this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    }

    drawFunction() {
        this.erase();
        for (let i = 0; i < this.particles.length; i++) {
            this.mousePusher.pushOut(this.particles[i]);
            this.particles[i].moveDraw();
        }
        this.linesDrawer.drawParticleLines(this.particles);
    }

    toggle() {
        if (this.intervalId) {
            this.stop();
        } else {
            this.start();
        }
    }

    start() {
        this.intervalId = setInterval(() => this.drawFunction(), 30);
    }

    stop() {
        clearInterval(this.intervalId);
        delete this.intervalId;
    }

    generateRandomParticles(number) {
        for (let i = 0; i < number; i++) {
            const radius = Math.random() + 1;
            const vx = Math.random() * 2 - 1;
            const vy = Math.random() * 2 - 1;
            this.particles.push(new Particle(
                this.context,
                radius,
                Math.random() * this.context.canvas.width,
                Math.random() * this.context.canvas.height,
                vx,
                vy,
            ))
        }
    }
}