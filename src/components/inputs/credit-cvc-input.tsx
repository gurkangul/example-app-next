import { TextInput } from "@mantine/core";
import React, { useState } from "react";
import { creditCardCvcValidation } from "../../utility/credit-card-validation";

export default function CreditCvcInput({ onChange }: { onChange: Function }) {
  const [cvc, setCvc] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const handleChange = (e: any) => {
    return creditCardCvcValidation(e.target.value, (success: any, cvc: any) => {
      setError(!success);
      setCvc(cvc);
      if (success) onChange(cvc);
      else onChange("");
    });
  };
  return (
    <TextInput
      error={error}
      placeholder="Cvc"
      value={cvc}
      onChange={(e: any) => handleChange(e)}
      style={{ maxWidth: 60 }}
    />
  );
}
