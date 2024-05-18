import { AuthUserType } from "@/types/auth-pages";
import LoginFormEmployee from "@/ui/forms/login-employee";
import LoginFormEmployer from "@/ui/forms/login-employer";

type Props = {
  searchParams: { type: AuthUserType };
};

export default function LoginPage({ searchParams }: Props) {
  const type = searchParams.type;

  return (
    <div>
      {type === "employee" ? <LoginFormEmployee /> : null}
      {type === "employer" ? <LoginFormEmployer /> : null}
    </div>
  );
}
