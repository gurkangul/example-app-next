import { TextInput } from "@mantine/core";
import React, { useState } from "react";
import { creditCardDateValidation } from "../../utility/credit-card-validation";

export default function CreditDateInput({ onChange }: { onChange: Function }) {
  const [date, setDate] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: any) => {
    return creditCardDateValidation(
      e.target.value,
      (success: any, date: any) => {
        setError(!success);
        setDate(date);
        if (success) onChange(date);
        else onChange("");
      }
    );
  };
  return (
    <TextInput
      aria-label="credit-card-date"
      error={error}
      placeholder="Date"
      value={date}
      onChange={(e: any) => handleChange(e)}
      style={{ maxWidth: 100 }}
    />
  );
}
