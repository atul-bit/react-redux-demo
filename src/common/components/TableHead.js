import React from "react";

const TableHeadItem = ({ item }) => {
    return (
        <td title={item}>
            {item.toUpperCase()}
        </td>
    );
};

export default TableHeadItem;