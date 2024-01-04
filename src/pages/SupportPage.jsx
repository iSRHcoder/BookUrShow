/* eslint-disable react/no-unescaped-entities */

const SupportPage = () => {
  return (
    <>
      <div className="p-5">
        <div className="d-flex justify-content-start align-items-start flex-column">
          <div className="d-flex justify-content-start align-items-start flex-column">
            Welcome to BookUrShow's Support Center! We are here to assist you
            with any questions or concerns you may have regarding your movie
            ticket bookings. Below, you'll find information on common topics to
            help make your movie booking experience smooth and enjoyable.
          </div>
          <h4>Frequently Asked Questions (FAQs)</h4>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>1. Booking and Payments</h5>

            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How do I book movie tickets on BookUrShow?</strong>
              You can book movie tickets by exploring our movie listings,
              selecting the showtimes, and proceeding to checkout.
              <strong> What payment methods do you accept?</strong>
              We accept major credit cards, online payment, and other secure
              payment methods. For more details, please visit our Payment
              Methods page.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>2. Movie Options and Cinemas</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How can I customize my movie experience?</strong>
              You can customize your movie experience by selecting your
              preferred movies, showtimes, and seating during the booking
              process.
              <strong>What are your cinema locations and showtimes?</strong>
              Cinema locations and showtimes may vary. Please refer to our
              Cinemas & Showtimes page for detailed information.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>3. Ticket Cancellation and Refunds</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>What if I need to cancel my movie tickets?</strong>
              If you need to cancel your movie tickets, please contact our
              support team within [X] hours of booking. Visit our Cancellation &
              Refunds page for instructions.
              <strong>How does your refund policy work?</strong>
              We offer refunds for canceled movie tickets in accordance with our
              Refund Policy. Please review this policy for more information.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>4. Account and Security</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How do I create a BookUrShow account?</strong>
              You can create an account by clicking on the "Sign Up" link and
              following the registration process.
              <strong>How can I update my account details?</strong>
              To update your account details, log in to your account and visit
              the "Account Settings" page.
            </div>
          </div>
        </div>
        <img src="/images/bookmyshow-logo-transformed.png" width={120} />
      </div>
    </>
  );
};

export default SupportPage;
