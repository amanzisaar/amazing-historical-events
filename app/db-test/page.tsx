import { prisma } from "../../lib/prisma";

export default async function DBTestPage() {
  const users = await prisma.user.findMany();

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-6 text-4xl font-bold">
        Database Test
      </h1>

      <p>Total Users: {users.length}</p>
    </main>
  );
}