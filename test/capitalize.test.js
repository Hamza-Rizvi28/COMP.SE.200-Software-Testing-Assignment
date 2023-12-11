import { expect } from 'chai'
import capitalize from '../src/capitalize.js' 

describe("test string capitalization", () => {
    it("UPPERCASE single word capitalization", () => {
        expect(capitalize("SOFTWARE")).to.equal("Software")
    });

    it("UPPERCASE multiple word capitalization", () => {
        expect(capitalize("SOFTWARE TESTING")).to.equal("Software testing")
    });

    it("LOWERCASE single word capitalization", () => {
        expect(capitalize("software")).to.equal("Software")
    });
    
    it("LOWERCASE multiple words capitalization", () => {
        expect(capitalize("software testing")).to.equal("Software testing")
    });

    it("Empty string capitalization", () => {
        expect(capitalize("")).to.equal("")
    });
});