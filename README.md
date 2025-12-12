# 📱 Job Search App (React Native)

Rapid API를 활용하여 실시간 구직 정보를 검색하고 조회할 수 있는 React Native 애플리케이션입니다.
Expo Router를 기반으로 파일 시스템 라우팅을 구현하였으며, 국내 사용자를 위해 **전면 한글화(Localization)** 작업을 수행하였습니다.

## ✨ 주요 기능 (Key Features)

### 1. 기본 기능 (Core Features)
- **홈 화면 (Home):**
  - **개인화된 환영 메시지:** "안녕하세요 허은채님" 및 시간/상황에 맞는 인사말 제공
  - **직무 검색:** 키워드 입력 및 검색 기능 (한글 Placeholder 적용)
- **채용 공고 리스트:**
  - **Popular Jobs:** 가로 스크롤 가능한 인기 채용 리스트
  - **Nearby Jobs:** 세로 리스트 형태의 주변 채용 정보
- **상세 페이지 (Job Details):**
  - 채용 공고의 상세 내용 탭 구현 및 데이터 연동
  - 회사 정보, 로고, 구글 검색 링크 연결

### 2. 추가 구현 기능 (Custom Features) 🚀
기본 과제 외에 추가로 직접 구현한 기능들입니다:

- **🍔 카테고리 메뉴 (Category Menu):**
  - **한글-영어 매핑 로직:** 화면에는 **'정규직', '파트타임', '계약직'**으로 표시되지만, 실제 API 검색은 영어 코드(`Full-time` 등)로 요청되도록 매핑 로직 구현
  - **앱 정보 하단 고정:** 앱 버전 및 개발자 정보(Developed by 허은채)를 메뉴 하단에 배치

- **🔍 검색 결과 페이지 개선 (Search Results):**
  - **동적 타이틀 변환:** 검색된 키워드가 영어(Full-time 등)일 경우, 자동으로 **한글(정규직)**로 변환하여 헤더에 표시
  - **UI 개선:** "Job Opportunities" 문구를 "채용 공고"로 변경하여 가독성 향상

- **👤 마이 페이지 (My Profile):**
  - 메인 화면 우측 상단 프로필 버튼을 통해 접근 가능
  - 사용자 프로필 이미지(커스텀 스타일링) 및 정보 표시 화면 구현

- **📤 공유하기 (Share):**
  - 채용 상세 페이지 우측 상단 공유 버튼 활성화 (`Share` API 연동)

### 3. 🎨 UI/UX 및 한글화 (Localization & UX)
사용자 편의성을 위해 세부적인 디테일을 개선하였습니다:

- **전면 한글화 적용:**
  - **헤더 & 메뉴:** `Header` 제거 및 모든 메뉴명을 한국어로 변경
  - **상세 페이지 탭:** `About` → **소개**, `Qualifications` → **자격요건**, `Responsibilities` → **업무내용**으로 변경
  - **직무 소개:** "About the job" → "상세 직무 소개"로 변경하여 가독성 강화

- **데이터 가독성 최적화:**
  - **리스트 정렬 수정:** 자격요건/업무내용 리스트의 불렛 포인트와 텍스트가 어긋나지 않도록 레이아웃(`flex-row`) 수정
  - **가독성 스타일:** 줄 간격(Line Height) 확대 및 눈이 편안한 색상(`#444262`) 적용

- **데이터 안정성 확보 (Mock Data):**
  - API 데이터가 비어있을 경우, 빈 화면 대신 미리 준비된 **기본 예시 데이터**가 표시되도록 예외 처리 구현

## 🛠️ 기술 스택 (Tech Stack)
- **Framework:** React Native / Expo
- **Routing:** Expo Router (v2)
- **Language:** JavaScript
- **API:** Rapid API (JSearch)
- **Styling:** React Native StyleSheet

## 🚀 실행 방법 (How to run)

1. 패키지 설치
   ```bash
   npm install
2. 앱 실행
    Bash
    npx expo start