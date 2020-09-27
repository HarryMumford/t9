import React from "react";
import { shallow } from "enzyme";
import Display from "./Display";
import * as redux from "react-redux";

const mockedCombinations = ["a", "b", "c"];

const spy = jest.spyOn(redux, "useSelector");
spy.mockReturnValue({ payload: { combinations: mockedCombinations } });

describe("Display", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });
});
