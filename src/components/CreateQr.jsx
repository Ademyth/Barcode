import { useState } from "react"
import QRCode from "qrcode"

const CreateQr = () => {

  const [qrValue, setQrValue] = useState("");
  const [qrImageUrl, setQrImageUrl] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!qrValue) {
      return alert("Please enter some value")
    }
 
    const response = await QRCode.toDataURL(qrValue);
    setQrImageUrl(response);
    setQrValue("");
  };

  return (
    <div className="col-md-4 mx-auto">
      <h2 className="text-center mb-4">Create QR Code</h2>
      <div className="card border-0">
        <div className="card-body d-flex flex-column align-items-center">
          <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-between">
            <input type="text"
            className="form-control border-top-0 border-start-0 border-end-0"
            placeholder="Enter Text"
            style={{ width: "90%", 
            outline: "none !important",
            boxShadow: "none !important",
          }}
            id="text"
            value={qrValue}
            onChange={(e)=> setQrValue(e.target.value)}
            />
            <button
            type="submit"
            className="btn btn-primary"
            >
              +
            </button>
          </form>
          {qrImageUrl && (
            <div className="mt-4">
              <img src={qrImageUrl} alt="QR Code" />
            </div>
          )}
      </div>
      </div>
    </div>
  )
}

export default CreateQr