import RegisterForm from "@/components/RegisterForm/RegisterForm";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
export default async function RegisterPage() {
  const userCount = await prisma.user.count();

  if (userCount > 0) {
    return redirect("/");
  }

  return <RegisterForm />;
}
