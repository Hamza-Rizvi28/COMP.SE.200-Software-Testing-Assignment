import { expect } from "chai"
import filter from "../src/filter.js"

describe("test filter function", () => {
    
    const users = [
        { user: "barney", active: true },
        { user: "fred", active: false },
    ]

    it("returns an array of active users", () => {
        const result = filter(users, ({ active }) => active)
        expect(result).to.deep.equal([{ user: "barney", active: true }])
    });

    it("returns an array of inactive users", () => {
        const result = filter(users, ({ active }) => !active)
        expect(result).to.deep.equal([{ user: "fred", active: false }])
    });

    it("should return a new array with even values ", () => {
        const array = [1, 2, 3, 4, 5]
        const result = filter(array, (num) => num % 2 == 0)
        expect(result).to.not.equal([2,4])
    });

    it("should return an empty array if the input is an empty array", () => {
        const result = filter([], () => true)
        expect(result).to.deep.equal([[]])
    });
});