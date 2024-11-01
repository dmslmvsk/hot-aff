import Particles from "@tsparticles/react";
import { useMemo } from "react";
import { Container, IOptions, RecursivePartial } from "tsparticles-engine";

const ParticlesComponent: React.FC = () => {
    const particlesLoaded = (container: Container) => {
        console.log(container);
    };

    const options: RecursivePartial<IOptions> = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000", // Background color
                },
            },
            fpsLimit: 120, // FPS limit
            particles: {
                number: {
                    value: 100, // Number of particles
                    density: {
                        enable: true,
                        value_area: 800, // Area for density
                    },
                },
                color: {
                    value: "#FFFFFF", // Particle color
                },
                links: {
                    enable: true, // Enable links
                    distance: 150, // Maximum distance for linking
                    color: "#FFFFFF", // Link color
                    opacity: 0.4, // Opacity of links
                    width: 1, // Width of links
                },
                move: {
                    enable: true, // Enable movement
                    speed: 1, // Movement speed
                    direction: "none", // Movement direction
                    outModes: {
                        default: "bounce", // Behavior when out of bounds
                    },
                },
                shape: {
                    type: "circle", // Particle shape
                },
                size: {
                    value: { min: 1, max: 3 }, // Particle size
                    random: true, // Randomize particle size
                },
            },
            detectRetina: true, // Retina optimization
        }),
        []
    );

    return (
        <Particles id="particles" init={particlesLoaded} options={options} />
    );
};

export default ParticlesComponent;
