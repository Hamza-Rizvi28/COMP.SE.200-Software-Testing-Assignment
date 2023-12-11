import { expect } from "chai"
import eq from "../src/eq.js"

describe("test eq function", () => {
  it("returns true for equal primitive values", () => {
    expect(eq(5, 5)).to.be.true
    expect(eq("software testing", "software testing")).to.be.true
  });

  it("returns false for different primitive values", () => {
    expect(eq(1, 2)).to.be.false
    expect(eq("software", "testing")).to.be.false
  });

  it("returns true for equal objects", () => {
    const priceObj = { price: "25.50" }
    expect(eq(priceObj, priceObj)).to.be.true
  });

  it("returns false for different objects", () => {
    const priceObj1 = { price: "25.50" }
    const priceObj2 = { price: "25.50" }
    expect(eq(priceObj1, priceObj2)).to.be.false
  });

  it("returns false for primitive and object equality", () => {
    expect(eq(25.50, { price: "25.50" })).to.be.false
  });
})