import { Button, Group, Space } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { getSession } from "next-auth/react";
import { ReactElement, useState } from "react";
import { API } from "../src/api";
import CarCard from "../src/components/cards/car-card";
import PayoutCard from "../src/components/cards/payout-card";
import Layout from "../src/components/layouts";
import useCheckRoute from "../src/hooks/useCheckRoute";
import useStore from "../src/store";

export default function Rent({ session }: any) {
  const [payment, setPayment] = useState();
  const state = useStore();
  const notifications = useNotifications();

  if (state?.selectedCar?.id == 0) {
    return useCheckRoute();
  }

  console.log(state?.selectedCar);
  async function rentClick() {
    console.log(payment);
    let result = await API.ORDER(session, state?.selectedCar?.id);
    if (result.status == "Success") {
      notifications.showNotification({
        message: "Order successfully",
        color: "green",
      });
    } else {
      notifications.showNotification({
        message: "Order is not successfully",
        color: "orange",
      });
    }
  }

  return (
    <>
      <Group position="center">
        {state?.selectedCar?.id != 0 && (
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
