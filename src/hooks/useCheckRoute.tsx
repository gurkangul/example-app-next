import { Center, Loader } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";

export default function useCheckRoute() {
  const router = useRouter();

  if (process.browser) {
    router.push("/");
  }
  return (
    <Center style={{ height: 500 }}>
      <Loader />
    </Center>
  );
}
