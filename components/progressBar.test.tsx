import { render, screen } from "@testing-library/react";
import ProgressBar from "./progressBar";

describe("ProgressBar", () => {
  test("renders ProgressBar correctly", () => {
    const testValue = 25;
    const testMaxValue = 100;
    const testLabel = "Test Progress";

    render(
      <ProgressBar
        value={testValue}
        maxValue={testMaxValue}
        label={testLabel}
      />
    );

    // Check if the label is rendered
    expect(screen.getByText(testLabel)).toBeInTheDocument();

    // Check if the progress bar element has the correct attributes
    // The underlying HeroUI ProgressBar renders a div with role="progressbar"
    const progressBarElement = screen.getByRole("progressbar");
    expect(progressBarElement).toBeInTheDocument();
    expect(progressBarElement).toHaveAttribute("aria-valuenow", testValue.toString());
    expect(progressBarElement).toHaveAttribute("aria-valuemax", testMaxValue.toString());
  });
});
