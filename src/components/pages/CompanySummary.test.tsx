import React from "react";
import { render, waitFor, screen } from "@testing-library/react";

import CompanySummary from "./CompanySummary";

jest.mock("react-chartjs-2", () => ({
  Line: () => null,
}));

test("renders a the correct headings", async () => {
  render(<CompanySummary />);

  expect(screen.getByRole("heading", { name: "Overview" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Financials" })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Ratios" })).toBeInTheDocument();
});

test("renders a search bar", async () => {
  const { getByPlaceholderText } = render(<CompanySummary />);
  const searchInput = getByPlaceholderText("Search");
  expect(searchInput).toBeInTheDocument();
});
