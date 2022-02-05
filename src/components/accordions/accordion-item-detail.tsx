import { Chip, Chips } from "@mantine/core";
import React, { Fragment, useState } from "react";
import useStore from "../../store";

export default function AccordionItemDetail({ parentObject, filter }: any) {
  const [chipValue, setChipValue] = useState<string[]>([]);
  const state = useStore();

  function handleChange(value: any) {
    state.setFilters({ ...state.filters, [parentObject]: value });
    setChipValue(value);
  }
  return (
    <Fragment>
      <Chips
        value={chipValue}
        onChange={(val) => handleChange(val)}
        multiple
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        {filter.map((item: any) => (
          <Chip key={item + "chip"} value={item}>
            {item}
          </Chip>
        ))}
      </Chips>
    </Fragment>
  );
}
