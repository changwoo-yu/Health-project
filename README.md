# <img src="https://github.com/user-attachments/assets/9b5d0cec-9736-45a0-b3c1-910c6e489095" alt="헬스프로젝트" width="20" />  PoketFit - 헬스장 게시글 프로젝트
![health](https://github.com/user-attachments/assets/ce37095e-d2f8-420a-a6c8-51f7d306bf5b)
### PoketFit 프로젝트 URL : [링크](https://www.ner.com/)
<br/>
<br/>

## 프로젝트 소개
* PoketFit은 헬스장을 다니는 사람들이 본인의 운동 경험이나 관련 정보를 공유하거나, 헬스장에 관해서 질문이나 불만사항 등 있다면 게시글을 통해 공유할 수 있습니다.
* 게시글 올리는 페이지에서 원하는 글의 제목과 내용의 색상이나 크기 등 스타일을 자유롭게 변경할 수 있으며, 사진, 영상, 링크 등을 추가하여 자신이 작성하고 싶은 게시글을 꾸며 업로드할 수 있습니다.
* 다른 사람들이 올린 게시글들을 모두 볼 수 있는데 검색 기능을 통해 원하는 게시글을 찾을 수 있고, 각 게시글 마다 댓글을 달 수 있습니다. 
* 공지사항을 통해 헬스장과 관련된 이슈나 이벤트 등 다양한 정보를 자세히 쉽게 확인할 수 있습니다.
<br/>
<br/>

## 선택한 개발 기술과 툴
#### Front-end
* Next.js
  * React.js와 Next.js 중 어떤 프레임워크를 사용할까 고민했는데 페이지 변환을 비교적 쉽게 할 수 있는 라우팅을 활용하기 위해 Next.js를 선택했습니다.
  * 추후에 SSR(서버 사이드 렌더링)과 SSG(정적 사이트 생성)의 장점을 통해 SEO 최적화와 페이지 로딩을 빠르게 개선하는 부분까지 생각했습니다.
* Tailwind CSS
  * 스타일을 주고 싶은 태그에 class 이름을 일일이 지정할 필요 없이 빠르고 쉽게 스타일링 할 수 있어서 선택했고, 커스터마이징이 용이하기 때문에 프로젝트에 적합한 스타일을 빠르게 적용할 수 있었습니다.

#### back-end
* Json-server
  *프로젝트를 개발할때 백엔드가 없고, 서버를 구축할 시간이 부족했기 때문에 Json-server를 사용했습니다.
  * 유저 데이터와 게시글 데이터를 Json-server에 저장하고, 로컬스토리지와 연동하여 원하는 데이터를 쉽게 조회할 수 있었습니다.

#### 버전 및 이슈관리
* Github
  * 코드의 커밋, 푸쉬, 버전을 관리하기 위해 사용했고, 개인프로젝트 였지만 협업을 경험을 쌓기 위해 브랜치 관리와 병합 및 PR(Pull Request)등 기능을 사용해보며 경험했습니다.
    
* #### 문서화 툴
* Notion
  * 프로젝트 기획, 사용한 라이브러리 정리, 개발 과정에서의 특이사항 및 이슈 등을 기록하고 정리하는데 있어서 페이지, 토글, 링크와 같은 다양한 기능을 지원하기 떄문에 보기 좋게 정리할 수 있었습니다.
    
* #### 서비스 배포 환경
* AWS EC2
  * 프로젝트 과정에서 사용한 로컬스토리지, Json-server등 포함해서 안정적으로 배포하기 위해 클라우드 서버인 AWS EC2를 사용했습니다.
    
* #### 디자인
* Figma
  * 디자인과 프로토타입 제작을 설계하는 데 다양한 기능을 지원하기 때문에 빠르게 배우고 설계할 수 있었고, 다양한 플러그인을 지원하여 디자인 작업을 더욱 효율적으로 진행할 수 있었습니다.
  * 갈릴레오 AI를 사용하여 초기 디자인을 추천받고, 이를 기반으로 수정하여 설계하였는데 피그마와 연동이 강력하기 때문에 쉽게 수정, 삭제 등 할 수 있어서 선택하였습니다.
<br/>
<br/>

## 프로젝트 구조
```
├── README.md
├── tailwind.config.ts
├── next.config.mjs
├── .eslintrc.json
├── .gitignore
├── .env.local
├── db.json
├── package-lock.json
├── package.json
│
├── public
│    └── images
└── src
     ├── app
     │     ├── api
     │     │    └── route.ts
     │     ├── auth
     │     │     ├── authFind
     │     │     │      ├── IdFind.tsx
     │     │     │      ├── PwFind.tsx
     │     │     │      ├──SkeletonFind.tsx
     │     │     │      └── page.tsx        
     │     │     ├── login
     │     │     │      ├── SkeletonLogin.tsx
     │     │     │      └── page.tsx      
     │     │     └── signup
     │     │           ├── InputField.tsx
     │     │           ├── SkeletonSignUp.tsx
     │     │           ├── UseAgree.tsx
     │     │           └── page.tsx   
     │     ├── context
     │     │      └── AuthContext.tsx
     │     ├── map
     │     │    ├── useKakaoLoader.tsx
     │     │    └── page.tsx  
     │     ├── post
     │     │     ├── [id]
     │     │     │    ├── CommentList.tsx
     │     │     │    ├── CommentSection.tsx
     │     │     │    ├── ShareButton.tsx
     │     │     │    └── page.tsx 
     │     │     ├── components
     │     │     │        ├── PostItem.tsx
     │     │     │        ├── PostList.tsx
     │     │     │        ├── SearchBar.tsx
     │     │     │        └── SkeletonPost.tsx
     │     │     └── page.tsx  
     │     ├── upload
     │     │     ├── QuillEditor.tsx
     │     │     ├── TitleInput.tsx
     │     │     ├── SkeletonUpload.tsx
     │     │     └── page.tsx 
     │     ├── user
     │     │     ├── mypage
     │     │     │     ├── PasswordChange.tsx
     │     │     │     ├── SkeletonMypage.tsx
     │     │     │     ├── UserInfo.tsx
     │     │     │     ├── Withdraw.tsx
     │     │     │     └── page.tsx 
     │     │     └── notice
     │     │           └── page.tsx 
     │     ├── globals.css
     │     ├── layout.tsx
     │     ├── loginstate.tsx
     │     └── page.tsx 
     │          
     └── components
           ├── footer
           │     └── footer.tsx 
           ├── header
           │     ├── ButtonHeader.tsx
           │     └── header.tsx 
           ├── sidebar
           │     └── page.tsx 
           └── slider
                 └── page.tsx 
     
```

## 페이지별 소개

#### 홈 페이지
* 페이지의 첫 화면인 홈 페이지로 체육관 소개, 트레이너 모집, 헬스장 위치 등 내용을 포함하고 있습니다.
* 간단한 소개와 함께 헬스장 이미지를 슬라이드 형식으로 보여줍니다.
* 헬스장 위치를 카카오맵을 통해서 지도와 스카이뷰로 확인할 수 있습니다.
<img src="https://github.com/user-attachments/assets/af0cac6c-83f4-4047-ac2b-0c73e4d0b78d" alt="홈 페이지" width="400" />
<br/>

---

#### 게시글 페이지
* 작성된 게시글들을 아래서부터 순서대로 모두 볼 수 있고, 게시글 제목과 작성자, 글 올린 시간 등이 포함되어 있습니다.
* 보고 싶은 게시글 제목을 검색창에 입력하면 그 게시글만 찾아서 볼 수 있습니다.
* 검색창 옆에 글을 올릴 수 있는 버튼이 있습니다.
<img src="https://github.com/user-attachments/assets/aa40ef51-9afa-46e8-92fe-369140f70bce" alt="게시글 페이지" width="400" />
<br/>

---

#### 게시글 상세 페이지
* 보고 싶은 글을 클릭하면 자세한 내용과 이미지 등을 볼 수 있는 상세 페이지로 이동합니다.
* 아래에 사용자들이 로그인 후 댓글을 달 수 있는 기능도 있습니다.
<img src="https://github.com/user-attachments/assets/97b9b5e2-a1ea-40a5-8729-0667908da4b6" alt="게시글 상세페이지" width="400" />
<br/>

---

#### 글 올리기 페이지
* 로그인 상태에서만 글 올리기 페이지로 들어갈 수 있습니다.
* 글 꾸미기, 사진 업로드를 포함한 여러 기능을 사용하여 글을 올릴 수 있습니다.
<img src="https://github.com/user-attachments/assets/30655dbe-f68d-4e8f-bca9-8ec9da8d58c5" alt="글 올리기 페이지" width="400" />
<br/>

---

#### 회원가입 페이지
* 아이디, 비밀번호, 이메일, 이름, 휴대폰 인증 등을 포함한 회원가입 페이지입니다.
* 각 입력 항목에 대해 유효성 검사를 하며, 올바르게 작성했다면 파란색 글씨로 표시되고, 그렇지 않다면 빨간색 글씨로 보여줍니다.
* 모든 항목이 올바르게 작성되어야 가입이 가능하며, 휴대폰 인증 기능은 아직 개발 중입니다.
<img src="https://github.com/user-attachments/assets/1e12e45e-46fc-4d76-97cf-3d2304d4bc13" alt="회원가입 페이지" width="400" />
<br/>

---

#### 로그인 페이지
* 아이디와 비밀번호를 입력하여 로그인할 수 있으며, 여기서도 유효성 검사를 합니다.
* 아이디가 없다면 회원가입 페이지로 넘어가는 버튼과, 아이디/비밀번호를 기억하지 못한다면 찾을 수 있는 페이지로 이동하는 버튼이 있습니다.
<img src="https://github.com/user-attachments/assets/8e3d6bc4-1c14-430f-b13d-a68254e27070" alt="로그인 페이지" width="400" />
<br/>

---

#### 아이디 / 비밀번호 찾기 페이지
* 아이디를 찾고 싶다면 회원가입할 때 등록했던 이메일을 입력하면 바로 아이디를 보여줍니다.
* 비밀번호를 찾고 싶다면 아이디를 입력 시 임시 비밀번호를 랜덤 번호로 생성해주는데, 이를 통해 로그인 후 원하는 비밀번호로 변경할 수 있습니다.
<img src="https://github.com/user-attachments/assets/1e05de26-2e1e-4aaa-a485-43e674b29c38" alt="id/pw 찾기페이지" width="400" />
<br/>

---

#### 마이페이지
* 마이페이지는 로그인 상태에서만 접근할 수 있으며, 내 정보 섹션에서 본인의 아이디, 이메일, 이름, 휴대폰 번호 등을 확인할 수 있습니다.
* 비밀번호 변경 섹션에서는 현재 비밀번호를 입력하여 새로운 비밀번호로 변경할 수 있습니다.
* 회원 탈퇴 섹션에서는 현재 로그인 되어 있어야 하고, 현재 비밀번호를 입력하면 탈퇴할 수 있습니다.
* 아이디가 없다면 회원가입 페이지로 넘어가는 버튼과, 아이디/비밀번호를 기억하지 못한다면 찾을 수 있는 페이지로 이동하는 버튼이 있습니다.
<img src="https://github.com/user-attachments/assets/650ef451-9b40-485b-904e-93ef1fc42b46" alt="마이페이지" width="400" />
<br/>

---

#### 공지사항 페이지
* 공지사항 페이지는 헬스장에 어떤 이벤트나 회원들에게 안내해야 할 사항 등을 보여주는 페이지인데, 아직 개발 중이라 하드코딩으로 만들어놨습니다.
<img src="https://github.com/user-attachments/assets/06d026dc-3a62-4c04-af61-e2e018c9262f" alt="공지사항 페이지" width="400" />
<br/>

---


## 버전업 
* 현재 로그인 기능은 아이디 비번을 입력해서 회원가입 하는 방법 뿐이지만 OAuth인 구글 간편로그인, 카카오 간편로그인 등 추가해서 간편하게 로그인 할 수 있도록 버전업 계획이 있습니다.
* 각 게시글에 좋아요 같은 이모티콘을 추가하여 반응할 수 있는걸 만들 계획이 있습니다.
* 이 프로젝트의 관리자가 사용하는 페이지로 공지사항에 글을 올리 수 있고 관리자 권한으로 모든 글을 삭제할 수 있는 기능 계획입니다.
* 인바디 사진을 업로드하면 그 사진에서 데이터를 추출해 그 조건에 맞는 본인 간단한 캐릭터를 생성하는 기능과 그 인바디 데이터로 인한 본인의 변화를 그래프로 알 수 있게 하는 기능 


## 개선 목표
* 휴대폰인증 
