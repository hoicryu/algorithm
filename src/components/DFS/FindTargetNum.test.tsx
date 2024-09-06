import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FindTargetNum from "./FindTargetNum";

describe("FindTargetNum Component", () => {
  test("renders component and handles input and calculation", () => {
    render(<FindTargetNum />);

    expect(
      screen.getByText("숫자들의 조합으로 목표숫자만들기")
    ).toBeInTheDocument();

    const numbersInput = screen.getByLabelText(
      /숫자들 \(콤마로 구분해주세요\)/i
    ) as HTMLInputElement;
    fireEvent.change(numbersInput, { target: { value: "1, 2, 3, 4, 5" } });
    expect(numbersInput.value).toBe("1, 2, 3, 4, 5");

    // Input target number
    const targetInput = screen.getByLabelText(/목표숫자/i) as HTMLInputElement;
    fireEvent.change(targetInput, { target: { value: "3" } });
    expect(targetInput.value).toBe("3");

    const calculateButton = screen.getByText(/계산하기/i);
    fireEvent.click(calculateButton);

    expect(screen.getByText(/목표숫자 조합 방법수/i)).toBeInTheDocument();
  });

  test("shows alert when target number is invalid", () => {
    const originalAlert = window.alert;
    window.alert = jest.fn();

    render(<FindTargetNum />);

    const calculateButton = screen.getByText(/계산하기/i);
    fireEvent.click(calculateButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Please enter a valid target number."
    );

    window.alert = originalAlert;
  });
});
