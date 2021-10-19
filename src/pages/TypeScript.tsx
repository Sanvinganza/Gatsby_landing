import * as React from "react";
import "./normalize.scss";
import "./fonts.scss";
import TechnologiesLayout from "../components/TechnologiesWeUse/Technologies/TechnologiesLayout";

const TypeScript: React.FC<any> = () => {
  return (
    <React.Fragment>
        <TechnologiesLayout index={0}/>
    </React.Fragment>
  );
};

export default TypeScript;
