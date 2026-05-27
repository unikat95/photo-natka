import { auth } from "@/auth";

import LogoutButton from "@/components/LogoutButton/LogoutButton";
import Link from "next/link";

export default async function AdminPanelPage() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1>Admin Panel</h1>
        <p>Witaj {session?.user?.email}</p>
      </div>
      <div className="flex gap-5">
        <Link href="/">Strona główna</Link>
        <LogoutButton />
      </div>
    </div>
  );
}
