import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { pokemonResponse } from "./components/__tests__/mockPokemon";
import "whatwg-fetch";

export const restHandlers = [
    http.get("https://pokeapi.co/api/v2/pokemon", () => {
        return HttpResponse.json(pokemonResponse)
    })
];
const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());