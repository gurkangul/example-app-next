import { Center, Container, Space } from "@mantine/core";
import { getSession, GetSessionParams } from "next-auth/react";
import { AuthenticationForm } from "../components/form/register";

export async function getServerSideProps(ctx: GetSessionParams | undefined) {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

export default function Login() {
  return (
    <Container fluid={true} padding={8}>
      <Space h={100}></Space>
      <Center>
        <AuthenticationForm></AuthenticationForm>
      </Center>
    </Container>
  );
}
