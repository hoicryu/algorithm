import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Fibonacci from "./Fibonacci";

describe("Fibonacci component", () => {
  it("renders the input field and button", () => {
    render(<Fibonacci />);
    const input = screen.getByPlaceholderText("숫자를 입력하세요");
    const button = screen.getByRole("button", { name: "계산하기" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("displays the correct Fibonacci result when valid input is entered", async () => {
    render(<Fibonacci />);
    const input = screen.getByPlaceholderText("숫자를 입력하세요");
    const button = screen.getByRole("button", { name: "계산하기" });

    await userEvent.type(input, "10");
    await userEvent.click(button);

    const result = await screen.findByText("결과: 55");
    expect(result).toBeInTheDocument();
  });
});
