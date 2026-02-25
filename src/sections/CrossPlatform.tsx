import { Suspense, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useScroll } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, ContactShadows, OrbitControls } from '@react-three/drei';
import { Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { content } from '../constants/content';
import { Section } from '../components/Section';
import { Mesh, MeshStandardMaterial, Scene, Group } from 'three';

/**
 * Java Steve 3D Model
 * - Mouse drag rotation via OrbitControls
 * - Scroll-based rotation
 * - Gentle float animation
 */
function JavaModel({ scrollY, mouseX, mouseY }: { scrollY: number; mouseX: number; mouseY: number }) {
  const { scene } = useGLTF('/models/minecraft_steve_character_for_java.glb');
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    if (scene instanceof Scene) scene.background = null;
    scene.traverse((child) => {
      if (child.name === 'Object_2') child.visible = false;
      if (child instanceof Mesh) {
        const mat = child.material as MeshStandardMaterial;
        if (mat) { mat.transparent = true; mat.depthWrite = true; }
      }
    });
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      // Smooth lerp to target rotation
      const targetY = scrollY * 0.003 + mouseX * 0.3;
      const targetX = mouseY * 0.15;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.08;
    }
  });

  return (
    <Float speed={1.2} floatIntensity={0.3} rotationIntensity={0}>
      <group ref={groupRef}>
        <primitive object={scene} scale={2} position={[0, -20, 0]} />
      </group>
      <ContactShadows position={[0, -21, 0]} opacity={0.4} scale={20} blur={2.5} color="#9333ea" />
    </Float>
  );
}

/**
 * Bedrock Steve 3D Model
 * - Mouse drag rotation via OrbitControls
 * - Scroll-based rotation
 * - Gentle float animation
 */
function BedrockModel({ scrollY, mouseX, mouseY }: { scrollY: number; mouseX: number; mouseY: number }) {
  const { scene } = useGLTF('/models/minecraft_steve_for_bedrock.glb');
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    if (scene instanceof Scene) scene.background = null;
    scene.traverse((child) => {
      if (child.name === 'back' || child.name === 'Object_9') child.visible = false;
      if (child instanceof Mesh) {
        const mat = child.material as MeshStandardMaterial;
        if (mat) { mat.transparent = true; mat.depthWrite = true; }
      }
    });
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      const targetY = -scrollY * 0.003 + mouseX * 0.3;
      const targetX = mouseY * 0.15;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.08;
    }
  });

  return (
    <Float speed={1.2} floatIntensity={0.3} rotationIntensity={0}>
      <group ref={groupRef}>
        <primitive object={scene} scale={2} position={[0, -20, 0]} />
      </group>
      <ContactShadows position={[0, -21, 0]} opacity={0.4} scale={20} blur={2.5} color="#7c3aed" />
    </Float>
  );
}

/**
 * CrossPlatform Section
 * - No clipping box (overflow visible, large canvas)
 * - OrbitControls for drag + scroll rotate
 * - Mouse parallax tracking
 */
export function CrossPlatform() {
  const t = content;

  // Scroll-based rotation relative to section
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    // 0 = section just entered viewport from bottom
    // 0.5 = section fully centered (face camera = 0 deg)
    // 1 = section leaving viewport from top
    return scrollYProgress.on('change', (v) => {
      setScrollVal((v - 0.5) * 600);
    });
  }, [scrollYProgress]);

  // Mouse tracking for 3D model rotation
  const [mouse3D, setMouse3D] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 15);
    mouseY.set(y * 10);
    // Pass normalized -0.5 to 0.5 values to 3D models
    setMouse3D({ x, y });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setMouse3D({ x: 0, y: 0 });
  };

  const canvasStyle = {
    background: 'transparent',
    overflow: 'visible',
  } as React.CSSProperties;

  return (
    <Section id="platform" background="secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-600/10 border border-purple-600/30 rounded-full mb-6">
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold uppercase tracking-wider">Crossplay Ready</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              {t.crossPlatform.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
            {t.crossPlatform.subtitle}
          </p>
        </motion.div>

        {/* Characters Side by Side */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >

          {/* Java Edition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
            style={{ rotateY: springX, rotateX: springY }}
          >
            {/* 3D Character - no clipping box */}
            <div
              className="w-full"
              style={{
                height: '520px',
                background: 'transparent',
                overflow: 'visible',
                cursor: 'grab',
              }}
            >
              <Canvas
                camera={{ position: [0, 0, 50], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
                style={canvasStyle}
              >
                <ambientLight intensity={0.8} />
                <pointLight position={[4, 6, 4]} intensity={2.5} color="#a855f7" />
                <pointLight position={[-4, 2, -2]} intensity={1.2} color="#7c3aed" />
                <spotLight position={[0, 10, 2]} intensity={2} color="#ffffff" angle={0.3} />
                <Suspense fallback={null}>
                  <JavaModel scrollY={scrollVal} mouseX={mouse3D.x} mouseY={mouse3D.y} />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={false}
                  rotateSpeed={0.6}
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 1.8}
                />
              </Canvas>
            </div>

            {/* Text below character */}
            <div className="text-center w-full -mt-8">
              <div className="inline-block px-4 py-1.5 bg-purple-600/20 border border-purple-600/40 rounded-full mb-4">
                <span className="text-purple-300 text-sm font-semibold tracking-wider uppercase">Java Edition</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-6">
                {t.crossPlatform.java.title}
              </h3>
              <ul className="space-y-3 text-left max-w-xs mx-auto">
                {t.crossPlatform.java.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-neutral-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" strokeWidth={2} />
                    <span className="text-base md:text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bedrock Edition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
            style={{ rotateY: springX, rotateX: springY }}
          >
            {/* 3D Character - no clipping box */}
            <div
              className="w-full"
              style={{
                height: '520px',
                background: 'transparent',
                overflow: 'visible',
                cursor: 'grab',
              }}
            >
              <Canvas
                camera={{ position: [0, 0, 50], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
                style={canvasStyle}
              >
                <ambientLight intensity={0.8} />
                <pointLight position={[4, 6, 4]} intensity={2.5} color="#8b5cf6" />
                <pointLight position={[-4, 2, -2]} intensity={1.2} color="#6d28d9" />
                <spotLight position={[0, 10, 2]} intensity={2} color="#ffffff" angle={0.3} />
                <Suspense fallback={null}>
                  <BedrockModel scrollY={scrollVal} mouseX={mouse3D.x} mouseY={mouse3D.y} />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={false}
                  rotateSpeed={0.6}
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 1.8}
                />
              </Canvas>
            </div>

            {/* Text below character */}
            <div className="text-center w-full -mt-8">
              <div className="inline-block px-4 py-1.5 bg-violet-600/20 border border-violet-600/40 rounded-full mb-4">
                <span className="text-violet-300 text-sm font-semibold tracking-wider uppercase">Bedrock Edition</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-6">
                {t.crossPlatform.bedrock.title}
              </h3>
              <ul className="space-y-3 text-left max-w-xs mx-auto">
                {t.crossPlatform.bedrock.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-neutral-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" strokeWidth={2} />
                    <span className="text-base md:text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Crossplay Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600/10 border border-purple-600/30 rounded-full">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold text-lg">{t.crossPlatform.note}</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// Preload models
useGLTF.preload('/models/minecraft_steve_character_for_java.glb');
useGLTF.preload('/models/minecraft_steve_for_bedrock.glb');
