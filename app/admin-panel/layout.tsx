import { auth } from "@/auth";
import LoginForm from "@/components/LoginForm/LoginForm";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }

  return <>{children}</>;
}
