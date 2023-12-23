import { useForm } from "react-hook-form";
import styled from "styled-components";
import useLogin from "../../Auth/useLogin";
import SpinnerMini from "../../UI/SpinnerMini";
import { IoMdCloseCircle } from "react-icons/io";
import Overlay from "../../UI/Overlay";
import { useState } from "react";
import { setLoginPage } from "../../loginShowSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LinkStyle from "../../UI/LinkStyle";
import SignupPage from "./SignupPage";
import toast from "react-hot-toast";
import useSignup from "../../Auth/useSignup";

const StyledContainer = styled.div`
  position: fixed;
  flex-direction: column;
  background-color: var(--color-dark-blue);
  border: 2px solid var(--color-green-a1);
  border-radius: 10px;
  width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  z-index: 999;

  h2 {
    font-size: 3rem;
    color: var(--color-grey-0);
    margin-top: 3rem;
  }

  form {
    display: flex;
    position: relative;
    flex-direction: column;
    margin-top: 2rem;
  }

  form > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  form > div > label {
    color: var(--color-grey-0);
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  form > div > input {
    padding: 0.8rem 1.5rem;
    outline: 0;
    border: 0;
    border-radius: 10px;
  }

  form > div > button {
    background-color: var(--color-green-a1);
    outline: 0;
    border: 0;
    color: var(--color-grey-0);
    padding: 1rem 2rem;
    margin-top: 2rem;
    border-radius: 10px;
    font-size: 2rem;

    &:hover {
      background-color: var(--color-green-a1-hover);
    }
  }
`;

const CloseIcon = styled(IoMdCloseCircle)`
  position: absolute;
  width: 25px;
  height: 25px;
  color: var(--color-grey-0);
  cursor: pointer;
  right: 10px;
  top: 10px;
`;

const Icon = styled.div`
  img {
    position: absolute;
    top: -40px;
    left: 0px;
    width: 80px;
  }
`;

const ForgotLink = styled.div`
  p {
    font-size: 1.5rem;
    color: var(--color-grey-0);
  }
`;

function LoginPage() {
  const { register, handleSubmit, reset } = useForm();
  const { login, isLoading } = useLogin();
  const { signup } = useSignup();
  const [isLoadingSpin, setIsLoadingSpin] = useState(false);

  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSignup, setSignUp] = useState(false);
  const [currentCopy, setCurrentCopy] = useState({
    header: "Hello there!",
    button: "Log in",
    image: "Hearth.svg",
  });

  const dispatch = useDispatch();

  const pageShowHandler = () => {
    dispatch(setLoginPage(false));
  };

  const onSubmit = (data) => {
    setIsLoadingSpin((show) => !show);
    if (!data.email || !data.password) return;

    if (!isSignup)
      return login(data, {
        onSettled: () => {
          setIsLoadingSpin((show) => !show);
          reset();
        },
      });

    if (isSignup)
      if (data.password !== data.passwordConfirm)
        return toast.error("Password must be equal");
    return signup(data, {
      onSettled: () => {
        setIsLoadingSpin((show) => !show);
        reset();
        pageShowHandler();
      },
    });
  };

  const forgotHandler = () => {
    setIsForgotPassword((el) => !el);
    setCurrentCopy({
      header: "Forgot password",
      button: "Continue",
      image: "Checklist.svg",
    });
  };

  const defaultHandler = () => {
    setIsForgotPassword((el) => !el);
    setCurrentCopy({
      header: "Hello there!",
      button: "Log in",
      image: "Hearth.svg",
    });
  };

  const signupHandler = () => {
    setSignUp((el) => !el);
    setCurrentCopy({
      header: "Welcome to QwickBook",
      button: "Signup",
      image: "Medicine.svg",
    });
  };

  return (
    <>
      <Overlay onClick={pageShowHandler}></Overlay>
      <StyledContainer>
        <CloseIcon onClick={pageShowHandler} />
        <Icon>
          <img
            src={`../public/${currentCopy.image}`}
            alt={currentCopy.header}
          />
        </Icon>
        <h2>{currentCopy.header}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isSignup && <SignupPage register={register} />}
          {!isSignup && (
            <>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  disabled={isLoading}
                />
              </div>
              {!isForgotPassword && (
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    {...register("password", { required: true, minLength: 8 })}
                    disabled={isLoading}
                  />
                </div>
              )}{" "}
            </>
          )}
          <ForgotLink>
            {(!isForgotPassword && isSignup) || (
              <Link onClick={() => forgotHandler()}>
                <p>Forgot your password?</p>
              </Link>
            )}
            {isForgotPassword && (
              <p>
                Already have an account
                <LinkStyle onClick={() => defaultHandler()}>Sign in</LinkStyle>
              </p>
            )}

            <button>
              {!isLoadingSpin ? currentCopy.button : <SpinnerMini />}
            </button>
          </ForgotLink>

          <ForgotLink>
            {!isSignup && (
              <p>
                Not a member?{" "}
                <LinkStyle onClick={() => signupHandler()}>Sign up</LinkStyle>
              </p>
            )}
          </ForgotLink>
        </form>
      </StyledContainer>
    </>
  );
}

export default LoginPage;
