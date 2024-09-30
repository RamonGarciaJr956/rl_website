"use client";

import React, { Suspense, useMemo, useRef, useEffect } from 'react';
import * as THREE from "three";
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { DDSLoader } from "three-stdlib";
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { PerspectiveCamera, Stars } from '@react-three/drei';

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene: React.FC = () => {
  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap
  ] = useLoader(TextureLoader, [
    'Fabric004_1K-PNG_Color.png',
    'Fabric004_1K-PNG_Displacement.png',
    'Fabric004_1K-PNG_NormalGL.png',
    'Fabric004_1K-PNG_Roughness.png'
  ]);

  const textures = [colorMap, displacementMap, normalMap, roughnessMap];

  useMemo(() => {
    textures.forEach(texture => {
      if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(5, 5);
      }
    });
  }, [textures]);

  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: colorMap,
      displacementMap: displacementMap,
      displacementScale: 0.05,
      normalMap: normalMap,
      roughnessMap: roughnessMap,
    });
  }, [colorMap, displacementMap, normalMap, roughnessMap]);

  const obj = useLoader(OBJLoader, "Rocket Model.obj");

  const modelRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useMemo(() => {
    if (obj) {
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = material;
        }
      });
    }
  }, [obj, material]);

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);

      camera.position.set(center.x, center.y, center.z + 30);
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  if (!obj) return null;

  return (
    <mesh ref={modelRef} rotation={new THREE.Euler(-Math.PI / 2, 0, (Math.PI / 180) * 45)}>
      <primitive object={obj} scale={0.43}/>
    </mesh>
  );
};

export default function HomePage() {
  return (
    <main className='h-full w-full'>
      <Canvas orthographic={true}>
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 0, 5]} intensity={0.25} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Stars />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </main>
  );
}