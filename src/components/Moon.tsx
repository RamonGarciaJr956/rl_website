"use client";

import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from 'react';
import { DDSLoader } from "three-stdlib";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

function Scene() {
    const myMesh = useRef<THREE.Mesh>(null)

    useFrame(({ clock }) => {
        if (myMesh.current) {
            myMesh.current.rotation.y = -clock.getElapsedTime() / 8
        }
    })

    const gltf = useLoader(GLTFLoader, '/moon/scene.gltf')
    return (
        <mesh ref={myMesh} scale={[2.75, 2.75, 2.75]}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}

export default function Moon() {
    return (
        <main className="w-1/2 h-full">
            <Canvas>
                <Suspense fallback={null}>
                    <Scene />
                    <pointLight position={[3, 3, 5]} intensity={30.0} />
                    <ambientLight intensity={0.1} />
                </Suspense>
            </Canvas>
        </main>
    );
}