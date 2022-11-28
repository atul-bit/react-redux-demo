import React from "react";

const TableRow = ({ data }) => {
    return (
        <tr>
            {data.map((item) => {
                console.log("item in table row",item)
                return <td key={item}>{item}</td>;
            })}
        </tr>
    );
};

export default TableRow;