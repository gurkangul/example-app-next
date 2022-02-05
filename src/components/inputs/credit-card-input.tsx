import { TextInput } from "@mantine/core";
import React, { useState } from "react";
import { creditCardValidation } from "../../utility/credit-card-validation";

export default function CreditCardInput({ onChange }: { onChange: Function }) {
  const [card, setCard] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: any) => {
    creditCardValidation(
      e.target.value,
      (success: any, displayNumber: string, number: string) => {
        setError(!success);
        setCard(displayNumber);
        if (success) onChange(number);
        else onChange("");
      }
    );
  };
  return (
    <TextInput
      error={error}
      placeholder="Card Number"
      value={card}
      onChange={(e: any) => handleChange(e)}
    />
  );
}
