import {prettyDays} from "../utils"

it("Pretty days", ()=>{

    expect(prettyDays(["monday"]))
        .toBe("Available on Mondays")

    expect(prettyDays(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]))
        .toBe("Available every day")

    expect(prettyDays([]))
        .toBe(false)

})