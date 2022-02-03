import { useEffect } from "react";
import { Container } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";

import { useRouter } from "next/router";
import React from "react";

export default function Layout(props: any) {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const router = useRouter();

  useEffect(() => {
    console.log(loading);
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

  return (
    <>
      <Container size={1300}>
        <main>{props.children}</main>
      </Container>
    </>
  );
}
