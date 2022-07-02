import { QRCodeCanvas } from "qrcode.react";
import { useLocation } from "react-router-dom";

const QRCode = ({ url }) => {
  const location = useLocation();
  console.log(location);

  const codeTag = (
    <QRCodeCanvas
      id="qrCode"
      size={300}
      bgColor={"#6db8c7"}
      level={"H"}
      value={`https://food-qr.herokuapp.com/restaurants/${url}`}
    />
  );

  return <div>{codeTag}</div>;
};

export default QRCode;
