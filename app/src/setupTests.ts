import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

export const restHandlers = [];
const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());