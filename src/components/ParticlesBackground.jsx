import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#0d1117",
        },
      },
      particles: {
        number: {
          value: 140,
          density: {
            enable: true,
            area: 2000, // density
          },
        },
        color: {
          value: "#ffffff", // particles color
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3,
          random: true,
        },
        size: {
          value: 2,
          random: true,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.2, // lines opacity
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 1,
            },
          },
          push: {
            quantity: 4, // qty particles add on click
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default ParticlesBackground;
