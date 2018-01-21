import React from "react"
import ReactDOM from "react-dom"
import { shallow } from "enzyme"
import App from "../App"

describe("<App />", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toHaveLength(1)
  })
})
