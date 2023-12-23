import { useForm } from "react-hook-form";
import styled from "styled-components";
import useLogin from "../../Auth/useLogin";
import SpinnerMini from "../../UI/SpinnerMini";
import { IoMdCloseCircle } from "react-icons/io";
import Overlay from "../../UI/Overlay";

const StyledContainer = styled.div`
  position: fixed;
  flex-direction: column;
  background-color: var(--color--login--a1);
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

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { login, isLoading } = useLogin();

  const onSubmit = (data) => {
    if (!data.email || !data.password) return;
    login(data, {
      onSettled: () => {
        console.log("Success");
      },
    });
  };

  return (
    <>
      <Overlay></Overlay>
      <StyledContainer>
        <CloseIcon />
        <Icon>
          <img src="../public/Hearth.svg" alt="" />
        </Icon>
        <h2>Hello there!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true, minLength: 8 })}
              disabled={isLoading}
            />
          </div>
          <div>
            <button>{!isLoading ? "Log in" : <SpinnerMini />}</button>
          </div>
        </form>
      </StyledContainer>
    </>
  );
}

export default LoginPage;
