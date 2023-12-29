import styled, { css } from "styled-components";
import { bookingHistory } from "../../Services/apiBooking";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoaderSection from "../../UI/LoaderSection";
import BookHeader from "./BookHeader";
import capitalizeEachWord from "../../UI/TitleCaseConvert";
import DateFormatter from "../../UI/DateFormatter";
import BookLive from "./BookLive";
import ButtonPage from "../../UI/ButtonPage";
import { FcNext, FcPrevious } from "react-icons/fc";
import Section from "../Home/Section";

const StyledDiv = styled.div`
  background-color: var(--color-blue-bg);
  color: var(--color-grey-0);
  padding: 0 8%;
  padding-bottom: 5rem;
  height: fit-content;
  max-height: fit-content;

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
  border: 2px solid var(--color-secondary-a0);
`;

const Th = styled.th`
  font-size: 1.4rem;
  padding: 1rem 2rem;
  background-color: var(--color-secondary-a1);
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
  border: 2px solid var(--color-secondary-a0);
  margin-bottom: 10px;
`;

const THead = styled.thead`
  background-color: var(--color-grey-2);
  color: var(--color-grey-1);
  text-align: center;
`;

const Tbody = styled.tbody`
  background-color: var(--color-grey-2);
  text-align: center;
`;

const Status = styled.p`
  ${(props) =>
    props.$status === "upcoming" &&
    css`
      background-color: var(--color-green-a1-hover);
      border: 2px solid var(--color-green-a1);
    `}

  ${(props) =>
    props.$status === "expired" &&
    css`
      background-color: var(--color-red-a1);
      border: 2px solid var(--color-red--hover);
    `}

    ${(props) =>
    props.$status === "today" &&
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
`;

const NoData = styled.td`
  font-size: 2rem;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding-top: 7rem;
  padding-bottom: 7rem;
`;

const PageLimit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  text-align: center;
  margin-top: 3rem !important;

  & svg {
    color: var(--color-grey-0);
  }
`;

function BookHistory() {
  const [curData, setCurData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = curData?.data?.getBookingHistory.slice(
    startIndex,
    endIndex
  );

  const getData = async () => {
    setIsLoading(true);
    try {
      const getDataHistory = await bookingHistory();

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

  const totalPages = Math.ceil(
    curData?.data?.getBookingHistory.length / itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
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
            {currentData?.length <= 0 && (
              <NoData colSpan={8}>No booking data found!</NoData>
            )}

            {currentData?.map((data) => (
              <Tbody key={data._id}>
                <CellStyle>
                  <Td>{capitalizeEachWord(data.name)}</Td>
                  <Td>{data.mobile}</Td>
                  <Td>{capitalizeEachWord(data.doctorsName)}</Td>
                  <Td>{capitalizeEachWord(data.hospitalName)}</Td>
                  <Td>{capitalizeEachWord(data.hospitalLocation)}</Td>
                  <Td>
                    <Status
                      $status={
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
            ))}
          </Table>

          <TableDiv></TableDiv>
        </div>
        <PageLimit>
          <ButtonPage onClick={handlePrevPage} disabled={currentPage === 1}>
            <FcPrevious />
          </ButtonPage>
          <span>{`Page ${currentPage} of ${totalPages || 1}`}</span>
          <ButtonPage
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <FcNext />
          </ButtonPage>
        </PageLimit>
      </StyledDiv>

      <Section />
    </>
  );
}

export default BookHistory;
