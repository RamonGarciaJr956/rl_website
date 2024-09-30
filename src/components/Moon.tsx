import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import type * as THREE from 'three';

function LowMoon({ scale = 1 }) {
    const groupRef = useRef<THREE.Group>(null);

    const props = useTexture({
        map: '/lroc_color_poles_1k.jpg',
        displacementMap: '/ldem_3_8bit.jpg'
    });

    return (
        <group ref={groupRef} scale={scale} position={[-650, 0, 0]}>
            <mesh>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial {...props} displacementScale={0.005} />
            </mesh>
        </group>
    );
}

function HighMoon({ scale = 1 }) {
    const groupRef = useRef<THREE.Group>(null);

    const props = useTexture({
        map: '/lroc_color_poles_4k.jpg',
        displacementMap: '/ldem_3_8bit.jpg'
    });

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime / 8;
        }
    });

    return (
        <group ref={groupRef} scale={scale} position={[-650, 0, 0]}>
            <mesh>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial {...props} displacementScale={0.005} />
            </mesh>
        </group>
    );
}

const Moon: React.FC = () => {
    const [moonScale] = useState(650);

    return (
        <div className="w-full h-full">
            <Canvas orthographic={true} camera={{ position: [0, 0, 1.5 * moonScale] }}>
                <directionalLight position={[-7, 7, 5]} intensity={2} />
                <ambientLight intensity={0.07} />
                <Suspense fallback={<LowMoon scale={moonScale} />}>
                    <HighMoon scale={moonScale} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Moon;