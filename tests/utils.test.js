import {
    prettyDays, 
    truncate, 
    prettyDistance, 
    prettyList,
    prettyFeatures
} from "../lib/utils"

const allDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

it("pretty days", () => {
    expect(prettyDays(["monday"])).toBe("On Mondays")
    expect(prettyDays(allDays)).toBe("On every day")
    expect(prettyDays([])).toBeFalsy()
})

it("truncate", () => {
    expect(truncate("test text", 10)).toBe("test text")
    expect(truncate("test text test", 2)).toBe("test text...")
    expect(truncate("test text test", 1)).toBeFalsy()
    expect(truncate()).toBeFalsy()
})

it("pretty distance", () => {
    expect(prettyDistance(0)).toBe("Less than a mile away")
    expect(prettyDistance(1)).toBe("About a mile away")
    expect(prettyDistance(1.5)).toBe("About 2 miles away")
    expect(prettyDistance(1500)).toBe("About 1500 miles away")
    expect(prettyDistance()).toBeFalsy()
})

it("pretty list", () => {
    expect(prettyList()).toBeFalsy()
    expect(prettyList([])).toEqual(expect.arrayContaining([]))
    expect(prettyList(["el", "el2"])).toEqual(expect.arrayContaining(["El", "El2"]))
})

it("pretty features", ()=>{
    expect(prettyFeatures({
        distance: 100,
        promoted: true,
        accessibility: [
            "building wheelchair access"
        ],
        days: allDays
    })).toBe("<strong>Recommended</strong>  <span aria-hidden='true'>·</span>  About 100 miles away  <span aria-hidden='true'>·</span>  Wheelchair accessible  <span aria-hidden='true'>·</span>  On every day")
    
    expect(prettyFeatures({
        promoted: false,
        accessibility: null,
        days: ["monday"]
    })).toBeFalsy()

    expect(prettyFeatures({
        promoted: true,
        accessibility: [
            "building wheelchair access"
        ],
        days: allDays
    })).toBe("<strong>Recommended</strong>  <span aria-hidden='true'>·</span>  Wheelchair accessible  <span aria-hidden='true'>·</span>  On every day")
})