"use client";

import React, { Suspense, useMemo } from 'react';
import * as THREE from "three";
import { Canvas, useLoader } from '@react-three/fiber';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { DDSLoader } from "three-stdlib";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const textures = [colorMap, displacementMap, normalMap, roughnessMap];

    // Set texture properties
    useMemo(() => {
        textures.forEach(texture => {
            if (texture) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            }
            if (texture) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                texture.repeat.set(10, 10); // Adjust this value to change the tiling
            }
        });
    }, [textures]);

    const material = useMemo(() => {
        return new THREE.MeshStandardMaterial({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            map: colorMap,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            displacementMap: displacementMap,
            displacementScale: 0.05, // Reduced from 0.1
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            normalMap: normalMap,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            roughnessMap: roughnessMap,
        });
    }, [colorMap, displacementMap, normalMap, roughnessMap]);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const obj = useLoader(OBJLoader, "Rocket Model New Origin.obj");

    useMemo(() => {
        if (obj) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            obj.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = material;
                }
            });
        }
    }, [obj, material]);

    if (!obj) return null;

    return (
        <>
            <mesh
                rotation={new THREE.Euler(-Math.PI / 2, 0, 0)}
                position={new THREE.Vector3(0, -11.3, -10.6)}
            >
                <primitive object={obj as THREE.Object3D} scale={0.4} />
            </mesh>
            <ambientLight intensity={0.5} />
        </>
    );
};

export default function HomePage() {
    return (
        <main className='h-full'>
            <Canvas>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </main>
    );
}