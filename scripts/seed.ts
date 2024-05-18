import { Employee, insertUser } from "@/lib/drizzle";

const newUsers: Employee[] = [
  {
    firstName: "Guillermo",
    lastName: "Rauch",
    email: "rauchg@vercel.com",
    password: "123456",
  },
  {
    firstName: "Lee",
    lastName: "Robinson",
    email: "lee@vercel.com",
    password: "123456",
  },
  {
    firstName: "Steven",
    lastName: "Tey",
    email: "stey@vercel.com",
    password: "123456",
  },
];

async function main() {
  let users = [];
  for (const user of newUsers) {
    const insertedUsers: Employee[] = await insertUser(user);
    users.push(insertedUsers);
  }

  console.log(`Seeded ${users.length} users`);
  process.exit();
}

main();
