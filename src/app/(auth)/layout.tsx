import { Roboto_Slab } from "next/font/google";
import { ReactNode } from "react";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${roboto.className} h-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 text-white`}
    >
      {children}
    </div>
  );
}
