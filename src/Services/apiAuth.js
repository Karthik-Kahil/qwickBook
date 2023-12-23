import toast from "react-hot-toast";

export async function loginAuth(data) {
  try {
    const sendData = await fetch(
      "https://subtesting.qwickbook.com/api/v2/user/login",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Submitting....");

    if (sendData.ok) {
      const responseJson = await sendData.json();
      localStorage.setItem(
        "userData",
        JSON.stringify({
          name: responseJson.data.user.name,
          email: responseJson.data.user.email,
        })
      );
      location.reload(true);
      return responseJson;
    } else {
      throw new Error(`Failed to send data. Status: ${sendData.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function loginUserDetails() {
  try {
    const sendData = await fetch(
      "https://subtesting.qwickbook.com/api/v2/user/getuserDetails",
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Submitting....");

    if (sendData.ok) {
      const responseJson = await sendData.json();
      return responseJson;
    } else {
      throw new Error(
        `Failed to getting user data. Status: ${sendData.status}`
      );
    }
  } catch (err) {
    console.error();
  }
}

export async function logout() {
  try {
    const sendData = await fetch(
      "https://subtesting.qwickbook.com/api/v2/user/removecookie",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (sendData.status === "true") location.reload(true);

    if (!sendData.ok) {
      throw new Error(
        `Failed to remove cookie data. Status: ${sendData.status}`
      );
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function signUp(data) {
  try {
    const sendData = await fetch(
      "https://subtesting.qwickbook.com/api/v2/user/signup",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (sendData.ok) {
      const responseJson = await sendData.json();
      toast.success("Signed up successfully!");
      return responseJson;
    } else if (sendData.status === 401) {
      // Check for a specific status code (e.g., conflict)
      toast.error(`You already have an account with this email`);
    } else {
      const errorMessage = await sendData.text();
      throw new Error(`Sign up failed: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("An unexpected error occurred during sign up");
    throw error;
  }
}
