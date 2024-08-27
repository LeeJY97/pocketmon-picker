# 나만의 포켓몬 도감

## 프로젝트 소개

- 포켓몬 데이터를 이용하여 목록을 보거나 도감에 추가 혹은 삭제가 가능합니다.
- 상세페이지에서 포켓몬의 정보를 확인할 수 있습니다.
- 리액트로 만든 간단한 프로젝트 입니다.

## 1. 개발 환경

- Front
  - react, styled-components, rtk, react-router-dom
- 버전 관리
  - Github

## 2. 개발 기술 및 구현 기능

### React

- styled-components
  - 기본 레이아웃 및 스타일에 적용
  - ~~props를 이용해 조건부 스타일링~~
  - css 라이브러리 사용하여 조건부 스타일링
- prop-drilling (prop-drilling 브랜치)
  - 최초 개발시 context, redux등의 사용을 하지 않음
  - 작은 규모의 프로젝트임에도 props의 전달 과정 등이 불필요하다고 느낌
- context API (context 브랜치)
  - 특정 영역에서 공유하고 싶은 상태값을 context로 리팩토링 진행
  - 전체 포켓몬 데이터 배열, 추가된 포켓몬 데이터 배열, 추가/삭제 이벤트 함수 등을 공유하도록함
  - 공유함에 따라 Route로 나뉘어진 페이지 간의 데이터 공유가 가능해짐
- Reduxt ToolKit (rtk 브랜치)
  - redux를 사용할 필요는 없었지만 학습을 목표로 rtk를 이용해서 리팩토링 진행

### 구현 기능

- [x] 페이지 분리 (Home, Dex, Detail)
  - [x] 페이지 라우팅
- [x] `Home` 페이지
  - [x] **포켓몬 도감 시작하기** 버튼 클릭 시 Dex페이지로 이동
- [x] `Dex` 페이지
  - [x] 3개의 컴포넌트 `Dashboard`, `PokemonList`, `PokemonCard` 로 구성
  - [x] 카드로 이루어진 포켓몬 리스트 출력
    - [x] 각 카드는 **추가** 버튼을 가짐
    - [x] 추가를 하게 되면 대시보드에 표시
    - [x] 최대 6개까지 추가 가능
    - [x] 중복되는 포켓몬을 추가 불가능
    - [x] 추가된 포켓몬들은 **삭제** 버튼을 가짐
    - [x] 삭제를 하게 되면 대시보드에서 해당 포켓몬 삭제
- [x] `Detail` 페이지
  - [x] queryString으로 포켓몬 ID를 받음
  - [x] 해당 포켓몬의 상세 정보 표시
  - [x] **추가** 버튼클릭 시 포켓몬 도감 추가
  - [x] **뒤로 가기** 버튼클릭 시 Dex(뒤로)로 이동
- [x] 공통
  - [x] `styled-components` 사용

#### 그 외 추가기능

- [x] 추가된 포켓몬 목록
  - [x] 상세페이지에서도 확인 가능
  - [x] 리스트 페이지에서 스크롤 내리면(대시보드가 안보이면) 좌측에서 확인 가능
- [x] 유료 버튼
  - [x] 추가할 수 있는 포켓몬의 수가 늘어남
- [x] 리스트페이지 페이지네이션

## 3. 페이지 및 컴포넌트 구조

### 페이지

- `Home` (메인 홈 페이지)
- `Dex` (포켓몬 리스트 페이지)
  - `Dashboard`, `PokemonList` 컴포넌트를 가짐
- `Detail` (포켓몬 상세 페이지)
  - `Home`과 동일한 styled-components 사용

### 컴포넌트

- `Button`
  - props: `text`, `type`, `id`, `action`
  - 공통으로 사용되는 버튼 컴포넌트
  - `text`와 `type` 에 따라 버튼의 문구와 스타일 변경
  - 콜백함수 `action(id)`로 이벤트 실행
- `PokemonCard`
  - props: `pokemon`, `cardType`, `action`, `text`
  - `PokemonList`, `Dashboard`에서 공통으로 사용되는 컴포넌트
  - `cardType`에 따라 카드의 형태 변경 (`pokemon` 데이터가 없으면 포켓볼 사진을 출력)
  - `id`, `action` 을 `Button` 컴포넌트에 전달
- `Dashboard`
  - props: `MAX_LENGTH`
  - 모든 포켓몬 데이터(`allPokemonList`)와 추가된 포켓몬 데이터(`selectedPokemon`)를 `store` 에서
    받아 사용
  - `MAX_LENGTH`의 값으로 대시보드의 최대 길이를 정함
  - `selectedPokemon`와 `MAX_LENGTH`를 이용해 반복 순회하며 `PokemonCard` 호출
    - 이때 데이터의 여부에 따라 `PokemonCard`에 `cardType` 을 전달함

## 3. 전체 개발 기간

- 2024.08.19 ~ 2024.08.22

## 4. 프로젝트 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂font
 ┃ ┗ 📂images
 ┣ 📂components
 ┃ ┣ 📜Button.jsx
 ┃ ┣ 📜Dashboard.jsx
 ┃ ┣ 📜PokemonCard.jsx
 ┃ ┣ 📜PokemonList.jsx
 ┃ ┗ 📜Toast.jsx
 ┣ 📂context
 ┃ ┗ 📜PokemonContext.jsx
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Dex.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂slices
 ┃ ┃ ┗ 📜pokemonSlice.js
 ┣ 📂shared
 ┃ ┗ 📜Router.jsx
 ┣ 📂styled
 ┃ ┗ 📜StMain.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜GlobalStyle.jsx
 ┣ 📜main.jsx
 ┗ 📜mock.js
```
