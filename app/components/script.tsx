'use client'
import react, { useEffect } from 'react';
import Script from 'next/script';
import Matter, { Body } from 'matter-js';

function Home() {
    useEffect(() => {
        const canvas = document.querySelector("#wrapper-canvas") as HTMLCanvasElement | null; // Type assertion with null check

        if (!canvas) {
            console.error("Canvas element not found!");
            return;
        }

        const dimensions = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        // Your Matter.js logic here
        const runMatter = () => {
            const { Engine, Render, Runner, World, Bodies, Mouse, Events, Common, Body } = Matter;

            const engine = Engine.create();
            engine.world.gravity.y = 0;
            engine.world.gravity.x = 0;

            const render = Render.create({
                element: canvas,
                engine: engine,
                options: {
                    width: dimensions.width,
                    height: dimensions.height,
                    wireframes: false,
                    background: "transparent",
                },
            });

            if (render.canvas) {
                Runner.run(engine);
                Render.run(render);
            } else {
                console.warn("Render canvas not found!");
                return;
            }

            const runner = Runner.create();
            const world = engine.world;

            const attractiveBody = Bodies.circle(
                render.options.width || dimensions.width / 2, 
                render.options.height || dimensions.height / 2,
                Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
                {
                    isStatic: true,
                    render: {
                        fillStyle: `#000`,
                    },
                    plugin: {
                        attractors: [
                            (bodyA: Body, bodyB: Body) => {
                                return {
                                    x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                                    y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                                };
                            },
                        ],
                    },
                }
            );

            World.add(world, attractiveBody);

            for (let i = 0; i < 60; i += 1) {
                let x = Common.random(0, render.options.width);
                let y = Common.random(0, render.options.height);
                let s = Common.random(4, 60);
                let body = Bodies.polygon(x, y, Common.random(3, 6), s, {
                    render: {
                        fillStyle: "#222222",
                    },
                });

                World.add(world, body);
            }

            const mouse = Mouse.create(render.canvas);
            Events.on(engine, "afterUpdate", function () {
                if (!mouse.position.x) return;
                Body.translate(attractiveBody, {
                    x: (mouse.position.x - attractiveBody.position.x) * 0.12,
                    y: (mouse.position.y - attractiveBody.position.y) * 0.12,
                });
            });

            Runner.run(runner, engine);
            Render.run(render);
        };

        runMatter();

        const setWindowSize = () => {
            dimensions.width = window.innerWidth;
            dimensions.height = window.innerHeight;
            canvas.width = dimensions.width;
            canvas.height = dimensions.height;
        };

        window.addEventListener('resize', setWindowSize);
        setWindowSize(); // Set initial size

        return () => {
            window.removeEventListener('resize', setWindowSize);
        };
    }, []);

    return (
        <div id='wrapper-canvas' className='absolute inset-0'>
            <Script 
                src="https://code.jquery.com/jquery-3.6.0.js" 
                strategy="afterInteractive"
            />
            <Script 
                src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.min.js" 
                strategy="afterInteractive"
            />
            <Script 
                src="https://cdn.jsdelivr.net/npm/matter-wrap@0.2.0/build/matter-wrap.min.js" 
                strategy="afterInteractive"
            />
            <Script 
                src="https://cdn.jsdelivr.net/npm/matter-attractors@0.1.6/build/matter-attractors.min.js" 
                strategy="afterInteractive"
            />
        </div>
    );
}

export default Home;
