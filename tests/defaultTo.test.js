import { expect } from "chai"
import defaultTo from "../src/defaultTo.js"

describe("test defaultTo function", () => {
    let defaultPrice = 0.0;
    it("does not return default value when user provided a value", () => {
        expect(defaultTo(22.0, defaultPrice)).to.equal(22.0);
    });

    it("does return default value when user didn't provide a value", () => {
        expect(defaultTo(undefined, defaultPrice)).to.equal(0.0);
    });
});