"use client";
import { registerEmployerAction } from "@/app/actions";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};
export default function RegisterFormEmployer() {
  const [state, action] = useFormState(registerEmployerAction, initialState);

  return (
    <form action={action} className="flex flex-col gap-2">
      {/* Company Name*/}
      <div className="text-center text-base self-center text-red-500">
        {state?.message.split(",").map((e) => (
          <p key={e}>{e}</p>
        ))}
      </div>
      <div className="flex flex-col">
        <label htmlFor="companyName" className="block font-semibold mb-1">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="text-black w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      {/* ---------- */}

      {/* EMAIL */}
      <div className="flex flex-col">
        <label htmlFor="companyEmail" className="block font-semibold mb-1">
          Company Email
        </label>
        <input
          type="email"
          id="companyEmail"
          name="companyEmail"
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

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Register
      </button>
    </form>
  );
}
