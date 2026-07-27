import "./SuccessCard.css";

const SuccessCard = ({ userName, developerName }) => {
  return (
    <div className="success-card">

      <div className="success-icon">
        ✓
      </div>

      <h2>Message Sent Successfully!</h2>

      <p>
        Hello <strong>{userName}</strong>, your mail has been
        successfully sent.
      </p>

      <p>
        <strong>{developerName}</strong> will contact you soon!
      </p>

    </div>
  );
};

export default SuccessCard;