import { expect } from 'chai'
import add from '../src/add.js' 

describe("test add function", () => {
    it("add two positive integer values", () => {
        expect(add(1,2)).to.equal(3)
    });

    it("add two negative integer values", () => {
        expect(add(-1,-2)).to.equal(-3)
    });

    it("add two positive decimal values", () => {
        expect(add(1.5,2.5)).to.equal(4)
    });

    it("add two negative decimal values", () => {
        expect(add(-1.5,-2.5)).to.equal(-4)
    });

    it("add two negative decimal values", () => {
        expect(add(-1.5,-2.5)).to.equal(-4)
    });
});