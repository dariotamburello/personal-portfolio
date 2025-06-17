// TestParticles.jsx
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function TestParticles() {
  return (
    <div className="h-screen w-full">
      <Particles
        init={async (engine) => {
          console.log("Engine cargado:", engine); 
          await loadSlim(engine);
        }}
        options={{
          particles: {
            number: { value: 30 },
            color: { value: "#ff0000" }
          }
        }}
      />
    </div>
  );
}