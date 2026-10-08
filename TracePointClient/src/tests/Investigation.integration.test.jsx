import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { InvestigationProvider } from "../context/InvestigationContext";
import InvestigationPage from "../pages/InvestigationPage";

const suspects = [
  { suspectId: 1, name: "Alex Morgan", occupation: "Software Developer" },
  { suspectId: 2, name: "Jamie Smith", occupation: "Security Officer" },
  { suspectId: 3, name: "Taylor Williams", occupation: "Research Assistant" },
];

function renderPage() {
  render(
    <MemoryRouter>
      <InvestigationProvider>
        <InvestigationPage />
      </InvestigationProvider>
    </MemoryRouter>
  );
}

describe("Investigation submission integration", () => {
  beforeEach(() => {
    global.fetch = vi.fn((url) => {
      if (url.toString().endsWith("/suspects")) {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(suspects),
        });
      }
      if (url.toString().endsWith("/investigations")) {
        return Promise.resolve({
          ok: true,
          status: 201,
          json: () =>
            Promise.resolve({
              investigationId: 101,
              caseId: 1,
              suspectId: 2,
              conclusion: "Jamie Smith's access card was used minutes before the theft.",
            }),
        });
      }
      return Promise.reject(new Error(`Unexpected fetch to ${url}`));
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("POSTs the investigation to the API and shows the success message once it is stored", async () => {
    const user = userEvent.setup();
    renderPage();

    // Wait for suspects to load from the API into the dropdown.
    await screen.findByRole("option", { name: "Jamie Smith" });

    await user.selectOptions(screen.getByLabelText(/suspect/i), "2");
    await user.type(
      screen.getByLabelText(/conclusion/i),
      "Jamie Smith's access card was used minutes before the theft."
    );
    await user.click(screen.getByRole("button", { name: /submit investigation/i }));

    // The API call itself: POST to /investigations with the right payload.
    await waitFor(() => {
      const investigationsCall = global.fetch.mock.calls.find(([url]) =>
        url.toString().endsWith("/investigations")
      );
      expect(investigationsCall).toBeTruthy();
      const [, options] = investigationsCall;
      const body = JSON.parse(options.body);
      expect(body.suspectId).toBe(2);
      expect(body.conclusion).toMatch(/Jamie Smith/);
    });

    // The UI reflects that it was stored successfully.
    expect(
      await screen.findByText(/investigation submitted successfully/i)
    ).toBeInTheDocument();
  });
});