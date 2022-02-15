import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/hooks";
import { EnvelopeClosedIcon, LockClosedIcon } from "@modulz/radix-icons";
import {
  TextInput,
  PasswordInput,
  Group,
  Button,
  Paper,
  Text,
  LoadingOverlay,
  useMantineTheme,
} from "@mantine/core";
import { signIn } from "next-auth/react";
export interface AuthenticationFormProps {
  noShadow?: boolean;
  noPadding?: boolean;
  noSubmit?: boolean;
  style?: React.CSSProperties;
}

export function AuthenticationForm({
  noShadow,
  noPadding,
  noSubmit,
  style,
}: AuthenticationFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      //   password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
    },

    errorMessages: {
      email: "Invalid email",
      //   password:
      //     'Password should contain 1 number, 1 letter and at least 6 characters',
    },
  });

  const handleSubmit = async (value: any) => {
    setLoading(true);
    setError("");
    signIn("credentials", {
      email: value.email,
      password: value.password,
    })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        console.log(err);
      });
  };

  return (
    <Paper
      padding={noPadding ? 0 : "lg"}
      shadow={noShadow ? "" : "sm"}
      style={{
        position: "relative",
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        ...style,
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <LoadingOverlay visible={loading} />
        <TextInput
          mt="md"
          id="email"
          required
          placeholder="Your email"
          label="Email"
          icon={<EnvelopeClosedIcon />}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          mt="md"
          id="password"
          required
          placeholder="Password"
          label="Password"
          icon={<LockClosedIcon />}
          {...form.getInputProps("password")}
        />
        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}
        {!noSubmit && (
          <Group position="apart" mt="xl">
            <Button color="blue" type="submit" id="login">
              Login
            </Button>
          </Group>
        )}
      </form>
    </Paper>
  );
}
