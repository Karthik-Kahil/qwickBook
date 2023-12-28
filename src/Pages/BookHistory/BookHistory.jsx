import styled, { css } from "styled-components";
import { bookingHistory } from "../../Services/apiBooking";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoaderSection from "../../UI/LoaderSection";
import BookHeader from "./BookHeader";
import capitalizeEachWord from "../../UI/TitleCaseConvert";
import DateFormatter from "../../UI/DateFormatter";
import BookLive from "./BookLive";

const StyledDiv = styled.div`
  background-color: var(--color-blue-bg);
  color: var(--color-grey-0);
  padding: 0 8%;
  padding-bottom: 5rem;
  height: auto;

  div {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const Table = styled.table`
  font-size: 1.3rem;
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  color: var(--color-grey-0);
  text-align: center;
  border-radius: 10px;
`;

const Th = styled.th`
  font-size: 1.4rem;
  padding: 1rem 2rem;
  color: var(--color-grey-1);
  width: 200px;
  max-width: 200px;
`;

const Td = styled.td`
  padding: 1rem 2rem;
  color: var(--color-grey-1);
  width: 200px;
  max-width: 200px;
`;

const CellStyle = styled.tr`
  border: 2px solid var(--color-green-a1);
  margin-bottom: 10px;
`;

const THead = styled.thead`
  background-color: var(--color-grey-2);
  border: 2px solid var(--color-green-a1);
  color: var(--color-grey-1);
  text-align: center;
`;

const Tbody = styled.tbody`
  background-color: var(--color-grey-2);
  border: 2px solid var(--color-green-a1);
  text-align: center;
`;

const Status = styled.p`
  ${(props) =>
    props.status === "upcoming" &&
    css`
      background-color: var(--color-green-a1-hover);
      border: 2px solid var(--color-green-a1);
    `}

  ${(props) =>
    props.status === "expired" &&
    css`
      background-color: var(--color-red-a1);
      border: 2px solid var(--color-red--hover);
    `}

    ${(props) =>
    props.status === "today" &&
    css`
      background-color: var(--color-active-a1);
      border: 2px solid var(--color-active-a0);
    `}

  padding: 8px 16px;
  border-radius: 10px;
  color: var(--color-grey-0);
`;

const TableDiv = styled.div`
  margin-top: 2rem;
  height: 300px;
  max-height: 300px;
  overflow: scroll;
`;

const NoData = styled.h4`
  font-size: 2rem;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

function BookHistory() {
  const [curData, setCurData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const getDataHistory = await bookingHistory();
      console.log(getDataHistory);

      if (!getDataHistory) {
        return toast.error("Not able to find booking history");
      }

      setCurData(getDataHistory);
      setIsLoading(false);
    } catch (error) {
      toast.error("Error getting booking data");
    }
  };

  const statusFunction = (date) => {
    const data =
      new Date(date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)
        ? "expired"
        : new Date(date).setHours(0, 0, 0, 0) ===
          new Date().setHours(0, 0, 0, 0)
        ? "today"
        : "upcoming";

    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledDiv>
      <BookLive
        totalBooking={curData?.data?.getBookingHistory.length}
        todayBooking={1}
      />
      <div>
        <BookHeader>Booking History</BookHeader>
        {isLoading && <LoaderSection />}
        <Table>
          <THead>
            <tr>
              <Th>Booking</Th>
              <Th>Mobile</Th>
              <Th>Doctor</Th>
              <Th>Hospital</Th>
              <Th>Location</Th>
              <Th>Status</Th>
              <Th>Appointment Time</Th>
              <Th>Appointment Date</Th>
            </tr>
          </THead>
        </Table>
        {curData?.data?.getBookingHistory.length <= 0 && (
          <NoData>No booking data found!</NoData>
        )}
        <TableDiv>
          {curData?.data?.getBookingHistory.map((data) => (
            <Table key={data._id}>
              <Tbody>
                <CellStyle>
                  <Td>{capitalizeEachWord(data.name)}</Td>
                  <Td>{data.mobile}</Td>
                  <Td>{capitalizeEachWord(data.doctorsName)}</Td>
                  <Td>{capitalizeEachWord(data.hospitalName)}</Td>
                  <Td>{capitalizeEachWord(data.hospitalLocation)}</Td>
                  <Td>
                    <Status
                      status={
                        new Date(data.appointmentDate).setHours(0, 0, 0, 0) <
                        new Date().setHours(0, 0, 0, 0)
                          ? "expired"
                          : new Date(data.appointmentDate).setHours(
                              0,
                              0,
                              0,
                              0
                            ) === new Date().setHours(0, 0, 0, 0)
                          ? "today"
                          : "upcoming"
                      }
                    >
                      {capitalizeEachWord(statusFunction(data.appointmentDate))}
                    </Status>
                  </Td>
                  <Td>{data.appointmentTime}</Td>
                  <Td>{DateFormatter(data.appointmentDate)}</Td>
                </CellStyle>
              </Tbody>
            </Table>
          ))}
        </TableDiv>
      </div>
    </StyledDiv>
  );
}

export default BookHistory;
