import { FormEvent, useState } from "react";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { APIQueries } from "../../common/queries/APIQueries";
import { useUI } from "../UIContext";
import FormSeparator from "../utils/FormSeparator";
import AuthInput from "./AuthInput";
import AuthModal from "./AuthModal";
import AuthTitle from "./AuthTitle";
import ErrorMessage from "./ErrorMessage";
import OAuthButton from "./OAuthButton";
import { useAuth } from "../AuthContext";
import Button from "../utils/Button/Button";
import { toast } from "react-toastify";
import { getGitHubUrl, getGoogleUrl } from "../../common/auth/OAuthUrls";
import { RestAPIError } from "../../common/clients/RestAPIClient";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<RestAPIError | null>(null);
  const [loading, setLoading] = useState(false);
  const { setModalView, closeModal } = useUI();
  const { login } = useAuth();

  const switchToRegister = () => {
    setModalView("REGISTER_VIEW");
  }

  const basicLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const response = await APIQueries.login(email, password);
      login(response.token);

      toast.success("Welcome !");
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
      <form className="mb-4" onSubmit={basicLogin}>
        <AuthTitle title="Login" />
        <div className="space-y-5">
          <OAuthButton
            label="Login with Google"
            icon="/google.png"
            href={getGoogleUrl()}
          />

          <OAuthButton
            label="Login with GitHub"
            icon="/github.png"
            href={getGitHubUrl()}
          />

          <FormSeparator />

          <AuthInput
            label="Email"
            type="email"
            placeholder="Your Email"
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

          {error && (
            <ErrorMessage
              error={error}
            />
          )}

          <Button
            loading={loading}
            type={"submit"}
            color={"orange"}
            className="w-full"
          >
            Login
          </Button>
        </div>
      </form>
      <div className="flex space-x-2 text-sm">
        <span>
          Not registred ?
        </span>
        <a className="text-orange hover:text-orange-2 cursor-pointer"
          onClick={switchToRegister}
        >
          Sign up
        </a>
      </div>
    </AuthModal>
  )

}

export default LoginForm;