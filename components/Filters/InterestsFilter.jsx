import React from "react"
import Filter from "./Filter"
import Checkbox from "../Checkbox"

const InterestsFilter = () => 
    <Filter name="Interests">

        <Checkbox name="category" value="active">Staying active</Checkbox>
        <Checkbox name="category" value="social">Socialising</Checkbox>
        <Checkbox name="category" value="support">Support with daily tasks</Checkbox>
        <Checkbox name="category" value="learning">Learning new skills</Checkbox>
        <Checkbox name="category" value="cultural">Culture and visiting new places</Checkbox>

    </Filter>

export default InterestsFilter