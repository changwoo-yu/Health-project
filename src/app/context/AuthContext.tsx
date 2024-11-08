"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// 인증 상태와 관련된 타입 정의
interface AuthContextType {
  auth: boolean;
  userId: string | null; // 사용자 ID 추가
  login: (id: string) => void; // 로그인 함수에 ID 인수 추가
  logout: () => void;
}

// Context 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider 컴포넌트 정의
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState(() => localStorage.getItem("auth") === "true");
  const [userId, setUserId] = useState(() => localStorage.getItem("userId")); // 로컬스토리지에서 초기 ID 가져오기

  const login = (id: string) => {
    setAuth(true);
    setUserId(id); // ID 상태 업데이트
    localStorage.setItem("auth", "true"); // 로그인 시 로컬스토리지에 'true' 저장
    localStorage.setItem("userId", id); // 로그인 시 로컬스토리지에 ID 저장
  };

  const logout = () => {
    setAuth(false);
    setUserId(null); // ID 상태 초기화
    localStorage.removeItem("auth"); // 로그아웃 시 로컬스토리지에서 제거
    localStorage.removeItem("userId"); // 로그아웃 시 ID 제거
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    const storedUserId = localStorage.getItem("userId");
    setAuth(storedAuth === "true");
    setUserId(storedUserId); // 저장된 ID 설정
  }, []);

  return <AuthContext.Provider value={{ auth, userId, login, logout }}>{children}</AuthContext.Provider>;
};

// Context 사용을 위한 커스텀 훅
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
