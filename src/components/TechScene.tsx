import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleSphere() {
  const ref = useRef<THREE.Points>(null!)

  const positions = useMemo(() => {
    const count = 2200
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.2 + (Math.random() - 0.5) * 0.6
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.06
    ref.current.rotation.x += delta * 0.02
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
      />
    </Points>
  )
}

function DNA() {
  const groupRef = useRef<THREE.Group>(null!)

  const { strand1, strand2, rungs } = useMemo(() => {
    const s1: THREE.Vector3[] = []
    const s2: THREE.Vector3[] = []
    const r: Array<[THREE.Vector3, THREE.Vector3]> = []
    const steps = 60
    for (let i = 0; i < steps; i++) {
      const t = (i / steps) * Math.PI * 4
      const y = (i / steps) * 4 - 2
      const p1 = new THREE.Vector3(Math.cos(t) * 0.9, y, Math.sin(t) * 0.9)
      const p2 = new THREE.Vector3(Math.cos(t + Math.PI) * 0.9, y, Math.sin(t + Math.PI) * 0.9)
      s1.push(p1)
      s2.push(p2)
      if (i % 5 === 0) r.push([p1.clone(), p2.clone()])
    }
    return { strand1: s1, strand2: s2, rungs: r }
  }, [])

  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.25
  })

  return (
    <group ref={groupRef} position={[1.8, 0, 0]}>
      {strand1.map((p, i) =>
        i < strand1.length - 1 ? (
          <Line key={`s1-${i}`} start={p} end={strand1[i + 1]} color="#3b82f6" />
        ) : null
      )}
      {strand2.map((p, i) =>
        i < strand2.length - 1 ? (
          <Line key={`s2-${i}`} start={p} end={strand2[i + 1]} color="#06b6d4" />
        ) : null
      )}
      {rungs.map(([a, b], i) => (
        <Line key={`r-${i}`} start={a} end={b} color="#8b5cf6" opacity={0.5} />
      ))}
    </group>
  )
}

function Line({ start, end, color, opacity = 0.9 }: {
  start: THREE.Vector3; end: THREE.Vector3; color: string; opacity?: number
}) {
  const obj = useMemo(() => {
    const geom = new THREE.BufferGeometry().setFromPoints([start, end])
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity })
    return new THREE.Line(geom, mat)
  }, [start, end, color, opacity])

  return <primitive object={obj} />
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.3
    ref.current.rotation.z += delta * 0.15
  })
  return (
    <mesh ref={ref} position={[-1.8, 0.5, -1]}>
      <torusGeometry args={[1, 0.02, 8, 60]} />
      <meshBasicMaterial color="#06b6d4" transparent opacity={0.25} />
    </mesh>
  )
}

function FloatingRing2() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.2
    ref.current.rotation.x += delta * 0.1
  })
  return (
    <mesh ref={ref} position={[0, -1, -2]}>
      <torusGeometry args={[1.5, 0.015, 8, 80]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} />
    </mesh>
  )
}

export default function TechScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
      <ParticleSphere />
      <DNA />
      <FloatingRing />
      <FloatingRing2 />
    </Canvas>
  )
}
