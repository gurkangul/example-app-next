import { useEffect, useState } from "react";
import {
  AppShell,
  Badge,
  Burger,
  Center,
  Container,
  Group,
  Header,
  MediaQuery,
  Text,
  Navbar,
} from "@mantine/core";
import { signOut, useSession } from "next-auth/react";

import { useRouter } from "next/router";
import React from "react";
import FilterAccordion from "../accordions/filter-accordion";
import useStore from "../../store";

export default function Layout(props: any) {
  const state = useStore();

  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [opened, setOpened] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (!loading) {
      if (
        session?.expires &&
        new Date(session?.expires).getTime() < new Date().getTime()
      ) {
        signOut();
      } else if (!session) {
        router.push("/login");
      }
    }
  }, [loading]);

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setShowNav(true);
        break;
      default:
        setShowNav(false);
        break;
    }
  }, [router.pathname]);

  return (
    <>
      <Container size={1300}>
        <AppShell
          header={
            <Header height={70} padding="md">
              <Group position="apart">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  {showNav && (
                    <MediaQuery largerThan={1240} styles={{ display: "none " }}>
                      <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        mr="xl"
                      />
                    </MediaQuery>
                  )}
                </div>
                <Badge variant="outline">{state.layout.email}</Badge>
              </Group>
            </Header>
          }
          navbar={
            <Navbar
              style={{ display: showNav ? "" : "none" }}
              hiddenBreakpoint={1240}
              hidden={!opened}
              width={{ base: 300 }}
              height={"%100"}
              padding="xs"
            >
              <Center style={{ height: 100 }}>
                <Text color="gray">Filter</Text>
              </Center>
              {state.layout.filters && (
                <FilterAccordion
                  filters={state.layout.filters}
                ></FilterAccordion>
              )}
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
          <main>{props.children}</main>
        </AppShell>
      </Container>
    </>
  );
}
