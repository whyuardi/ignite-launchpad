"use client";

import { useEffect, useRef, useState } from "react";

interface ThreeBackgroundProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

export function ThreeBackground({ className = "", intensity = "medium" }: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check WebGL support first
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) {
      setWebglFailed(true);
      return;
    }

    let animationId: number;
    let renderer: any;

    try {
      const THREE = require("three");

      const container = containerRef.current;
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.set(0, 0, 50);

      // Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Config based on intensity
      const config = {
        subtle: { torusScale: 8, particleCount: 400, rotationSpeed: 0.00015, wireframeOpacity: 0.05 },
        medium: { torusScale: 12, particleCount: 800, rotationSpeed: 0.00025, wireframeOpacity: 0.08 },
        strong: { torusScale: 16, particleCount: 1200, rotationSpeed: 0.00035, wireframeOpacity: 0.12 },
      }[intensity];

      // Colors - Amber/Gold theme
      const accentColor = new THREE.Color(0xf0c040);
      const accentStrong = new THREE.Color(0xffd700);
      const secondaryColor = new THREE.Color(0x627eea);

      // Torus Knot Geometry
      const torusGeometry = new THREE.TorusKnotGeometry(config.torusScale, 3, 128, 32, 2, 3);

      // Main material - metallic gold
      const mainMaterial = new THREE.MeshPhysicalMaterial({
        color: accentColor,
        metalness: 0.85,
        roughness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        reflectivity: 1.0,
        envMapIntensity: 1.5,
      });

      // Wireframe material
      const wireframeGeometry = new THREE.WireframeGeometry(torusGeometry);
      const wireframeMaterial = new THREE.LineBasicMaterial({
        color: accentStrong,
        transparent: true,
        opacity: config.wireframeOpacity,
      });

      // Torus knot meshes
      const torusKnot = new THREE.Mesh(torusGeometry, mainMaterial);
      const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
      wireframe.scale.copy(torusKnot.scale);
      wireframe.position.copy(torusKnot.position);
      wireframe.rotation.copy(torusKnot.rotation);

      const knotGroup = new THREE.Group();
      knotGroup.add(torusKnot);
      knotGroup.add(wireframe);
      scene.add(knotGroup);

      // Core glow sphere
      const coreGeometry = new THREE.SphereGeometry(config.torusScale * 0.4, 32, 32);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: accentColor,
        transparent: true,
        opacity: 0.15,
        depthWrite: false,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      scene.add(core);

      // Particle system
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = config.particleCount;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const radius = config.torusScale * (1.5 + Math.random() * 2.5);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);

        const mixFactor = Math.random();
        const color = new THREE.Color().lerpColors(accentColor, secondaryColor, mixFactor);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        velocities[i * 3] = (Math.random() - 0.5) * 0.0005;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.0005;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.0005;
      }

      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 1,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      const pointLight1 = new THREE.PointLight(accentColor, 1.5, 100);
      pointLight1.position.set(30, 30, 30);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(secondaryColor, 1, 100);
      pointLight2.position.set(-30, -20, 20);
      scene.add(pointLight2);

      // Mouse interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      };

      container.addEventListener("mousemove", handleMouseMove, { passive: true });

      // Scroll parallax
      let scrollY = 0;
      const handleScroll = () => {
        scrollY = window.scrollY;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      // Animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate);

        targetX += (mouseX - targetX) * 0.03;
        targetY += (mouseY - targetY) * 0.03;

        knotGroup.rotation.x += config.rotationSpeed * 30;
        knotGroup.rotation.y += config.rotationSpeed * 50;
        knotGroup.rotation.z += config.rotationSpeed * 20;

        knotGroup.rotation.x += targetY * 0.05;
        knotGroup.rotation.y += targetX * 0.05;

        const time = Date.now() * 0.001;
        core.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05);
        coreMaterial.opacity = 0.1 + Math.sin(time * 0.7) * 0.05;

        const positionsArray = particleGeometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positionsArray[i * 3] += velocities[i * 3];
          positionsArray[i * 3 + 1] += velocities[i * 3 + 1];
          positionsArray[i * 3 + 2] += velocities[i * 3 + 2];

          const dist = Math.sqrt(
            positionsArray[i * 3] ** 2 +
              positionsArray[i * 3 + 1] ** 2 +
              positionsArray[i * 3 + 2] ** 2
          );
          if (dist > config.torusScale * 4) {
            const radius = config.torusScale * (1.5 + Math.random() * 2.5);
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            positionsArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positionsArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positionsArray[i * 3 + 2] = radius * Math.cos(phi);
          }
        }
        particleGeometry.attributes.position.needsUpdate = true;
        particles.rotation.y += 0.00005;

        camera.position.y = scrollY * 0.002;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };

      animate();

      // Resize handler
      const handleResize = () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
        container.removeEventListener("mousemove", handleMouseMove);
        renderer.dispose();
        torusGeometry.dispose();
        wireframeGeometry.dispose();
        mainMaterial.dispose();
        wireframeMaterial.dispose();
        coreGeometry.dispose();
        coreMaterial.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
      };
    } catch (err) {
      console.warn("Three.js failed, using CSS fallback:", err);
      setWebglFailed(true);
    }
  }, [intensity]);

  // CSS Fallback when WebGL not available
  if (webglFailed) {
    return (
      <div className={`${className} fixed inset-0 z-0 overflow-hidden`} aria-hidden="true">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
            style={{
              background: "radial-gradient(circle, #f0c040 0%, transparent 70%)",
              top: "10%",
              left: "20%",
              animation: "float1 20s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
            style={{
              background: "radial-gradient(circle, #627eea 0%, transparent 70%)",
              bottom: "20%",
              right: "15%",
              animation: "float2 25s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
            style={{
              background: "radial-gradient(circle, #ffd700 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "float3 18s ease-in-out infinite",
            }}
          />
        </div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(240, 192, 64, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 192, 64, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <style jsx>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -40px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-40px, 30px) scale(1.15); }
            66% { transform: translate(20px, -20px) scale(0.85); }
          }
          @keyframes float3 {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.2); }
          }
        `}</style>
      </div>
    );
  }

  if (!mounted) {
    return <div className={`${className} fixed inset-0 z-0`} aria-hidden="true" />;
  }

  return (
    <div
      ref={containerRef}
      className={`${className} fixed inset-0 z-0 pointer-events-none`}
      aria-hidden="true"
      style={{ willChange: "transform" }}
    />
  );
}
