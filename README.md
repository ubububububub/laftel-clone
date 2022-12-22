# 라프텔 클론 코딩

- 대한민국 최고의 애니메이션 OTT 플랫폼 라프텔을 클론 코딩한 프로젝트입니다.

## 1. 서비스 주요 기능 설명

- 약관동의, 회원가입, 이메일 인증, 로그인 구현
- 애니메이션 상세 정보 조회 구현
- 필터에 따른 애니메이션 목록 조회(무한스크롤) 구현
- 애니메이션 별점 CRD 구현
- 애니메이션 리뷰 CRUD 구현

## 2. 서비스 구성도

![기술스택](https://res.cloudinary.com/dhfkiaac8/image/upload/v1671376078/skills_tym5ik.png)

- [API 명세](https://github.com/ubububububub/laftel-clone/wiki/API-%EB%AA%85%EC%84%B8)

## 3. 프로젝트 팀원 역할 분담

| 이름   | 담당 업무       |
| ------ | --------------- |
| 김유범 | 프론트엔드 개발 |
| 김지택 | 백엔드 개발     |

## 4. 폴더 구조

```bash
├── client
│   ├── .vscode
│   ├── public
│   ├── src
│   │   ├── apis
│   │   ├── components
│   │   ├── hooks
│   │   ├── pages
│   │   ├── routers
│   │   ├── store
│   │   ├── style
│   │   ├── types
│   │   ├── utils
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite.env.d.ts
│   ├── .eslintignore
│   ├── .eslintrc.js
│   ├── .prettierrc.js
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── server
│   ├── controllers
│   │   ├── admin
│   │   ├── main
│   │   └── index.js
│   ├── middlewares
│   ├── models
│   │   ├── schemas
│   │   └── ...
│   ├── services
│   ├── utils
│   ├── app.js
│   ├── babel.config.json
│   ├── index.js
│   └── package.json
├── README.md
└── .gitignore
```

## 5. 커밋 컨벤션

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor : 코드 리펙토링
- test : 테스트 코드, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정
- remove: 파일 삭제

## 6. 브랜치 전략

![Untitled-2022-07-19-1846](https://res.cloudinary.com/dhfkiaac8/image/upload/v1671371652/Untitled-2022-07-19-1846_rynngp.png)

## 7. 실행 방법

- 프론트엔드
  ```bash
    cd client
    yarn dev
  ```
- 백엔드
  ```bash
    cd server
    yarn start
  ```

## 8. 버전

- 1.0.0
