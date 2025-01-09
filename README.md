# 🍫 ChocoLet

주변에서 쉽게 구입할 수 있는 초콜릿부터 프리미엄 초콜릿까지 다양한 초콜릿을 한눈에 볼 수 있는 사이트입니다.<br>
초콜릿 정보 제공, 취향에 따른 초콜릿 추천 서비스 및 초콜릿 선물 추천 서비스를 제공합니다.

<img src = "https://github.com/soheeyeo/Choco_Let/assets/95061372/577ad7e5-e7af-4f0a-a9c4-74700fcda574" width="100%">

-   [🔗초코렛 바로가기](https://choco-let.vercel.app/)<br>

<!-- 테스트 -->

-   테스트 계정<br>
    -   `email` test@test.com <br>
    -   `pw` test1234
        <br>

## 💬 프로젝트 설명

Next.js를 적용한 개인 프로젝트입니다.<br>
<br>
Prisma seeding을 통해 100개 이상의 데이터 생성, Supabase와 연동하여 DB 작업을 수행했습니다.<br>
<br>
Prisma Client를 사용하여 CRUD 작업을 수행했습니다.<br>
<br>
NextAuth를 활용하여 Custom 로그인 및 소셜 로그인 기능을 구현했습니다.
<br>
<br>

## ⚙️ 개발 환경

#### [개발기간]

2024.01

#### [기술]

-   `Next.js`, `React`, `NextAuth`<br>
-   `Prisma`<br>
-   `Supabase`<br>
-   `Git` `Figma` `Vercel`
    <br>
    <br>

## 💻 기능 및 페이지 시연

### 1. 메인

<img src = "https://github.com/soheeyeo/Choco_Let/assets/95061372/6d137ebe-daff-439c-bc0f-c971b7ad5ca3.gif" width="400px">
<br>

### 2. 회원가입

-   항목마다 유효성 검사가 진행됩니다.
-   회원가입 후 로그인 페이지로 이동합니다.

<img src = "https://github.com/soheeyeo/Choco_Let/assets/95061372/8cf0a29a-ac2f-4818-a451-27bd8f524569" width="400px">
<br>

### 3. 로그인

-   이메일/비밀번호 로그인 혹은 소셜 로그인을 할 수 있습니다.(네이버의 경우 개발 단계)
-   로그인 후 메인 화면 혹은 이전 화면(좋아요 버튼 클릭 시)으로 이동합니다.

<img src = "https://github.com/soheeyeo/Choco_Let/assets/95061372/1599d150-850e-40fc-8039-2b50b1fc9cc5" width="400px">
<br>

### 4. 제품 리스트

-   다양한 초콜릿을 가격대별, 나라별, 종류별, 맛별에 따라 조회할 수 있습니다.
-   오른쪽의 정렬 버튼으로 추천순, 브랜드명순, 낮은가격순, 높은가격순으로 조회할 수 있습니다.

<img src = "https://github.com/soheeyeo/Choco_Let/assets/95061372/cd325532-865e-4508-bd58-0ba337d681a8" width="400px">
<br>

### 5. 제품 상세

-   초콜릿의 상세 정보를 확인할 수 있습니다.
-   판매처 바로가기 버튼을 클릭하면 제품을 구매할 수 있는 사이트로 이동합니다.

<img src = "https://github.com/soheeyeo/Choco_Let/assets/95061372/7963d74f-94ce-48ef-bb60-9e7e78c91625" width="400px">
<br>

### 6. 관심목록

-   좋아요 목록을 확인할 수 있습니다.
-   아이템을 클릭하면 상세 페이지로 이동하고, `x` 버튼을 클릭하면 제품이 삭제됩니다.

<img src = "https://github.com/soheeyeo/Choco_Let/assets/95061372/65af91a1-5d7c-419d-a145-f4226ddc5ffa" width="400px">
<br>

### 7. 추천 테스트

-   선물 추천 테스트 혹은 초콜릿 취향 테스트를 할 수 있습니다.
-   각 문항에 맞는 답변을 클릭하면 알맞은 제품을 추천받을 수 있습니다.

<img src = "https://github.com/soheeyeo/Choco_Let/assets/95061372/6f117e17-b4f3-49c0-a407-3f91462c4e60" width="400px">
<br>

<br>
<br>

## 📁 폴더구조

-   api/ : 서버 기능 관련 디렉토리
-   components/ : 공통 컴포넌트 디렉토리
-   constatns/ : 공통 사용 상수 값 관리
-   hooks/ : Custom hook 디렉토리
-   lib/ : Prisma Client 관리
-   prisma/ : Prisma 관련 파일 디렉토리
-   public/ : 이미지, 폰트 디렉토리
-   util/ : 공통 데이터 관리

```
📦
┣ 📂app
┃ ┣ 📂api
┃ ┃ ┣ 📂auth
┃ ┃ ┣ 📂detail
┃ ┃ ┣ 📂like
┃ ┃ ┣ 📂list
┃ ┃ ┗ 📂result
┃ ┣ 📂components
┃ ┃ ┣ 📂button
┃ ┃ ┗ 📂common
┃ ┣ 📂detail
┃ ┃ ┗ 📂[id]
┃ ┣ 📂like
┃ ┣ 📂list
┃ ┃ ┗ 📂[category]
┃ ┃ ┃ ┗ 📂[listId]
┃ ┣ 📂login
┃ ┣ 📂signup
┃ ┣ 📂test
┃ ┃ ┣ 📂[id]
┃ ┃ ┗ 📂result
┃ ┃ ┃ ┗ 📂[type]
┣ 📂constants
┣ 📂hooks
┣ 📂lib
┣ 📂prisma
┣ 📂public
┗ 📂util
```

<br>
<br>

## 💡 핵심 코드

### SSR vs CSR

사용자의 요청에 따라 데이터를 불러오는 리스트, 상세 페이지 등은 `SSR(Server-Side Rendering)`을 사용하고, `metadata`를 통해 SEO를 적용했습니다.<br>
반면 사용자와의 상호작용으로 인해 실시간으로 변경되어야 하는 관심 목록 페이지 등은 `CSR(Client-Side Rendering)`을 사용했습니다.
https://github.com/soheeyeo/Choco_Let/blob/5b37e7130a8819c204bb1fbadd5e1c8077970fa9/app/detail/%5Bid%5D/page.js#L3-L33

https://github.com/soheeyeo/Choco_Let/blob/5b37e7130a8819c204bb1fbadd5e1c8077970fa9/app/like/page.js#L7-L20

## 💥 트러블 슈팅

### 1) GET 요청시 Query String의 특수문자 사라지는 이슈

테스트 결과 페이지에서 데이터를 요청할 때 Query String으로 제품명을 넘기도록 구현하였습니다. 하지만 특수문자 `&`이나 `%`가 포함된 제품명을 넘겨받을 때 특수문자가 사라지는 현상이 발생하였습니다.

-   원인 <br>
    `&`와 `+` 등 몇몇 특수문자들은 GET 방식일 때 웹에서 사용되는 지정된 문자이기 때문에 전송되지 않음.

-   해결 <br>
    POST 요청으로 변경하여 특수문자를 포함한 제품명 그대로 넘겨주었습니다.

https://github.com/soheeyeo/Choco_Let/blob/5b37e7130a8819c204bb1fbadd5e1c8077970fa9/app/test/result/%5Btype%5D/page.js#L12-L19

### 2) 로그인 오류 시 설정한 에러 핸들링이 출력되지 않는 이슈

이메일이나 비밀번호 오류 시 nextauth 파일에 설정한 에러 핸들링이 작동하지 않는 현상이 발생하였습니다.

-   원인 <br>
    `try ...catch`문을 사용하지 않고 예외 처리를 해준 것이 문제. await으로 비동기 작업 시 예외가 발생하면 코드가 그대로 중단됨.

-   해결 <br>
    `try ...catch`문을 사용하여 예외가 발생했을 때 `throw`문을 통해 에러 메세지를 전달하도록 수정하였습니다.

https://github.com/soheeyeo/Choco_Let/blob/5b37e7130a8819c204bb1fbadd5e1c8077970fa9/app/api/auth/%5B...nextauth%5D/route.js#L25-L56
