# 📱 Job Search App (React Native)

Rapid API를 활용하여 실시간 구직 정보를 검색하고 조회할 수 있는 React Native 애플리케이션입니다.
Expo Router를 기반으로 파일 시스템 라우팅을 구현하였습니다.

## ✨ 주요 기능 (Key Features)

### 1. 기본 기능 (Core Features)
- **홈 화면 (Home):** 사용자 환영 메시지 및 직무 검색 바 제공
- **인기 채용 공고 (Popular Jobs):** 가로 스크롤 가능한 인기 채용 리스트
- **주변 채용 공고 (Nearby Jobs):** 세로 리스트 형태의 주변 채용 정보
- **상세 페이지 (Job Details):**
  - 채용 공고의 상세 내용 (About, Qualifications, Responsibilities) 탭 구현
  - 회사 정보 및 로고 표시

### 2. 추가 구현 기능 (Custom Features) 🚀
기본 과제 외에 추가로 직접 구현한 기능들입니다:

- **👤 마이 페이지 (My Profile):**
  - 메인 화면 우측 상단 프로필 버튼을 통해 접근
  - 사용자 프로필 이미지(커스텀 스타일링) 및 정보 표시 화면 구현

- **🍔 카테고리 메뉴 (Category Menu):**
  - 좌측 상단 햄버거 버튼(≡) 클릭 시 메뉴 페이지 이동
  - **채용 형태 필터:** `Full-time`, `Part-time`, `Contractor` 버튼 제공 (클릭 시 해당 키워드 검색 결과로 즉시 이동)
  - **앱 정보 하단 고정:** 앱 버전, 개발자 정보(Developed by 허은채)를 화면 하단에 배치하여 UI 완성도 향상

- **📤 공유하기 (Share):**
  - 채용 상세 페이지 우측 상단 공유 버튼 활성화
  - `Share` API를 사용하여 외부 앱(카카오톡, 메시지 등)으로 링크 공유 가능

- **👀 더보기 연결 (Show All):**
  - 메인 리스트의 'Show all' 버튼 클릭 시, 해당 카테고리(Popular/Nearby)에 맞는 검색 결과 페이지로 이동하도록 라우팅 연결

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