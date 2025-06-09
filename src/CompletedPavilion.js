import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Environment } from '@react-three/drei';
import * as THREE from 'three';

// --- 정자 구조를 위한 상수 ---
const pillarHeight = 3;
const pillarRadius = 0.3;
const pillarCapitalHeight = 0.15; // 기둥머리 높이
const pillarCapitalRadius = pillarRadius * 1.2; // 기둥머리 반지름
const beamDimensions = { length: 3.6, height: 0.25, depth: 0.25 }; // 보의 크기
const pillarLayoutRadius = 3.6; // 기둥이 배치될 원의 반지름 (HanokScene의 islandRadius * 0.3 값과 동일)
const phase1TotalPillars = 6; // 기둥의 총 개수
const groundLevel = -0.5; // 바닥의 Y 레벨 (HanokScene과 일치)

// --- 재질 정의 ---
const builtPillarMaterial = new THREE.MeshStandardMaterial({
  color: "#8B4513", // 기둥 및 기둥머리용 갈색 목재
  roughness: 0.7,
  metalness: 0.1,
});

const builtBeamMaterial = new THREE.MeshStandardMaterial({
  color: "#966F33", // 보를 위한 약간 다른 갈색 목재
  roughness: 0.65,
  metalness: 0.05,
});

// --- 정자 모델을 생성하는 내부 컴포넌트 ---
function PavilionModel() {
  // 기둥 위치 계산
  const pillarPositions = Array.from({ length: phase1TotalPillars }).map((_, index) => {
    const angle = (Math.PI * 2 / phase1TotalPillars) * index;
    return { x: Math.cos(angle) * pillarLayoutRadius, z: Math.sin(angle) * pillarLayoutRadius };
  });

  // 보 위치 및 회전 계산
  const beamData = [];
  for (let i = 0; i < phase1TotalPillars; i++) {
    const p1 = pillarPositions[i];
    const p2 = pillarPositions[(i + 1) % phase1TotalPillars]; // 다음 기둥 (마지막은 처음으로 연결)

    const beamX = (p1.x + p2.x) / 2; // 두 기둥의 X 중간점
    const beamZ = (p1.z + p2.z) / 2; // 두 기둥의 Z 중간점
    // 보의 Y 위치: 바닥 + 기둥 높이 + 기둥머리 높이 + 보 높이의 절반
    const beamY = groundLevel + pillarHeight + pillarCapitalHeight + beamDimensions.height / 2;
    const rotationY = Math.atan2(p2.z - p1.z, p2.x - p1.x); // 두 기둥을 잇는 각도

    beamData.push({
      id: `completed-beam-${i}`,
      position: new THREE.Vector3(beamX, beamY, beamZ),
      rotationY: rotationY,
    });
  }

  return (
    <group position={[0, 0, 0]}> {/* 정자 모델의 기준 위치 */}
      {/* 기둥 및 기둥머리 렌더링 */}
      {pillarPositions.map((pPos, index) => (
        <group key={`completed-pillar-group-${index}`} position={[pPos.x, 0, pPos.z]}>
          {/* 기둥 */}
          <mesh
            position={[0, groundLevel + pillarHeight / 2, 0]}
            material={builtPillarMaterial}
            castShadow
            receiveShadow
          >
            <cylinderGeometry args={[pillarRadius, pillarRadius, pillarHeight, 16]} />
          </mesh>
          {/* 기둥머리 (원판형) */}
          <mesh
            position={[0, groundLevel + pillarHeight + pillarCapitalHeight / 2, 0]}
            material={builtPillarMaterial}
            castShadow
            receiveShadow
          >
            <cylinderGeometry args={[pillarCapitalRadius, pillarCapitalRadius, pillarCapitalHeight, 16]} />
          </mesh>
        </group>
      ))}

      {/* 보 렌더링 */}
      {beamData.map(beam => (
        <mesh
          key={beam.id}
          position={beam.position}
          rotation={[0, beam.rotationY, 0]} // Y축 기준으로 회전
          material={builtBeamMaterial}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[beamDimensions.length, beamDimensions.height, beamDimensions.depth]} />
        </mesh>
      ))}
    </group>
  );
}

// --- 메인으로 export할 씬 컴포넌트 ---
export default function CompletedPavilion() { // 파일 이름과 동일하게 export
  const cameraInitialPosition = [0, 5, 15]; // 카메라 초기 위치 (정자를 잘 볼 수 있는 위치)

  return (
    <Canvas
      shadows // 그림자 활성화
      camera={{ position: cameraInitialPosition, fov: 50 }}
      style={{ background: '#B0E0E6' }} // Canvas 배경색 (연한 하늘색)
    >
      <Suspense fallback={null}> {/* 로딩 중 표시할 내용 (간단히 null) */}
        {/* 환경 및 조명 설정 */}
        <Sky sunPosition={[100, 20, 100]} inclination={0.2} azimuth={0.25} /> {/* 하늘 */}
        <Environment preset="park" /> {/* 주변 환경 반사광 */}
        <ambientLight intensity={0.7} /> {/* 전체적으로 은은한 빛 */}
        <directionalLight // 그림자를 만드는 주 조명
          castShadow
          position={[40, 60, 40]} // 조명 위치
          intensity={1.2}
          shadow-mapSize-width={2048} // 그림자 맵 크기
          shadow-mapSize-height={2048}
          shadow-camera-far={150}
          shadow-camera-left={-25}
          shadow-camera-right={25}
          shadow-camera-top={25}
          shadow-camera-bottom={-25}
        />

        {/* 바닥면 */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, groundLevel - 0.01, 0]}>
          <circleGeometry args={[15, 64]} /> {/* 정자 주변의 원형 바닥 */}
          <meshStandardMaterial color="#6B8E23" /> {/* 올리브색 비슷한 바닥 */}
        </mesh>
        
        {/* 완성된 정자 모델 렌더링 */}
        <PavilionModel />

        {/* 카메라 컨트롤 (마우스로 화면 조작 가능) */}
        <OrbitControls target={[0, groundLevel + pillarHeight / 2, 0]} />
      </Suspense>
    </Canvas>
  );
}
