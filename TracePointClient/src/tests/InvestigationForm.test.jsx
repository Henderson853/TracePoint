import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InvestigationForm from "../components/InvestigationForm";

const suspects = [
  { suspectId: 1, name: "Alex Morgan" },
  { suspectId: 2, name: "Jamie Smith" },
  { suspectId: 3, name: "Taylor Williams" },
];

function renderForm(overrides = {}) {
  const onSubmit = vi.fn();
  const props = {
    suspects,
    suspectId: "",
    onSuspectChange: vi.fn(),
    conclusion: "",
    onConclusionChange: vi.fn(),
    onSubmit,
    isSubmitting: false,
    ...overrides,
  };
  render(<InvestigationForm {...props} />);
  return { onSubmit, props };
}

describe("InvestigationForm validation", () => {
  it("Test 1: cannot submit when no suspect has been selected", async () => {
    const user = userEvent.setup();
    const { onSubmit } = renderForm({ suspectId: "", conclusion: "Jamie had the access card." });

    await user.click(screen.getByRole("button", { name: /submit investigation/i }));

    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getByRole("alert")).toHaveTextContent(/select a suspect/i);
  });

  it("Test 2: cannot submit when the conclusion is empty", async () => {
    const user = userEvent.setup();
    const { onSubmit } = renderForm({ suspectId: "2", conclusion: "" });

    await user.click(screen.getByRole("button", { name: /submit investigation/i }));

    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getByRole("alert")).toHaveTextContent(/enter a conclusion/i);
  });

  it("Test 3: a valid investigation can be submitted", async () => {
    const user = userEvent.setup();
    const { onSubmit } = renderForm({
      suspectId: "2",
      conclusion: "Jamie Smith's access card was used minutes before the theft.",
    });

    await user.click(screen.getByRole("button", { name: /submit investigation/i }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});