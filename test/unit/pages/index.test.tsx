import { render, screen } from "@testing-library/react";
import Home, { getServerSideProps } from "../../../pages/index";
import { ICar } from "../../../src/interfaces";

describe("Home", () => {
  const TEST_CAR: ICar[] = [
    {
      car: {
        name: "test2",
        transmission: "manuelg",
        brand: {
          name: "ford2",
        },
        class: "sss",
        fuel: "dizel",
        image: {
          large: "large",
          medium: "medium",
          small: "small",
        },
      },
      id: 1,
      vendor: {
        logoUrl: "logo",
        name: "vendor",
      },
      currency: "try",
      pricing: {
        totalPrice: 222,
      },
    },
    {
      car: {
        name: "test",
        transmission: "manuel",
        brand: {
          name: "ford",
        },
        class: "ss",
        fuel: "dizel",
        image: {
          large: "large",
          medium: "medium",
          small: "small",
        },
      },
      id: 2,
      vendor: {
        logoUrl: "logo",
        name: "vendor",
      },
      currency: "eur",
      pricing: {
        totalPrice: 100,
      },
    },
  ];
  it("Home Screen", async () => {
    const test_session = {
      user: "gg@gg.com",
      expires: "2022-03-15T15:37:33.913Z",
      token: "imparator fatih terim",
    };
    render(<Home carList={TEST_CAR} filters={[]} session={test_session} />);
    TEST_CAR.forEach((car: ICar) => {
      expect(screen.getAllByTestId(car.id));
    });
  });
});
