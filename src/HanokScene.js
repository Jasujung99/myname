import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// 연못 컴포넌트 - 물 텍스처 적용
function Pond() {
  const meshRef = useRef();
  
  // 물 텍스처 로드 (예시 URL - 실제로는 작동하는 텍스처 URL 필요)
  const waterTexture = useLoader(THREE.TextureLoader, 'https://threejs.org/examples/textures/water.jpg');
  waterTexture.wrapS = waterTexture.wrapT = THREE.RepeatWrapping;
  waterTexture.repeat.set(2, 2);
  
  // 물결 애니메이션
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[3, 0.01, 3]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[2, 32]} />
      <meshStandardMaterial 
        map={waterTexture}
        transparent={true}
        opacity={0.8}
        color="#4a90e2"
      />
    </mesh>
  );
}

// 바닥 컴포넌트
function Ground() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#888888" />
    </mesh>
  );
}

// 메인 한옥 장면 컴포넌트
function HanokScene() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#87CEEB' }}>
      {/* UI 텍스트 */}
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '20px', 
        color: 'white', 
        fontSize: '24px',
        fontWeight: 'bold',
        zIndex: 100,
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        1. 기초 놓기
      </div>
      
      {/* 카메라 조작 안내 */}
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '20px', 
        color: 'white', 
        fontSize: '14px',
        zIndex: 100,
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
      }}>
        마우스 드래그: 회전 | 휠: 줌 | Shift+드래그: 이동
      </div>

      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        {/* 조명 설정 */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow
        />
        
        {/* OrbitControls: 마우스로 카메라 자유 조작 
            - 마우스 드래그로 회전
            - 휠로 줌 인/아웃
            - Shift+드래그로 이동 */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={50}
        />
        
        {/* 바닥 (회색 평면, 10x10) */}
        <Ground />
        
        {/* 연못 (경복궁 스타일, 파란 원형 평면, 반지름 2)
            Texture: THREE.TextureLoader로 이미지 매핑하여 물 질감 표현 */}
        <Pond />
        
        {/* 격자 도우미 (건축 가이드용) */}
        <gridHelper args={[20, 20, '#444444', '#666666']} />
      </Canvas>
    </div>
  );
}

export default HanokScene;
