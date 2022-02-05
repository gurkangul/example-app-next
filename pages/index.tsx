import { getSession } from "next-auth/react";
import { ReactElement, useEffect, useState } from "react";
import {
  AppShell,
  Center,
  Group,
  Navbar,
  Badge,
  Header,
  Burger,
  MediaQuery,
} from "@mantine/core";
import { useRouter } from "next/router";
import FilterAccordion from "../src/components/accordions/filter-accordion";
import CarCard from "../src/components/cards/car-card";
import { ICar } from "../src/interfaces";
import { filteredCarList } from "../src/utility/filters";
import useStore from "../src/store";
import { API } from "../src/api";
import Layout from "../src/components/layouts";

export default function Home({ carList, filters }: any) {
  const [cars, setCars] = useState<ICar[]>(carList);
  const state = useStore();
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  function selectCar(car: ICar) {
    console.log("selectCar", car);
    state.setSelectedCar(car);
    router.push("/rent");
  }

  useEffect(() => {
    filteredCarList(state.filters, carList, (carData: ICar[]) => {
      setCars(carData);
    });
  }, [state.filters]);

  return (
    <AppShell
      header={
        <MediaQuery largerThan={1240} styles={{ display: "none" }}>
          <Header height={70} padding="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </div>
          </Header>
        </MediaQuery>
      }
      navbar={
        <Navbar
          hiddenBreakpoint={1240}
          hidden={!opened}
          width={{ base: 300 }}
          height={"%100"}
          padding="xs"
        >
          <Center style={{ height: 100 }}>
            <Badge variant="outline">filters</Badge>
          </Center>
          {filters && <FilterAccordion filters={filters}></FilterAccordion>}
        </Navbar>
      }
    >
      {/* <Grid justify="center" align="center">
        {cars.length > 0 ? (
          cars?.map((car: ICar) => (
            <Grid.Col lg={6} md={6} sm={6} key={car.id}>
              <CarCard item={car} />
            </Grid.Col>
          ))
        ) : (
          <p>No cars found</p>
        )}
      </Grid> */}
      <Group position="center">
        {cars.length > 0 ? (
          cars?.map((car: ICar) => (
            <CarCard rentClick={selectCar} item={car} key={car.id} />
          ))
        ) : (
          <p>No cars found</p>
        )}
      </Group>
    </AppShell>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  let result = await API.CAR_LIST(session);
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
