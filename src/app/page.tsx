"use client";
import useThemeStore from "@/store/useTheme";
import { useEffect } from "react";

export default function Home() {
  const { setTheme } = useThemeStore();
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark-gray-white" : "light-white-black");
  }, []);
  return <div>Hello World !</div>;
}
