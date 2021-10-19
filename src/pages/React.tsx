import * as React from "react";
import "./normalize.scss";
import "./fonts.scss";
import TechnologiesLayout from "../components/TechnologiesWeUse/Technologies/TechnologiesLayout";

const ReactTechnology: React.FC<any> = () => {
  return (
    <React.Fragment>
        <TechnologiesLayout index={1}/>
    </React.Fragment>
  );
};

export default ReactTechnology;
