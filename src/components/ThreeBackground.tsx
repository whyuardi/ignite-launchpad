"use client";

import { useEffect, useRef, useState } from "react";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    let animationId: number;

    const init = async () => {
      const THREE = await import("three");
      if (!mounted || !containerRef.current) return;

      const container = containerRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);

      // Point lights
      const pointLight1 = new THREE.PointLight(0xffb800, 2, 15);
      pointLight1.position.set(3, 2, 3);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0xff6b00, 1.5, 12);
      pointLight2.position.set(-3, -1, 2);
      scene.add(pointLight2);

      const pointLight3 = new THREE.PointLight(0x00c896, 0.8, 10);
      pointLight3.position.set(0, 3, -2);
      scene.add(pointLight3);

      // === Central icosahedron wireframe ===
      const icoGeometry = new THREE.IcosahedronGeometry(1.2, 1);
      const icoWireframe = new THREE.WireframeGeometry(icoGeometry);
      const icoLine = new THREE.LineSegments(
        icoWireframe,
        new THREE.LineBasicMaterial({ color: 0xffb800, opacity: 0.35, transparent: true })
      );
      scene.add(icoLine);

      // Solid inner icosahedron
      const icoSolid = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.9, 0),
        new THREE.MeshPhysicalMaterial({
          color: 0xffb800,
          metalness: 0.8,
          roughness: 0.2,
          transparent: true,
          opacity: 0.15,
          wireframe: false,
        })
      );
      scene.add(icoSolid);

      // === Orbiting torus rings ===
      const torusGroup = new THREE.Group();
      scene.add(torusGroup);

      const torus1 = new THREE.Mesh(
        new THREE.TorusGeometry(2.0, 0.02, 8, 64),
        new THREE.MeshBasicMaterial({ color: 0xffb800, opacity: 0.25, transparent: true })
      );
      torus1.rotation.x = Math.PI / 2.5;
      torusGroup.add(torus1);

      const torus2 = new THREE.Mesh(
        new THREE.TorusGeometry(2.3, 0.015, 8, 64),
        new THREE.MeshBasicMaterial({ color: 0xff6b00, opacity: 0.15, transparent: true })
      );
      torus2.rotation.x = Math.PI / 3;
      torus2.rotation.y = Math.PI / 4;
      torusGroup.add(torus2);

      const torus3 = new THREE.Mesh(
        new THREE.TorusGeometry(2.6, 0.01, 8, 64),
        new THREE.MeshBasicMaterial({ color: 0x00c896, opacity: 0.1, transparent: true })
      );
      torus3.rotation.x = Math.PI / 4;
      torus3.rotation.y = -Math.PI / 3;
      torusGroup.add(torus3);

      // === Small orbiting spheres (nodes on rings) ===
      const nodePositions = [
        { angle: 0, radius: 2.0, color: 0xffb800, size: 0.06, ring: 0 },
        { angle: Math.PI * 0.6, radius: 2.0, color: 0xffb800, size: 0.05, ring: 0 },
        { angle: Math.PI * 1.2, radius: 2.0, color: 0xffb800, size: 0.04, ring: 0 },
        { angle: 0.5, radius: 2.3, color: 0xff6b00, size: 0.05, ring: 1 },
        { angle: Math.PI * 1.1, radius: 2.3, color: 0xff6b00, size: 0.04, ring: 1 },
        { angle: 0.8, radius: 2.6, color: 0x00c896, size: 0.04, ring: 2 },
        { angle: Math.PI * 1.5, radius: 2.6, color: 0x00c896, size: 0.03, ring: 2 },
      ];

      const nodeMeshes = nodePositions.map((n) => {
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(n.size, 16, 16),
          new THREE.MeshBasicMaterial({ color: n.color })
        );
        scene.add(mesh);
        return { mesh, ...n };
      });

      // === Particle field ===
      const particleCount = 120;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 16;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

        const color = new THREE.Color().setHSL(0.1 + Math.random() * 0.08, 1, 0.5 + Math.random() * 0.3);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.03,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // === Connection lines between particles (subtle) ===
      const lineGeo = new THREE.BufferGeometry();
      const linePositions = new Float32Array(60 * 6); // 60 lines max
      lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({ color: 0xffb800, opacity: 0.06, transparent: true });
      const connectionLines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(connectionLines);

      // === Mouse interaction ===
      const mouse = { x: 0, y: 0 };
      const onMouseMove = (e: MouseEvent) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener("mousemove", onMouseMove);

      // === Resize ===
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      // === Animation loop ===
      const clock = new THREE.Clock();

      const animate = () => {
        const t = clock.getElapsedTime();

        // Rotate icosahedron
        icoLine.rotation.y = t * 0.15;
        icoLine.rotation.x = t * 0.08;
        icoSolid.rotation.y = t * 0.15;
        icoSolid.rotation.x = t * 0.08;

        // Breathe effect on icosahedron
        const breathe = 1 + Math.sin(t * 0.5) * 0.05;
        icoLine.scale.setScalar(breathe);
        icoSolid.scale.setScalar(breathe);

        // Rotate torus rings
        torusGroup.rotation.z = t * 0.05;
        torus1.rotation.z = t * 0.1;
        torus2.rotation.z = -t * 0.08;
        torus3.rotation.z = t * 0.06;

        // Move orbiting nodes
        nodeMeshes.forEach((n) => {
          const speed = 0.3 + n.ring * 0.1;
          const angle = n.angle + t * speed;
          const tilt = [Math.PI / 2.5, Math.PI / 3, Math.PI / 4][n.ring];
          n.mesh.position.x = Math.cos(angle) * n.radius * Math.cos(tilt);
          n.mesh.position.y = Math.sin(angle) * n.radius;
          n.mesh.position.z = Math.cos(angle) * n.radius * Math.sin(tilt);
        });

        // Update particle connections
        const posArray = particleGeo.attributes.position.array as Float32Array;
        let lineIdx = 0;
        const lineArray = lineGeo.attributes.position.array as Float32Array;

        for (let i = 0; i < Math.min(particleCount, 40); i++) {
          for (let j = i + 1; j < Math.min(particleCount, 40); j++) {
            const dx = posArray[i * 3] - posArray[j * 3];
            const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
            const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < 2.5 && lineIdx < 60) {
              lineArray[lineIdx * 6] = posArray[i * 3];
              lineArray[lineIdx * 6 + 1] = posArray[i * 3 + 1];
              lineArray[lineIdx * 6 + 2] = posArray[i * 3 + 2];
              lineArray[lineIdx * 6 + 3] = posArray[j * 3];
              lineArray[lineIdx * 6 + 4] = posArray[j * 3 + 1];
              lineArray[lineIdx * 6 + 5] = posArray[j * 3 + 2];
              lineIdx++;
            }
          }
        }
        // Clear remaining lines
        for (let i = lineIdx * 6; i < 60 * 6; i++) lineArray[i] = 0;
        lineGeo.attributes.position.needsUpdate = true;

        // Subtle particle drift
        particles.rotation.y = t * 0.02;
        particles.rotation.x = t * 0.01;

        // Camera follows mouse slightly
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
        camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      };

      setLoaded(true);
      animate();
    };

    init();

    return () => {
      mounted = false;
      cancelAnimationFrame(animationId);
      if (containerRef.current) {
        const canvas = containerRef.current.querySelector("canvas");
        if (canvas) containerRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" ref={containerRef}>
      {/* CSS fallback while Three.js loads */}
      {!loaded && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] animate-pulse"
            style={{ background: "var(--color-accent)" }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-5 blur-[100px]"
            style={{ background: "var(--color-chain-eth)" }}
          />
        </div>
      )}
    </div>
  );
}
