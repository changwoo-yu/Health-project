# <img src="https://github.com/user-attachments/assets/9b5d0cec-9736-45a0-b3c1-910c6e489095" alt="헬스프로젝트" width="20" />  PoketFit - 헬스장 사용자들이 운동 관련 정보, 팁, 경험 등 공유하고 질문할 수 있는 프로젝트
![health](https://github.com/user-attachments/assets/b63abf5a-541a-47d2-bbb7-0328b95342d8)
PoketFit 프로젝트 URL : [링크](https://www.ner.com/)
<br/>
<br/>

## 프로젝트 소개
* PoketFit은 헬스장을 다니는 사람들이 본인의 운동 경험이나 팁을 공유하거나, 헬스장에 관해서 질문이나 불만사항 등 있다면 게시글을 통해 공유할 수 있습니다.
* 로그인해서 게시글을 올리고 삭제할 수 있는데 여기에 글 스타일 변경과 사진 등 추가가 가능합니다.
* 다른 사람들이 올린 게시글들을 모두 볼 수 있고, 검색 기능을 통해 원하는 게시글을 찾을 수 있습니다.
* 로그인 한다면 각 게시글 마다 댓글을 등록하고 삭제할 수 있습니다.
<br/>
<br/>

## 채택한 개발 기술과 툴
#### Front
* Next.js
* Tailwind css

#### Front
* Json-server
#### 버전 및 이슈관리
* Github, nvm
* #### 협업 툴
* Notion, Slack, Jira, confluence
* #### 서비스 배포 환경
* AWS EC2
* #### 디자인
* Figma

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
