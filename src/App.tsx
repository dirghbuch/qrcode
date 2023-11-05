import React from "react";
import { QRCode } from "react-qrcode-logo";
import Background from "./north-invite.jpeg";

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
  const getPersonsFromParam = (
    queryParameters: URLSearchParams
  ): string | undefined => {
    const id = queryParameters.get("persons");
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
      <div className={"person"}>{getPersonsFromParam(queryParameters)}</div>
    </div>
  );
};

export default App;
