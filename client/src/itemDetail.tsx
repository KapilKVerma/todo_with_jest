import React, { useState } from "react";
type item = {
  name: string;
};

type hanldeFunction = (value: string) => void;

interface Props {
  item: item;
  addCategory: hanldeFunction;
  removeCategory: hanldeFunction;
}
const ItemDetail: React.FC<Props> = ({ item, addCategory, removeCategory }) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <>
      <span
        style={{
          padding: ".5rem 1rem",
          margin: ".15rem",
          background: `${!selected ? "white" : "black"}`,
          borderRadius: "50px",
          border: `${!selected ? "1px solid black" : "1px solid white"}`,
          color: `${!selected ? "black" : "white"}`,
          cursor: "pointer",
          display: "inline-block",
        }}
        onClick={() => {
          setSelected(!selected);
          if (!selected) addCategory(item.name);
          else removeCategory(item.name);
        }}
      >
        {item.name}
      </span>
    </>
  );
};

export default ItemDetail;
