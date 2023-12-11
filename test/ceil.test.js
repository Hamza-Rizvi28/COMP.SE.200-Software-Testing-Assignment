import { expect } from 'chai'
import ceil from '../src/ceil.js' 

describe("test ceil function", () => {
    it("positive decimal values", () => {
        expect(ceil(4.006)).to.equal(5)
    });

    //prices are always rounded to 2 decimal places in our ecommerce store
    it("positive decimal values with 2 precision", () => {
        expect(ceil(6.004, 2)).to.equal(6.01)
    });

    it("positive decimal value with 3 precision", () => {
        expect(ceil(6.0048, 3)).to.equal(6.005)
    });

    it("negative decimal values with 2 precision", () => {
        expect(ceil(-6.004, 2)).to.equal(-6.00)
    });

    it("negative decimal value with 3 precision", () => {
        expect(ceil(-6.0048, 3)).to.equal(-6.004)
    });
});