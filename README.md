# 실습 완료 후 템플릿 (Vercel 배포)
https://movie-app-relights-projects.vercel.app

---

# API 활용 JS/TS 실습 - API를 활용한 영화검색 싸이트

## 개요
    API 및 컴포넌트 별로 나눠진 페이지 구성으로 영화검색 싸이트를 구현
## 주요 실습내용
    * parcel 번들러 사용으로 웹 서버 실행
    * 컴포넌트의 개념 및 사용방법
      - DOM API를 사용한 컴포넌트 생성으로 동적으로 화면(페이지)를 만드는 방법 구현
      - 라우터 구성을 이용한 페이지 이동 방법 구현
    * Rest API 활용하여 실제 데이터를 가져온 정보를 바탕으로 구현
    * 페이징 처리 API 구현
    * API 사용시 Key 데이터의 보안이슈 문제
      - vercel 의 serverless function 처리
      - 프로젝트 환경변수 설정 - 로컬 소스에도 남아있어서 Key가 노출될 위험이 있음.
    * .env 파일은 별도로 파일 관리를 해야함.
## 보완 및 개선필요 사항
    * 상태를 관리하며 재 렌더링하는 store 영역에 관리하는 데이터가 너무 많아짐.
    * 반응형 레이아웃 구현은 동일하게 여러 번 반복과정 작업이 되고 있음.
## 관련링크
    * 리셋 CSS : https://www.jsdelivr.com/package/npm/reset-css
    * 구글 폰트 : https://fonts.google.com/
    * Vercel 웹 배포 : https://vercel.com/
