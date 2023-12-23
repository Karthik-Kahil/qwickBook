/* eslint-disable react/prop-types */
function SignupPage({ register, isLoading }) {
  return (
    <>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          disabled={isLoading}
        />
      </div>
      <div>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          disabled={isLoading}
        />
      </div>
      <div>
        <label htmlFor="name">Password</label>
        <input
          type="password"
          id="password"
          {...register("passwordConfirm", { required: true })}
          disabled={isLoading}
        />
      </div>
      <div>
        <label htmlFor="name">Confirm password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
          disabled={isLoading}
        />
      </div>
    </>
  );
}

export default SignupPage;
