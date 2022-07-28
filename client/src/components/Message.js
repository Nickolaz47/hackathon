const Message = ({ msg, type }) => {
  return (
    <>
      {type === "success" ? (
        <div className="rounded-pill bg-success text-white">
          <p>{msg}</p>
        </div>
      ) : (
        <div className="rounded-pill bg-danger text-white">
          <p>{msg}</p>
        </div>
      )}
    </>
  );
};

export default Message;
