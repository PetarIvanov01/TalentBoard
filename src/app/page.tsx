import ProfileSuggest from "@/components/ProfileSuggest";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`${lora.className} h-full flex flex-col px-7 py-8 text-neutral-800 gap-10 bg-orange-300`}
    >
      <header className="flex flex-col text-center bg-orange-100 border shadow-md rounded-md p-3">
        <h1 className="text-2xl font-bold text-orange-400 mb-2">
          Welcome to <span className="underline">TalentBoard Hub!</span>
        </h1>
        <p className="text-base self-center">
          TalentBoard Hub is a platform designed to streamline the hiring
          process for both employers and job seekers. Our goal is to connect
          talented individuals with great opportunities while making the
          recruitment process more efficient and effective.
        </p>
      </header>

      <section className="flex gap-3 justify-between grow">
        <ProfileSuggest
          type="employee"
          title="For Job Seekers"
          content={[
            "Browse job listings to find opportunities that match your skills and interests.",
            "Apply to jobs directly through our platform, making the process quick and easy.",
            "Manage your profile, including updating your resume and personal information.",
          ]}
          btnText="Register as Job Seeker"
        />
        <ProfileSuggest
          type="employer"
          title="For Employers"
          content={[
            "Post job listings to attract talented candidates to your company.",
            "Review job applications conveniently and efficiently.",
            "Manage your job postings, including editing, updating, or removing them as needed.",
          ]}
          btnText="Register as Employer"
        />
      </section>
    </div>
  );
}
