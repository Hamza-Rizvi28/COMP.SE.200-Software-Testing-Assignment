import { expect } from 'chai'
import endsWith from '../src/endsWith.js' 

describe("test endsWith function", () => {
    it("word ends with a specific character", () => {
        expect(endsWith("SOFTWARE", "E")).to.equal(true)
    });

    it("word ends with a string", () => {
        expect(endsWith("SOFTWARE TESTING", "TESTING")).to.equal(true)
    });

    //specific ecommerce usecase defined in part 1 testcases like validating email
    it("email ends with correct domain", () => {
        expect(endsWith("xyz@gmail.com", "@gmail.com")).to.equal(true)
    });

    //specific ecommerce usecase defined in part 1 testcases like validating email
    it("email ends with wrong domain", () => {
        expect(endsWith("xyz@gmail.co", "@gmail.com")).to.equal(false)
    });

    //specific ecommerce usecase defined in part 1 testcases like validating email
    it("email ends with wrong domain", () => {
        expect(endsWith("xyz!gmail.com", "@gmail.com")).to.equal(false)
    });
});