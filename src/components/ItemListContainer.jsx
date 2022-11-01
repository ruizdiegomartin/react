import React from "react";

export default function ItemListContainer({ greeting }) {
  return (
    <div
      className="item-list-container"
      style={{
        backgroundColor: "#e2a694",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontWeight: "bold" }}>{greeting}</p>
    </div>
  );
}
