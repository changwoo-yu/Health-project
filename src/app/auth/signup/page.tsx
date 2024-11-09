"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SkeletonSignUp from "./SkeletonSignUp";
import InputField from "./InputField";
import UseAgree from "./UseAgree";

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [phone, setPhone] = useState("");
  const [nickName, setNickName] = useState("");
  const [numberAuth, setNumberAuth] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });
    return () => clearTimeout(timer);
  }, []);

  const onChangeId = (e: any) => {
    const currentId = e.target.value;
    setId(currentId);
    if (currentId.length < 5) {
      setIdMessage("5자리 이상 입력해주세요");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  const onChangePassword = (e: any) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("숫자, 영문자 조합으로 8자리 이상 입력해주세요.");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e: any) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 같지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("비밀번호가 같습니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onChangeNickName = (e: any) => {
    const currentNumber = e.target.value;
    const regex = /^[가-힣a-zA-Z]+$/;
    if (!regex.test(currentNumber)) {
      console.log("에러");
    }
    setNickName(currentNumber);
  };

  const onChangePhone = (e: any) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, "");
    if (value.length > 3 && value.length <= 7) {
      value = value.slice(0, 3) + "-" + value.slice(3);
    } else if (value.length > 7) {
      value = value.slice(0, 3) + "-" + value.slice(3, 7) + "-" + value.slice(7, 11);
    }
    setPhone(value);
  };

  const onAuthPhone = (e: any) => {
    const currentNumber = e.target.value;
    const regex = /^[0-9]+$/;
    if (!regex.test(currentNumber)) {
      console.log("숫자만 입력할 수 있습니다.");
      return;
    }
    setNumberAuth(currentNumber);
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (!isId || !isPassword || !isPasswordConfirm || !nickName || !phone) {
      alert("모든 필드를 올바르게 입력해 주세요.");
      return;
    }

    const userData = {
      id,
      password,
      name: nickName,
      phone,
    };

    try {
      const response = await fetch("https://my-json-server.typicode.com/changwoo-yu/Health-project/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("회원가입이 완료되었습니다.");
        router.push("/auth/login");
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  if (loading) {
    return <SkeletonSignUp />;
  }

  return (
    <div className="max-w-screen-lg mx-auto text-sm mt-4">
      <div className="flex justify-center items-center">
        <h1 className="m-4 mt-8 text-2xl font-bold mb-4">회원가입</h1>
      </div>
      <form onSubmit={handleSignup} className="flex flex-col items-center">
        <InputField
          label="아이디"
          type="text"
          placeholder="아이디 입력"
          value={id}
          onChange={onChangeId}
          message={idMessage}
          isValid={isId}
        />
        <InputField
          label="비밀번호"
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={onChangePassword}
          message={passwordMessage}
          isValid={isPassword}
        />
        <InputField
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호 입력 확인"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
          message={passwordConfirmMessage}
          isValid={isPasswordConfirm}
        />
        <InputField
          label="이름"
          type="text"
          placeholder="이름 입력"
          value={nickName}
          onChange={onChangeNickName}
          isValid={true}
        />

        <InputField
          label="휴대폰 번호"
          type="tel"
          placeholder="휴대폰 번호 입력"
          value={phone}
          onChange={onChangePhone}
          isValid={true}
        />
        <div className="flex justify-center items-center ">
          <button
            type="button"
            className="p-2 font-bold rounded-md mb-4 bg-gray-100 mx-auto max-w-[400px] md:w-[400px] transition duration-200 ease-in-out 
                      hover:bg-gray-200 
                      active:scale-95 active:bg-gray-300"
          >
            휴대폰 인증
          </button>
        </div>

        <InputField
          label="인증 코드"
          type="tel"
          placeholder="인증 번호 입력"
          value={numberAuth}
          onChange={onAuthPhone}
          isValid={true}
        />

        <div className="flex justify-center items-center mx-auto max-w-[400px]">
          <button
            type="button"
            className="p-2 mr-2 font-bold rounded-md mt-2 mb-12 bg-gray-100 mx-auto md:w-[200px] max-w-[200px] transition duration-200 ease-in-out 
          hover:bg-gray-200 
          active:scale-95 active:bg-gray-300"
          >
            재인증
          </button>
          <button
            type="button"
            className="p-2 font-bold rounded-md mt-2 mb-12 bg-gray-100 mx-auto md:w-[200px] max-w-[200px] transition duration-200 ease-in-out 
        hover:bg-gray-200 
        active:scale-95 active:bg-gray-300"
          >
            인증
          </button>
        </div>
        <div className="flex justify-center items-center">
          <UseAgree id="agree" label="저는 이용약관 및 개인정보처리방침에 동의합니다." />
        </div>
        <div className="flex justify-center items-center mb-12 ">
          <button
            type="submit"
            className="p-2 font-bold rounded-md mt-4 bg-blue-400 text-white mx-auto max-w-[400px] md:w-[400px] 
                      transition duration-200 ease-in-out 
                      hover:bg-blue-500 
                      active:scale-95 active:bg-blue-600"
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
