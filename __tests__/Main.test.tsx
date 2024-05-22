import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Main from "../app/page";

test("Pages Router", () => {
  render(<Main />);
  const main = within(screen.getByRole("main"));
  const title = main.getByTestId("title").firstChild
  expect(title).toBeDefined();
  expect(title?.textContent).toBe("Top-level page.");
  expect(title?.nodeName).toBe("STRONG");

  // const footer = within(screen.getByRole("contentinfo"));
  // const link = within(footer.getByRole("link"));
  // expect(link.getByRole("img", { name: /vercel logo/i })).toBeDefined();
});