import { fireEvent, render } from "@testing-library/react";
import CreditCardInput from "../../../../src/components/inputs/credit-card-input";
import CreditDateInput from "../../../../src/components/inputs/credit-date-input";

const setupCreditCard = () => {
  let onC = jest.fn();
  const utils = render(<CreditCardInput onChange={onC} />);
  const input = utils.getByLabelText("credit-card");
  return {
    input,
    ...utils,
  };
};

const setupCreditDate = () => {
  let onC = jest.fn();
  const utils = render(<CreditDateInput onChange={onC} />);
  const input = utils.getByLabelText("credit-card-date");
  return {
    input,
    ...utils,
  };
};

test("CreditCardInput", () => {
  const { input }: any = setupCreditCard();
  fireEvent.change(input, { target: { value: "5890040000000016" } });

  expect(input?.value).toBe("5890 0400 0000 0016");
});

test("CreditDateInput", () => {
  const { input }: any = setupCreditDate();
  fireEvent.change(input, { target: { value: "1122" } });

  expect(input?.value).toBe("11/22");
});
