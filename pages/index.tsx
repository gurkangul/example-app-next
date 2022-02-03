import { API } from "../api";
import { getSession } from "next-auth/react";
import Layout from "../components/layouts";
import { ReactElement, useEffect, useState } from "react";
import CarCard from "../components/cards/car-card";
import { ICar } from "../interfaces";
import {
  AppShell,
  Center,
  Group,
  Navbar,
  Badge,
  Header,
  Burger,
  MediaQuery,
  Grid,
} from "@mantine/core";
import FilterAccordion from "../components/accordions/filter-accordion";
import useStore from "../store";
import { filteredCarList } from "../utility/filters";

export default function Home({ carList, filters }: any) {
  const [cars, setCars] = useState<ICar[]>(carList);
  const state = useStore();
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    filteredCarList(state.filters, carList, (carData: ICar[]) => {
      setCars(carData);
    });
  }, [state.filters]);

  return (
    <AppShell
      header={
        <Header height={70} padding="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="lg" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </MediaQuery>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          hiddenBreakpoint="lg"
          hidden={!opened}
          width={{ base: 300 }}
          height={500}
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
          cars?.map((car: ICar) => <CarCard item={car} key={car.id} />)
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
