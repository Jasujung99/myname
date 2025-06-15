# 🎨 Animation Lab

**2D 캔버스와 Vega를 활용한 인터랙티브 교육용 애니메이션 실험실**

수학, 물리, 예술, 생물학의 복잡한 개념들을 직관적이고 아름다운 시각적 애니메이션으로 탐험해보세요.

![Animation Lab Banner](https://img.shields.io/badge/Animation-Lab-purple?style=for-the-badge&logo=javascript&logoColor=white)
![HTML5 Canvas](https://img.shields.io/badge/HTML5-Canvas-orange?style=for-the-badge&logo=html5&logoColor=white)
![Vega](https://img.shields.io/badge/Vega-Visualization-blue?style=for-the-badge&logo=plotly&logoColor=white)

## ✨ 주요 특징

- 🎯 **실시간 인터랙션**: Vega 컨트롤로 매개변수를 조정하며 즉시 결과 확인
- 🎨 **고품질 렌더링**: HTML5 Canvas로 부드럽고 정밀한 애니메이션
- 📊 **데이터 시각화**: 복잡한 수식과 알고리즘을 직관적으로 이해
- 💾 **내보내기 기능**: GIF, 비디오, PNG 형태로 결과물 저장
- 📱 **반응형 디자인**: 다양한 화면 크기에서 최적화된 경험

## 🚀 빠른 시작

### 1. 프로젝트 복제
```bash
git clone https://github.com/your-username/myname.git
cd myname/animation-lab
```

### 2. 로컬 서버 실행
```bash
# Python 3가 설치된 경우
python -m http.server 8000

# 또는 Node.js가 설치된 경우
npx http-server

# 또는 VS Code Live Server 확장 사용
```

### 3. 브라우저에서 실험 시작
```
http://localhost:8000/animation-lab/
```

## 🧪 현재 구현된 실험들

### 🎨 예술 (Art)
- **[생성 예술](animation-lab/experiments/art/generative-art.html)** - 알고리즘 기반 유기적 패턴 생성
  - 6가지 아티스틱 색상 팔레트 (석양, 바다, 숲, 우주, 파스텔, 단색)
  - 실시간 매개변수 조정 (채도, 대비, 색상 흐름, 노이즈 레벨)
  - **GIF 내보내기 (30fps, 2초)** 및 비디오 녹화
  - Vega 오버레이 데이터 시각화

### 📐 수학 (Mathematics)
- **[프랙탈 생성기](animation-lab/experiments/math/fractal-generator.html)** - 만델브로트 집합 탐험
  - 실시간 줌 및 팬 기능
  - 색상 및 반복 횟수 조정
  - 고해상도 렌더링

### 🧬 생물학 (Biology)
- **[세포 자동자](animation-lab/experiments/biology/cellular-automata.html)** - 콘웨이의 생명 게임
  - 사용자 정의 규칙 설정
  - 패턴 분석 및 관찰

## 🛠️ 기술 스택

| 기술 | 용도 | 버전 |
|------|------|------|
| **HTML5 Canvas** | 고성능 2D 그래픽 렌더링 | - |
| **Vega/Vega-Lite** | 데이터 기반 인터랙티브 컨트롤 | 5.x |
| **JavaScript (ES6+)** | 애니메이션 로직 및 수학 계산 | - |
| **GIF.js** | 고품질 GIF 생성 | 0.2.0 |
| **MediaRecorder API** | 실시간 비디오 녹화 | - |
| **CSS3** | 반응형 UI 스타일링 | - |

## 📚 프로젝트 구조

```
animation-lab/
├── 📄 README.md                    # 프로젝트 소개
├── 📋 MASTER_PLAN.md              # 상세 실험 계획서
├── 🏠 index.html                  # 메인 대시보드
├── 🧪 experiments/
│   ├── 🎨 art/
│   │   ├── generative-art.html    ✅ 생성 예술
│   │   └── gif.worker.js          # GIF 처리 워커
│   ├── 📐 math/
│   │   ├── fractal-generator.html ✅ 프랙탈 생성기
│   │   ├── parametric-curves.html 🚧 매개변수 곡선
│   │   └── trigonometric-waves.html 🚧 삼각함수 시각화
│   ├── ⚛️ physics/
│   │   ├── particle-system.html   🚧 입자 시스템
│   │   └── wave-mechanics.html    🚧 파동 역학
│   ├── 🧬 biology/
│   │   ├── cellular-automata.html ✅ 세포 자동자
│   │   └── predator-prey.html     🚧 포식자-피식자 모델
│   └── 🔬 algorithms/
│       └── pathfinding-a-star.html 🚧 경로 탐색
└── 📁 assets/
    ├── css/
    ├── js/
    └── images/
```

**범례**: ✅ 완료 | 🚧 개발 예정

## 🎯 사용 사례

### 👨‍🏫 교육자를 위해
- 복잡한 수학/물리 개념을 직관적으로 설명
- 학생들의 참여도를 높이는 인터랙티브 학습 도구
- 실시간 매개변수 조정으로 가정-검증 학습 지원

### 👨‍💻 개발자를 위해
- 알고리즘 시각화를 통한 이해도 향상
- 창의적 코딩 및 생성 예술 탐험
- Canvas 및 데이터 시각화 기술 학습

### 🎨 아티스트를 위해
- 수학적 아름다움을 예술로 표현
- 매개변수 기반 생성 예술 창작
- 고품질 애니메이션 작품 제작 및 내보내기

## 🌟 주요 기능

### 🎛️ 실시간 컨트롤
- **슬라이더**: 연속적인 값 조정 (속도, 크기, 색상 등)
- **드롭다운**: 이산적인 선택 (팔레트, 모드, 알고리즘 등)
- **체크박스**: 기능 on/off (격자, 궤적, 애니메이션 등)
- **버튼**: 액션 실행 (리셋, 저장, 내보내기 등)

### 💾 내보내기 옵션
- **GIF**: 30fps, 2초 루프 애니메이션
- **비디오**: WebM/MP4 형식 고품질 녹화
- **이미지**: PNG 형식 고해상도 스냅샷
- **데이터**: JSON 형식 매개변수 설정 저장

## 🤝 기여 방법

새로운 실험을 추가하거나 기존 실험을 개선하고 싶으시나요?

1. **Fork** 이 저장소
2. **새 브랜치** 생성: `git checkout -b feature/new-experiment`
3. **변경사항 커밋**: `git commit -m 'Add: 새로운 실험 추가'`
4. **브랜치 푸시**: `git push origin feature/new-experiment`
5. **Pull Request** 생성

## 📖 문서

- **[마스터 플랜](animation-lab/MASTER_PLAN.md)**: 전체 실험 목록과 구현 계획

## 📜 라이선스

이 프로젝트는 **MIT 라이선스** 하에 배포됩니다.

## 🙏 감사의 말

- **[Vega-Lite](https://vega.github.io/vega-lite/)** - 훌륭한 데이터 시각화 문법
- **[GIF.js](https://jnordberg.github.io/gif.js/)** - 브라우저 기반 GIF 생성
- **[MDN Web Docs](https://developer.mozilla.org/)** - Canvas API 문서 및 예제

---

**애니메이션으로 세상을 탐험하세요! 🚀✨**
