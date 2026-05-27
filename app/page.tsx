import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-5">
      <h1>Home page</h1>
      <Link href="/admin-panel">Admin Panel</Link>
    </main>
  );
}
