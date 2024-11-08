import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
});

afterAll(() => {
  console.warn.mockRestore();
});
