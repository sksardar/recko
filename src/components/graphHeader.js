import React from "react";

const GraphHeader = ({ header, subHeader }) => (
    <h4 style={{ position: "absolute", color: "red", margin: "0 auto", background: "black", marginLeft: "40%", textDecoration: "underline" }}>
        {`${header} ${subHeader ? "(" + subHeader + ") " : ""}`}:
    </h4>
)

export default GraphHeader;