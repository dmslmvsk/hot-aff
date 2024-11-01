import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000",
                },
            },
            fpsLimit: 120,
            particles: {
                number: {
                    value: 130,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#FFFFFF",
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#FFFFFF",
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 2.3,
                    direction: "none",
                    outModes: {
                        default: "bounce",
                    },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                    random: true,
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (init) {
        return (
            <Particles
                id="particles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default ParticleBackground;
