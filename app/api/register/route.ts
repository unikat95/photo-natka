import { signIn } from "@/auth";
import { prisma } from "@/lib/db";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const userCount = await prisma.user.count();

  if (userCount > 0) {
    return NextResponse.json(
      { error: "Admin already exists" },
      { status: 403 },
    );
  }

  const passwordHash = await hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      passwordHash,
    },
  });

  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  return Response.json({ ok: true });
}
