import { describe, expect, it } from "vitest";
import { canonical, readingTime } from "./content";

describe("content utilities", () => {
  it("rounds reading time up and never returns zero", () => {
    expect(readingTime(0)).toBe(1);
    expect(readingTime(221)).toBe(2);
  });
  it("builds a canonical sahith.dev URL", () => {
    expect(canonical("/writing")).toBe("https://sahith.dev/writing");
  });
});
