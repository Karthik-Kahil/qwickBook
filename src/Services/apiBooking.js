export async function sendBookings(data) {
  try {
    const sendData = await fetch(
      "https://subtesting.qwickbook.com/api/v2/clients",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (sendData.ok) {
      const responseJson = await sendData.json();
      return responseJson;
    } else {
      throw new Error(`Failed to send data. Status: ${sendData.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getDoctorDetails(date) {
  try {
    const sendData = await fetch(
      `https://subtesting.qwickbook.com/api/v2/doctors/${date}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (sendData.ok) {
      const responseJson = await sendData.json();
      return responseJson;
    } else {
      throw new Error(`Failed to send data. Status: ${sendData.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function bookingSlots(date, email, slot) {
  try {
    const sendData = await fetch(
      `https://subtesting.qwickbook.com/api/v2/doctors/slots/${date}/${email}/${slot}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (sendData.ok) {
      const responseJson = await sendData.json();
      return responseJson;
    } else {
      throw new Error(`Failed to send data. Status: ${sendData.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function bookingHistory() {
  try {
    const sendData = await fetch(
      `https://subtesting.qwickbook.com/api/v2/clients/getBookingHistory`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (sendData.ok) {
      const responseJson = await sendData.json();
      return responseJson;
    } else {
      throw new Error(`Failed to get data. Status: ${sendData.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
