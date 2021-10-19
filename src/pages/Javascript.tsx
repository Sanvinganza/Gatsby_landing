import * as React from "react";
import "./normalize.scss";
import "./fonts.scss";
import TechnologiesLayout from "../components/TechnologiesWeUse/Technologies/TechnologiesLayout";

const Javascript: React.FC<any> = () => {
  return (
    <React.Fragment>
        <TechnologiesLayout index={3}/>
    </React.Fragment>
  );
};

export default Javascript;
