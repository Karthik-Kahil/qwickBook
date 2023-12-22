import { useForm } from "react-hook-form";
import styled from "styled-components";
import useLogin from "../../Auth/useLogin";
import SpinnerMini from "../../UI/SpinnerMini";

const StyledContainer = styled.div`
  display: flex;
  background-color: var(--color-blue-bg);
  border-radius: 10px;
`;

const LoginBgImage = styled.div`
  background-image: url("https://i.pinimg.com/originals/cf/26/38/cf26388203bf7d02b1331e07604326ca.gif");
  width: 50%;
  height: 500px;
  object-fit: fill;
  border-radius: 10px 0px 0px 10px;
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
    <StyledContainer>
      <LoginBgImage />
      <div>
        <h2>Login</h2>
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
      </div>
    </StyledContainer>
  );
}

export default LoginPage;
