import prisma from "@/lib/prisma";

export default async function HomePage() {
  const users = await prisma.user.findMany();

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      {JSON.stringify(users)}
    </div>
  );
}
