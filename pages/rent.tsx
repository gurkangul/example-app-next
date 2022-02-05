import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  Loader,
  Space,
} from "@mantine/core";
import { getSession } from "next-auth/react";
import { ReactElement, useEffect, useState } from "react";
import CarCard from "../src/components/cards/car-card";
import PayoutCard from "../src/components/cards/payout-card";
import Layout from "../src/components/layouts";
import useCheckRoute from "../src/hooks/useCheckRoute";
import useStore from "../src/store";

export default function Rent() {
  const [payment, setPayment] = useState();
  const state = useStore();

  if (!state.selectedCar) {
    return useCheckRoute();
  }

  function rentClick() {
    console.log(payment);
  }

  return (
    <>
      <Group position="center">
        {state.selectedCar && (
          <CarCard isButton={false} item={state.selectedCar} />
        )}
        <Space w="lg" />
        <PayoutCard setPayment={setPayment}></PayoutCard>
        {payment && (
          <Button
            variant="light"
            color="green"
            fullWidth
            style={{ marginTop: 14, maxWidth: 700 }}
            onClick={() => rentClick()}
          >
            Rent Now
          </Button>
        )}
      </Group>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

Rent.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
