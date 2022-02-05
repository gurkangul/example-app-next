import { ICar } from "../src/hooks/interfaces";

export function filteredCarList(
  filter: any,
  carList: ICar[],
  callbacks: Function
) {
  if (
    filter["vendors"]?.length ||
    filter["transmission"]?.length ||
    filter["brand"]?.length
  ) {
    callbacks(
      carList.filter(
        (car) =>
          (!filter["vendors"]?.length ||
            filter["vendors"]?.includes(car.vendor.name)) &&
          (!filter["transmission"]?.length ||
            filter["transmission"]?.includes(car.car.transmission)) &&
          (!filter["brand"]?.length ||
            filter["brand"]?.includes(car.car.brand?.name))
      )
    );
  } else {
    callbacks(carList);
  }
}
