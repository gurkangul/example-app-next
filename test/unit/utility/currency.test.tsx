import { currencyFormat } from "../../../src/utility/currency";

it("utility check currencyFormat function", () => {
  expect(currencyFormat(10, "TRY")).toBe("₺10,00");
});
