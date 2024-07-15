"use client";

import Image from "next/image";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold">
        Welcome to Next.js with Redux and Tailwind CSS
      </h1>
      <Counter />
    </>
  );
}
