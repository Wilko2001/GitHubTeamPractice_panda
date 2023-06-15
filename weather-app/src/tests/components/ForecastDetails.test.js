import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    wind: {
      speed: 18,
      direction: "n",
    },
    humidity: 20,
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("render correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date");
    expect(getByText("12°C")).toHaveClass("forecast-details__temperature-min");
    expect(getByText("22°C")).toHaveClass("forecast-details__temperature-max");
    expect(getByText("18 mph")).toHaveClass("forecast-details__wind-speed");
    expect(getByText("n")).toHaveClass("forecast-details__wind-direction");
    expect(getByText("20 %")).toHaveClass("forecast-details__humidity");
  });
});
