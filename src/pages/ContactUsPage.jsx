const ContactUsPage = () => {
  return (
    <>
      <div className="d-flex justify-content-start align-items-start flex-column p-5">
        <p>
          Welcome to BookUrShow! If you have any questions or need assistance,
          our Customer Support team is here to help you.
        </p>
        <ul className="d-inline-block">
          <li>
            <strong>Email:</strong> support@bookurshow.com
          </li>
          <li>
            <strong>Phone:</strong> 123-456-7890
          </li>
        </ul>
        <h3>Hours of Operation</h3>
        <p>
          Our Customer Support team is available to assist you during the
          following hours:
        </p>
        <ul className="d-inline-block">
          <li>
            <strong>24x7 available</strong>
          </li>
        </ul>
        <h5 className="mb-5">
          Thank you for choosing BookUrShow! Your satisfaction is our priority,
          and we look forward to providing you with an exceptional movie
          experience. Enjoy your time at the movies with BookUrShow!
        </h5>

        <img src="/images/bookmyshow-logo-transformed.png" width={120} />
      </div>
    </>
  );
};

export default ContactUsPage;
