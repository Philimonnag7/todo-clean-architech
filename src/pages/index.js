"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div>
      <h1>Welcome to Todo App</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
