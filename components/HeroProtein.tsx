"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ── Procedural protein backbone ─────────────────────────────────── */
function generateBackbone(count = 38, spread = 3.2) {
  const positions: THREE.Vector3[] = [];
  let pos = new THREE.Vector3(0, 0, 0);
  const dir = new THREE.Vector3(1, 0.4, 0.3).normalize();

  for (let i = 0; i < count; i++) {
    positions.push(pos.clone());
    // Add a controlled random walk to look like a protein chain
    const turn = new THREE.Vector3(
      (Math.random() - 0.5) * 0.9,
      (Math.random() - 0.5) * 0.9,
      (Math.random() - 0.5) * 0.9
    );
    dir.add(turn).normalize();
    pos = pos.clone().addScaledVector(dir, spread / count * 3.5);
  }

  // Centre the chain
  const centre = positions
    .reduce((acc, p) => acc.add(p), new THREE.Vector3())
    .divideScalar(positions.length);
  return positions.map((p) => p.sub(centre));
}

/* ── Bond cylinder between two points ────────────────────────────── */
function Bond({
  start,
  end,
  color = "#06b6d4",
  opacity = 0.35,
  radius = 0.045,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color?: string;
  opacity?: number;
  radius?: number;
}) {
  const mid = start.clone().lerp(end, 0.5);
  const length = start.distanceTo(end);
  const direction = end.clone().sub(start).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction
  );
  return (
    <mesh position={mid} quaternion={quaternion}>
      <cylinderGeometry args={[radius, radius, length, 6]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        roughness={0.4}
        metalness={0.2}
      />
    </mesh>
  );
}

/* ── Main protein group ───────────────────────────────────────────── */
function ProteinMolecule() {
  const groupRef = useRef<THREE.Group>(null!);
  const backbone = useMemo(() => generateBackbone(36, 3.2), []);

  // Side-chain positions: every 3rd residue gets a short branch
  const sideChains = useMemo(() =>
    backbone
      .filter((_, i) => i % 3 === 1)
      .map((pos) => {
        const offset = new THREE.Vector3(
          (Math.random() - 0.5) * 1.1,
          (Math.random() - 0.5) * 1.1,
          (Math.random() - 0.5) * 1.1
        );
        return { base: pos, tip: pos.clone().add(offset) };
      }),
    [backbone]
  );

  // Slow continuous rotation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.18;
    groupRef.current.rotation.x = Math.sin(t * 0.07) * 0.18;
  });

  return (
    <group ref={groupRef}>
      {/* Backbone bonds */}
      {backbone.slice(0, -1).map((pos, i) => (
        <Bond key={`bb-${i}`} start={pos} end={backbone[i + 1]} opacity={0.45} />
      ))}

      {/* Side chain bonds */}
      {sideChains.map((sc, i) => (
        <Bond
          key={`sc-${i}`}
          start={sc.base}
          end={sc.tip}
          color="#7dd3fc"
          opacity={0.3}
          radius={0.03}
        />
      ))}

      {/* Backbone residue spheres */}
      {backbone.map((pos, i) => {
        const isKey = i % 5 === 0;
        return (
          <mesh key={`res-${i}`} position={pos}>
            <sphereGeometry args={[isKey ? 0.18 : 0.12, 12, 12]} />
            <meshStandardMaterial
              color={isKey ? "#06b6d4" : "#38bdf8"}
              transparent
              opacity={isKey ? 0.85 : 0.55}
              roughness={0.3}
              metalness={0.4}
              emissive={isKey ? "#06b6d4" : "#0ea5e9"}
              emissiveIntensity={isKey ? 0.4 : 0.15}
            />
          </mesh>
        );
      })}

      {/* Side chain tip spheres */}
      {sideChains.map((sc, i) => (
        <mesh key={`sct-${i}`} position={sc.tip}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial
            color="#bae6fd"
            transparent
            opacity={0.5}
            roughness={0.5}
            emissive="#7dd3fc"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Canvas wrapper (exported) ────────────────────────────────────── */
export default function HeroProtein() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#06b6d4" />
        <pointLight position={[-5, -3, -4]} intensity={0.6} color="#0ea5e9" />
        <pointLight position={[0, -5, 3]} intensity={0.4} color="#ffffff" />

        {/* Floating + rotating protein */}
        <Float speed={1.2} rotationIntensity={0} floatIntensity={0.6}>
          <ProteinMolecule />
        </Float>
      </Canvas>
    </div>
  );
}
