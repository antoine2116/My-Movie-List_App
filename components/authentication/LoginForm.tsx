import { FormEvent, useState } from "react";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { APIQueries } from "../../common/queries/APIQueries";
import { HttpError } from "../../common/clients/HttpClient";
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
import { useGoogleLogin } from "@react-oauth/google";
import { User } from "../../models/User";
import { getGoogleUrl } from "../../common/auth/GoogleUrl";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { setModalView, closeModal } = useUI();
  const { login } = useAuth();
  
  const switchToRegister = () => {
    setModalView("REGISTER_VIEW");
  }

  const genericLogin = async (loginQuery : Promise<User>) => {
    try {
      setLoading(true);
      setMessage("");

      const user = await loginQuery;
      login(user);
      
      toast.success("Welcome !");
      closeModal();
    } catch (error) {
      if (error instanceof HttpError) {
        setMessage(error.message);
      } else {
        console.log(error);
        setMessage("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  const basicLogin = async (e: FormEvent) => {
    e.preventDefault();
    genericLogin(APIQueries.login(email, password));
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

          {/* <OAuthButton 
            label="Login with Facebook"
            icon="/facebook.png"
           /> */}

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

          {message && (
            <ErrorMessage
              message={message}
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
        <a className="text-orange-600 hover:text-orange-500 cursor-pointer"
          onClick={switchToRegister}
        >
          Sign up
        </a>
      </div>
    </AuthModal>
  )

}

export default LoginForm;