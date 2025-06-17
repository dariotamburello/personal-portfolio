import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

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
          value: "#0d1117", // Fondo oscuro similar al sitio proporcionado
        },
      },
      particles: {
        number: {
          value: 140, // Aumentar ligeramente la cantidad de partículas
          density: {
            enable: true,
            area: 2000, // Densidad ajustada
          },
        },
        color: {
          value: "#ffffff", // Color blanco para las partículas
        },
        shape: {
          type: "circle", // Forma circular
        },
        opacity: {
          value: 0.3, // Opacidad ajustada
          random: true,
        },
        size: {
          value: 2, // Tamaño ajustado
          random: true,
        },
        move: {
          enable: true,
          speed: 1.5, // Aumentar ligeramente la velocidad
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        links: {
          enable: true,
          distance: 150, // Distancia entre partículas conectadas
          color: "#ffffff",
          opacity: 0.2, // Hacer las líneas más tenues
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Cambiar el efecto a "grab"
          },
          onClick: {
            enable: true,
            mode: "push", // Agregar partículas al hacer clic
          },
        },
        modes: {
          grab: {
            distance: 140, // Distancia del efecto grab
            links: {
              opacity: 1, // Aumentar la opacidad de las líneas al hacer grab para que brillen más
            },
          },
          push: {
            quantity: 4, // Cantidad de partículas añadidas al hacer clic
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
