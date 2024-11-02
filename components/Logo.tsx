"use client"
import LogoSvg from "@/public/logo.svg";
import MiniLogoSvg from "@/public/logo-mini.svg";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Logo() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    // 화면 크기에 따른 로고 변경
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 375);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <>
    <Link href="/">
      {isSmallScreen ?  <MiniLogoSvg /> : <LogoSvg />}
      </Link>
    </>
  )
}