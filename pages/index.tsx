import { getSession } from "next-auth/react";
import { ReactElement, useEffect, useState } from "react";
import { AppShell, Center, Group } from "@mantine/core";
import { useRouter } from "next/router";
import CarCard from "../src/components/cards/car-card";
import { ICar } from "../src/interfaces";
import { filteredCarList } from "../src/utility/filters";
import useStore from "../src/store";
import { API } from "../src/api";
import Layout from "../src/components/layouts";

export default function Home({ carList, filters, session }: any) {
  const [cars, setCars] = useState<ICar[]>(carList);
  const state = useStore();
  const router = useRouter();

  function selectCar(car: ICar) {
    state.setSelectedCar(car);
    router.push("/rent");
  }

  useEffect(() => {
    state.setLayout({ filters, email: session.user });
  }, []);

  useEffect(() => {
    filteredCarList(state.filters, carList, (carData: ICar[]) => {
      setCars(carData);
    });
  }, [state.filters]);

  return (
    <Group position="center">
      {cars.length > 0 ? (
        cars?.map((car: ICar) => (
          <CarCard rentClick={selectCar} item={car} key={car.id} />
        ))
      ) : (
        <p>No cars found</p>
      )}
    </Group>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  console.log(session);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  let result = await API.CAR_LIST(session);
  console.log(result);
  let filters = await API.FILTERS(session);
  return {
    props: {
      carList: result || [],
      filters,
      session,
    },
  };
}

Home.title = "Car List";
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
