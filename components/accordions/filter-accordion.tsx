import { Accordion, Chip, Chips } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { getKeyFromObjects } from "../../utility";
import AccordionItemDetail from "./accordion-item-detail";

export default function FilterAccordion({ filters, handleFilters }: any) {
  return (
    <Accordion>
      {getKeyFromObjects(filters).map((name: string) => (
        <Accordion.Item label={name} key={name + "accordion"}>
          <AccordionItemDetail
            parentObject={name}
            filter={filters[name]}
          ></AccordionItemDetail>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
