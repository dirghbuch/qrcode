import React from "react";
import { QRCode } from "react-qrcode-logo";
import Background from "./north-invite.jpeg";

var sectionStyle = {
  width: "200px",
  height: "100px",
  position: "absolute",
  top: "100px",
  left: "300px",
};
const App: React.FC = () => {
  const getIdFromParam = (
    queryParameters: URLSearchParams
  ): string | undefined => {
    const id = queryParameters.get("id");
    if (id != null) {
      return id;
    }
    return undefined;
  };
  const queryParameters = new URLSearchParams(window.location.search);

  return (
    <div className="app">
      <img
        src={Background}
        alt="background"
        height={"300px"}
        width={"500px"}
      ></img>
      <div className={"ticket"}>
        <QRCode
          logoOnLoad={() => console.log("logo loaded")}
          {...{
            value: getIdFromParam(queryParameters),
            size: 96,
          }}
        />
      </div>
    </div>
  );
};

export default App;
