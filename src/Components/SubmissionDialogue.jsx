const SubmissionDialogue = ({ heading, message }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: "var(--md-sys-color-surface-container)",
        position: "relative",
        top: "40%",
      }}
      className="dialogue"
    >
      <h1>{heading}</h1>
      <p>{message}</p>
    </div>
  );
};

export default SubmissionDialogue;
