import React, { useState } from "react";
import { Paper, Text, Badge, Button, Group, Image, Space } from "@mantine/core";
import { currencyFormat } from "../../utility/currency";
import Img from "../../components/image";
import { ICar } from "../../interfaces";

export default function CarCard({
  item,
  rentClick,
  isButton = true,
}: {
  item: ICar;
  rentClick?: any;
  isButton?: boolean;
}) {
  const [car, setCar] = useState<ICar>({ ...item });

  return (
    <div style={{ width: 420, marginTop: 20 }}>
      <Paper padding={10} shadow="xs">
        <Image src={car?.vendor?.logoUrl} height={40} fit="contain" />
        <Img image={car.car?.image} />
        <Group position="apart" style={{ marginBottom: 5 }}>
          <Text weight={500}>{car.car.brand?.name}</Text>
          <Badge size="lg" variant="outline">
            {currencyFormat(car.pricing.totalPrice, car?.currency)}
          </Badge>
        </Group>
        <Space h={20} />
        <Group position="apart" style={{ marginBottom: 5 }}>
          <Badge>{car.car.transmission}</Badge>
          <Badge>{car.car.fuel}</Badge>
          <Badge>{car.car.class}</Badge>
        </Group>
        <Space h={10} />
        {isButton && (
          <Button
            variant="light"
            color="green"
            fullWidth
            style={{ marginTop: 14 }}
            onClick={() => rentClick(car)}
          >
            Rent Now
          </Button>
        )}
      </Paper>
    </div>
  );
}
