import FormSeparator from "../utils/FormSeparator";
import AuthButton from "./AuthButton";
import AuthField from "./AuthField";
import AuthTitle from "./AuthTitle";
import GoogleButton from "./GoogleButton";

function RegisterForm() {
  return (
    <form>
      <AuthTitle title="Sign Up" />
      <div className="space-y-6">
        <GoogleButton />
        <FormSeparator />
        <AuthField label="Email" type="email" />
        <AuthField label="Password" type="password" />
        <AuthField label="Confirm Password" type="password" />
        <AuthButton label="Sign Up" />
      </div>
    </form>
  )
}

export default RegisterForm;