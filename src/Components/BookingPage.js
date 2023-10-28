import "./bookingPage.css";
import Button from "./Button/Button";
import heroImg from "../assets/images/corporate-memphis/Mesa de trabajo 1.png";
import BookingForm from "./BookingForm";
import styled from "@emotion/styled";

export const BookingSummary = ({ bookingData }) => {
  const date = new Date(bookingData.date);

  return (
    <section className="summary-container display-small">
      <h3>Your Booking:</h3>
      <h6 className="headline-medium">Summary</h6>

      <div className="summary headline-medium">
        <div className="summary-date">
          <h1>{date.getDate() ? date.getDate() : "No date selected"}</h1>
          <span>
            {date.getDate()
              ? date
                  .toLocaleDateString("en-us", { month: "short" })
                  .toUpperCase()
              : ""}
          </span>
        </div>
        <div className="summary-details">
          <h1>{bookingData.firstName + " " + bookingData.lastName}</h1>
          <span>
            {date.getDate()
              ? `${date
                  .toLocaleDateString("en-us", { weekday: "long" })
                  .toUpperCase()} ${bookingData.time} ${
                  bookingData.persons ? `for ${bookingData.persons} person` : ""
                }`
              : ""}
          </span>
        </div>
      </div>
      <Button
        style={{
          width: "100%",
        }}
        htmlType={"submit"}
        variant={"outlined"}
      >
        Make your Reservation
      </Button>
    </section>
  );
};
const StyledHero = styled.div`
  display: flex;
  background: var(--md-sys-color-tertiary-container);
  margin: 8px 8px 0 8px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  color: var(--md-sys-color-on-tertiary-container);
  @media screen and (max-width: 601px) {
    & > img {
      display: none;
    }
  }
`;
const Styledh1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  padding: 24px;
  @media screen and (min-width: 601px) {
    font-size: 4rem;
  }
  @media screen and (min-width: 841px) {
    font-size: 7vw;
  }
`;
const BookingPage = ({ children }) => {
  // const updateReservationData = (prev, action) => {
  //   switch (action.actionType) {
  //     case "updateInput":
  //       return {
  //         ...prev,
  //         [action.field]: { ...prev[action.field], state: action.value },
  //       };
  //     case "updateError":
  //       return {
  //         ...prev,
  //         [action.field]: { ...prev[action.field], error: action.value },
  //       };
  //     case "resetTime":
  //       return { ...prev, time: { ...prev["time"], state: "", options: [""] } };
  //     case "updateAvailTimes":
  //       return {
  //         ...prev,
  //         time: { ...prev.time, options: action.value },
  //       };
  //     default:
  //       break;
  //   }
  // };
  // const [reservationData, dispatch] = useReducer(updateReservationData, {
  //   persons: { label: "Persons", state: "", error: "" },
  //   date: { label: "Date", state: "", error: "", htmlType: "date" },
  //   time: {
  //     label: "Time",
  //     state: "",
  //     error: "",
  //     options: [""],
  //     htmlType: "select",
  //   },
  //   occasion: {
  //     label: "Occasion",
  //     state: "",
  //     error: "",
  //     options: ["Birthday", "Aniversary"],
  //     htmlType: "select",
  //   },
  //   firstName: { label: "First Name", state: "", error: "", htmlType: "text" },
  //   lastName: { label: "Last Name", state: "", error: "", htmlType: "text" },
  //   email: { label: "Email", state: "", error: "", htmlType: "email" },
  //   specialRequest: {
  //     label: "Special Request",
  //     state: "",
  //     error: "",
  //     htmlType: "textarea",
  //   },
  // });

  // useEffect(() => {
  //   dispatch({
  //     actionType: "resetTime",
  //   });

  //   fetchAPI(reservationData.date.state)
  //     .then(function (resolvedValue) {
  //       dispatch({
  //         actionType: "updateAvailTimes",

  //         value: resolvedValue,
  //       });
  //     })
  //     .catch(function (rejectValue) {
  //       dispatch({
  //         actionType: "updateAvailTimes",

  //         value: rejectValue,
  //       });
  //     });
  // }, [reservationData.date.state]);

  return (
    <>
      <StyledHero>
        <Styledh1>Reservation</Styledh1>
        <img
          src={heroImg}
          alt=""
          style={{
            maxWidth: "35%",
            borderRadius: "120px",
            margin: "8px",
          }}
        />
      </StyledHero>
      {/* <ReservationForm reservationData={reservationData} dispatch={dispatch} /> */}

      <BookingForm />
    </>
  );
};

export default BookingPage;
