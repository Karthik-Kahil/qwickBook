import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Services/apiAuth";

function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ name, email, password, passwordConfirm }) =>
      signUp({ name, email, password, passwordConfirm }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { signup, isLoading };
}

export default useSignup;
