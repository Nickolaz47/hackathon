const Message = ({ msg, type }) => {
  return (
    <>
      {type === "success" ? (
        <div className="rounded-pill bg-success align-middle text-white d-flex aligns-items-center justify-content-center">
          <p>{msg}</p>
        </div>
      ) : (
        <div className="d-flex aligns-items-center justify-content-center rounded-pill bg-danger text-white pt-3 mt-3 col-md-4 offset-md-4">
          <p>{msg}</p>
        </div>
      )}
    </>
  );
};

export default Message;
