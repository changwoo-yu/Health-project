"use client";
const Login = () => {
  return (
    <div>
      <div className="flex justify-end">
        <button className="m-5 text-gray-500 font-bold">관리자</button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="/images/logo.png" alt="헬스장 기구" />
        <h1 className="font-bold m-4">헬스 프로젝트 입니다!</h1>
        <input
          className="border border-red-400 p-2 mt-5 rounded-xl w-[400px]"
          type="text"
          name="id"
          placeholder="이메일"
        />
        <input
          className="border border-red-400 p-2 mt-5 rounded-xl w-[400px]"
          type="password"
          name="password"
          placeholder="비밀번호"
        />

        <button className="border p-3 rounded-lg mb-5 mt-5 bg-red-300 text-white">로그인</button>
        <div className="flex justify-center items-center text-gray-500">
          <button>아이디 찾기</button>
          <button className="ml-4 mr-4">비밀번호 찾기</button>
          <button className="mr-3">회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
