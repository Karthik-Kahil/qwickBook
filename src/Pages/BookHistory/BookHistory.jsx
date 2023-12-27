import styled from "styled-components";
import { bookingHistory } from "../../Services/apiBooking";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const StyledDiv = styled.div`
  display: flex;
`;

function BookHistory() {
  const [curData, setCurData] = useState([]);

  const getData = async () => {
    try {
      const getDataHistory = await bookingHistory();
      console.log(getDataHistory);

      if (!getDataHistory) {
        return toast.error("Not able to find booking history");
      }

      setCurData(getDataHistory);
    } catch (error) {
      toast.error("Error getting booking data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <StyledDiv>{/* <div>{curData}</div> */}</StyledDiv>;
}

export default BookHistory;
