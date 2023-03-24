import { FormEvent, useState } from "react";
import { IoMail, IoLockClosed } from "react-icons/io5";
import { APIQueries } from "../../common/queries/APIQueries";
import { HttpError } from "../../common/clients/HttpClient";
import { useUI } from "../UIContext";
import FormSeparator from "../utils/FormSeparator";
import AuthInput from "./AuthInput";
import AuthModal from "./AuthModal";
import AuthTitle from "./AuthTitle";
import ErrorMessage from "./ErrorMessage";
import OAuthButton from "./OAuthButton";
import Button from "../utils/Button/Button";
import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";
import { getGitHubUrl, getGoogleUrl } from "../../common/auth/OAuthUrls";
import { RestAPIError } from "../../common/clients/RestAPIClient";

interface RegisterFormProps {
}

function RegisterForm({

}: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState<RestAPIError | null>(null);
  const [loading, setLoading] = useState(false);
  const { setModalView, closeModal } = useUI();
  const { login } = useAuth();

  const switchToLogin = () => {
    setModalView("LOGIN_VIEW");
  }

  const basicRegister = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const response = await APIQueries.register(email, password, passwordConfirmation);
      login(response.token);

      toast.success("Welcome to Apou's Films!");
      closeModal();
    } catch (err) {
      if (err instanceof RestAPIError) {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthModal>
      <form className="mb-4" onSubmit={basicRegister}>
        <AuthTitle title="Sign Up" />
        <div className="space-y-4">
          <OAuthButton
            label="Sign Up with Google" 
            icon="/google.png"
            href={getGoogleUrl()} 
          />

          <OAuthButton
            label="Sign Up with GitHub"
            icon="/github.png"
            href={getGitHubUrl()}
          />

          <FormSeparator />

          <AuthInput
            label="Email"
            type="email"
            placeholder="email@example.com"
            icon={<IoMail />}
            onChange={setEmail}
          />

          <AuthInput
            label="Password"
            type="password"
            placeholder="•••••••••"
            icon={<IoLockClosed />}
            onChange={setPassword}
          />

          <AuthInput
            label="Confirm Password"
            type="password"
            placeholder="•••••••••"
            icon={<IoLockClosed />}
            onChange={setPasswordConfirmation}
          />

          {error && (
            <ErrorMessage
              error={error}
            />
          )}

          <Button
            type="submit"
            loading={loading}
            disabled={loading}
            color="orange"
            className="w-full"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="flex space-x-2 text-sm">
        <span>
          Already have an account ?
        </span>
        <a className="text-orange-600 hover:text-orange-500 cursor-pointer"
          onClick={switchToLogin}
        >
          Login
        </a>
      </div>
    </AuthModal>
  )
}

export default RegisterForm;