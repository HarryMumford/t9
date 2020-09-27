import React from "react";
import { shallow } from "enzyme";
import Display from "./Display";
import * as redux from "react-redux";

const spy = jest.spyOn(redux, "useSelector");
spy.mockReturnValue({ payload: { combinations: [] } });

describe("Display", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });
});
