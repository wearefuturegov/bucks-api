import {prettyDays, truncate, prettyDistance} from "../lib/utils"

describe("truncate", () => {
    it("should cope with one day", () => {
        expect(prettyDays(["monday"])).toBe("Available on Mondays")
    })
    it("should produce shortened output if all days are given", () => {
        expect(prettyDays(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"])).toBe("Available every day")
    })
    it("should produce falsy output if given empty input", () => {
        expect(prettyDays([])).toBe(undefined)
    })
})

it("truncate", () => {
    expect(truncate("test text", 10)).toBe("test text")
    expect(truncate("test text test", 2)).toBe("test text...")
    expect(truncate("test text test", 1)).toBe(undefined)
    expect(truncate()).toBe(undefined)
})

it("pretty distance", () => {
    expect(prettyDistance(0)).toBe("Less than a mile away")
    expect(prettyDistance(1)).toBe("About a mile away")
    expect(prettyDistance(1.5)).toBe("About 2 miles away")
    expect(prettyDistance(1500)).toBe("About 1500 miles away")
    expect(prettyDistance()).toBe(undefined)
})