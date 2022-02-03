import { Input, Tooltip, Center, Button } from "@mantine/core";
import { InfoCircledIcon, MagnifyingGlassIcon } from "@modulz/radix-icons";
import React from "react";
import { API } from "../../api";

export default function SearchInput({ handleSearch }: any) {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top" placement="end">
      {/* <Button variant="light" color="red">
        Search
      </Button> */}
    </Tooltip>
  );

  return (
    <Center style={{ height: 100 }}>
      <Input
        onChange={(x: any) => handleSearch(x?.target?.value)}
        icon={<MagnifyingGlassIcon />}
        variant="default"
        placeholder="Search Car"
        rightSection={rightSection}
        rightSectionWidth={70}
        styles={{ rightSection: { pointerEvents: "none" } }}
      />
    </Center>
  );
}
