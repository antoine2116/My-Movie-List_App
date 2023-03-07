import { FormEvent, useEffect, useState } from "react";
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
import { useGoogleLogin } from "@react-oauth/google";
import { User } from "../../models/User";

interface RegisterFormProps {
}

function RegisterForm({

}: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { setModalView, closeModal } = useUI();
  const { login } = useAuth();

  const switchToLogin = () => {
    setModalView("LOGIN_VIEW");
  }

  const genericRegister = async (registerQuery : Promise<User>) => {
    try {
      setLoading(true);
      setMessage("");

      const user = await registerQuery;
      login(user);
      toast.success("Welcome to Apou's Films!");

      closeModal();
    } catch (error) {
      if (error instanceof HttpError) {
        setMessage(error.message);
      } else {
        setMessage("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  const basicRegister = async (e: FormEvent) => {
    e.preventDefault();
    genericRegister(APIQueries.register(email, password, passwordConfirmation));
  }

  const googleRegister = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      genericRegister(APIQueries.googleLogin(tokenResponse.access_token));
    },
  });


  return (
    <AuthModal>
      <form className="mb-4" onSubmit={basicRegister}>
        <AuthTitle title="Sign Up" />
        <div className="space-y-4">
          <OAuthButton
            label="Sign Up with Google" 
            icon="/google.png"
            onClick={() => googleRegister()} 
          />

          <OAuthButton 
            label="Sign Up with Facebook" 
            icon="/facebook.png"
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

          {message && (
            <ErrorMessage
              message={message}
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