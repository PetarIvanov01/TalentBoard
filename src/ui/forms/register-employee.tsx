"use client";

import { registerEmployeeAction } from "@/app/actions";
import Button from "@/components/SubmitBtn";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

export default function RegisterFormEmployee() {
  const [state, action] = useFormState(registerEmployeeAction, initialState);

  return (
    <form action={action} className="flex flex-col gap-2">
      {/* FULL NAME */}
      <div className="text-center text-base self-center text-red-500">
        {state?.message.split(",").map((e) => (
          <p key={e}>{e}</p>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        <div className="flex flex-col grow">
          <label htmlFor="firstName" className="block font-semibold mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="text-black w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col grow">
          <label htmlFor="lastName" className="block font-semibold mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="text-black w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
      </div>
      {/* ---------- */}

      {/* EMAIL */}
      <div className="flex flex-col">
        <label htmlFor="email" className="block font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="text-black w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      {/* ------------ */}

      {/* Password */}
      <div className="flex flex-col">
        <label htmlFor="password" className="block font-semibold mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="text-black w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      {/* ------------ */}

      {/* Confirm Password */}
      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="block font-semibold mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="text-black w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      {/* ------------ */}

      <Button />
    </form>
  );
}
