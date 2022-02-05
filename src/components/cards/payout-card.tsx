import React, { Fragment, useEffect, useState } from "react";
import { Group, Input, SimpleGrid, Text } from "@mantine/core";
import useStore from "../../store";
import CreditCardInput from "../inputs/credit-card-input";
import CreditDateInput from "../inputs/credit-date-input";
import CreditCvcInput from "../inputs/credit-cvc-input";

export default function PayoutCard({ setPayment }: any) {
  const state = useStore();
  const [creditCardInfo, setCreditCardInfo] = useState({
    owner_name: "",
    card_number: "",
    expiration_date: "",
    cvc: "",
  });

  useEffect(() => {
    console.log(creditCardInfo, creditCardInfo["cvc"], !!creditCardInfo["cvc"]);
    if (
      !!creditCardInfo["owner_name"] &&
      !!creditCardInfo["card_number"] &&
      !!creditCardInfo["expiration_date"] &&
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
                setCreditCardInfo({ ...creditCardInfo, expiration_date: data })
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
