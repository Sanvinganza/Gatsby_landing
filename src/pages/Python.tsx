import * as React from "react";
import "./normalize.scss";
import "./fonts.scss";
import TechnologiesLayout from "../components/TechnologiesWeUse/Technologies/TechnologiesLayout";

const Python: React.FC<any> = () => {
  return (
    <React.Fragment>
        <TechnologiesLayout index={2}/>
    </React.Fragment>
  );
};

export default Python;
