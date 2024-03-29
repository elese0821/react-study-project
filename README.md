# 시작하기

노드 버전 20.10.0 -> 20.11.1
```
npx create-react-app .

npm i sass
npm i react-router-dom
npm install react-bootstrap bootstrap
```

# 최종 목표
js 기반 프론트개발 
react,next / vue
관련 정보들, 유용한 사이트, 커뮤니티 연관한 개발관련 정보공유, 커뮤니티 사이트

로그인, 회원가입, 댓글, 게시판, 테마기능 구현


## 목표
1. useId()사용
2. 다크/화이트 테마구현
3. 로그인 토큰을 사용한 로그인 구현
4. MOTP 구현
5. context
6. bootstrap 적극 사용
7. react dev tool 디버깅 
8. server api 구현 - node 3가지 방법
JWT (JSON Web Tokens): 가장 일반적으로 사용되는 방법 중 하나입니다. 사용자 인증 후에 서버는 JWT를 생성하고 리액트 앱에게 반환합니다. 이 JWT는 리액트 앱이 백엔드 API로 요청을 보낼 때마다 요청 헤더에 포함됩니다. 서버는 JWT를 검증하여 사용자를 인증하고 권한을 확인합니다.

세션 쿠키: 사용자가 로그인하면 서버에서 세션 쿠키를 생성하고 리액트 앱에게 전달합니다. 이 쿠키는 후속 요청에서 자동으로 서버로 전송됩니다. 서버는 세션을 유지하고 인증 및 권한 부여를 위해 세션 쿠키를 사용합니다.

HTTP 요청 헤더: 직접적으로 HTTP 요청 헤더에 토큰을 포함하여 보낼 수도 있습니다. 일반적으로는 헤더에 Authorization과 같은 키를 사용하여 토큰을 전달합니다.