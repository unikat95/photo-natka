"use client";

import { delay } from "@/lib/utils";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await delay(500);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Niepoprawny email lub hasło");
      setLoading(false);
      return;
    }

    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <input
          type="email"
          name="email"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="flex justify-center items-center gap-2">
          Zaloguj się {loading && <LoadingSpinner />}
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <Link href="/">Strona główna</Link>
    </form>
  );
}
