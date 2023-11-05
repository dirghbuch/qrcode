import { url } from "inspector";
import React from "react";
import { QRCode } from "react-qrcode-logo";
import Background from "./north-invite.jpeg";

var sectionStyle = {
  width: "200px",
  height: "100px",
  backgroundImage: `url(${Background})`,
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
      <div style={sectionStyle}>
        <QRCode
          logoOnLoad={() => console.log("logo loaded")}
          {...{
            value: getIdFromParam(queryParameters),
          }}
        />
      </div>
    </div>
  );
};

export default App;
