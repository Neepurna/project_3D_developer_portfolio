import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import * as random from "maath/random/dist/maath-random.esm";
import { BufferGeometry, BufferAttribute, Vector3 } from "three";

const Stars = (props) => {
  const ref = useRef();
  const [sphere, setSphere] = useState([]);

  useEffect(() => {
    const generateSphere = () => {
      const positions = [];
      for (let i = 0; i < 5000; i++) {
        const point = random.inSphere(new Vector3(), 1.2);
        positions.push(new Vector3(point.x, point.y, point.z));
      }
      setSphere(positions);
    };
    generateSphere();
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref} {...props}>
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={sphere.length}
            array={new Float32Array(sphere.length * 3)}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          transparent
          vertexShader={`
            void main() {
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = 2.0;
            }
          `}
          fragmentShader={`
            void main() {
              gl_FragColor = vec4(1.0, 0.45, 0.78, 0.8);
            }
          `}
        />
      </points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
