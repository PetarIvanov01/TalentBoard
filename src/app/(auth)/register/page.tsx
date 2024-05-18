import { AuthUserType } from "@/types/auth-pages";
import RegisterFormEmployee from "@/ui/forms/register-employee";
import RegisterFormEmployer from "@/ui/forms/register-employer";

type Props = {
  searchParams: { type: AuthUserType };
};

export default function RegisterPage({ searchParams }: Props) {
  const type = searchParams.type;

  return (
    <>
      {type === "employee" && <RegisterFormEmployee />}
      {type === "employer" && <RegisterFormEmployer />}
    </>
  );
}
