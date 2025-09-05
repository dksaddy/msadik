"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesComponent({ theme }) {
  const particlesInit = useCallback(async (engine) => {
    // Load only lightweight bundle (works in Next.js)
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={theme === "light" ? lightParticlesConfig : darkParticlesConfig}
      />
    </div>
  );
}

const lightParticlesConfig = {
  background: { color: "transparent" },
  fpsLimit: 60,
  particles: {
    number: { value: 50, density: { enable: true, area: 800 } },
    color: { value: "#1e293b" },
    links: {
      enable: true,
      distance: 150,
      color: "#1e293b",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 1, outModes: { default: "out" } },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } },
  },
  detectRetina: true,
};

const darkParticlesConfig = {
  ...lightParticlesConfig,
  particles: {
    ...lightParticlesConfig.particles,
    color: { value: "#ffffff" },
    links: { ...lightParticlesConfig.particles.links, color: "#ffffff" },
  },
};
