"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!email || !password) {
      setError("Obydwa pola są wymagane!");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-type": "application/json" },
      });

      if (!res.ok) {
        setError("Registration failed");
        setLoading(false);
        return;
      }

      router.replace("/admin-panel");
      router.refresh();
      return;
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-5 justify-center items-center"
    >
      <input
        type="email"
        placeholder="email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-zinc-300 px-3 py-2"
      />
      <input
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-zinc-300 px-3 py-2"
      />
      <button className="bg-black text-white px-4 py-2 rounded-md">
        Zarejestruj się
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}
