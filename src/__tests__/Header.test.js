import React from "react"
import { shallow } from "enzyme"

import { Header } from "../components/Header"

describe("<Header />", () => {
  test("should render", () => {
    const header = shallow(<Header />)
    expect(header.find("header").exists()).toEqual(true)
  })
})
