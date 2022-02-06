import React, { Fragment, useEffect, useState } from "react";
import { Group, Input, SimpleGrid, Text } from "@mantine/core";
import CreditCardInput from "../inputs/credit-card-input";
import CreditDateInput from "../inputs/credit-date-input";
import CreditCvcInput from "../inputs/credit-cvc-input";

type CardInfo = {
  card_number: string;
  exp_date: string;
  cvc: string;
  owner_name: string;
};

export default function PayoutCard({ setPayment }: any) {
  const [creditCardInfo, setCreditCardInfo] = useState<CardInfo>({
    owner_name: "",
    card_number: "",
    exp_date: "",
    cvc: "",
  });

  useEffect(() => {
    if (
      !!creditCardInfo["owner_name"] &&
      !!creditCardInfo["card_number"] &&
      !!creditCardInfo["exp_date"] &&
      !!creditCardInfo["cvc"]
    ) {
      setPayment(creditCardInfo);
    } else {
      setPayment(null);
    }
  }, [creditCardInfo]);

  return (
    <>
      <Group direction="column" position="center">
        <Text color="blue">Credit Card</Text>
        <SimpleGrid cols={1} spacing="md">
          <Input
            placeholder="Card Owner Name"
            onChange={(e: any) =>
              setCreditCardInfo({
                ...creditCardInfo,
                owner_name: e.target.value,
              })
            }
          />
          <CreditCardInput
            onChange={(data: any) =>
              setCreditCardInfo({ ...creditCardInfo, card_number: data })
            }
          />
          <Group position="apart">
            <CreditDateInput
              onChange={(data: any) =>
                setCreditCardInfo({ ...creditCardInfo, exp_date: data })
              }
            ></CreditDateInput>
            <CreditCvcInput
              onChange={(data: any) =>
                setCreditCardInfo({ ...creditCardInfo, cvc: data })
              }
            ></CreditCvcInput>
          </Group>
        </SimpleGrid>
      </Group>
    </>
  );
}
