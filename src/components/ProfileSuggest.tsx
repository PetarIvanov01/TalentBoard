import { UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

type Props = {
  type: "employee" | "employer";
  content: string[];
  title: string;
  btnText: string;
};
export default function ProfileSuggest({
  type,
  btnText,
  content,
  title,
}: Props) {
  const navigateTo =
    type === "employee" ? "/register?type=employee" : "/register?type=employer";
  const loginLink =
    type === "employee" ? "/login?type=employee" : "/login?type=employer";

  return (
    <article
      className={`w-1/2 flex flex-col ${
        type === "employee" ? "bg-green-100" : "bg-blue-100"
      } border p-4 rounded-md shadow-xl`}
    >
      <h2 className="text-lg font-semibold border-b border-b-gray-700">
        {title}:
      </h2>
      <ul className="flex flex-col gap-2 grow list-disc pl-8 py-2">
        {content.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
      <Link
        href={navigateTo}
        className={`flex justify-center items-center gap-4 ${
          type === "employee"
            ? "bg-green-500 hover:bg-green-600"
            : "bg-blue-500 hover:bg-blue-600"
        }  text-white font-semibold py-2 px-4 rounded items-end shadow-md transition-transform hover:translate-y-2`}
      >
        {btnText}
        <UserCircleIcon height={32} />
      </Link>
      <p className="text-center mt-4 text-sm">
        Already have an account?{" "}
        <Link href={loginLink} className="text-blue-500 underline">
          Sign in
        </Link>
      </p>
    </article>
  );
}
