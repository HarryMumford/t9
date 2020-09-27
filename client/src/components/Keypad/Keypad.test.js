import React from "react";
import { shallow } from "enzyme";
import Keypad from "./Keypad";
import Key from "../Key/Key";
import * as redux from "react-redux";

const spy = jest.spyOn(redux, "useDispatch");
spy.mockReturnThis();

describe("Keypad", () => {
  it("renders without crashing", () => {
    shallow(<Keypad />);
  });

  it("renders 12 Key components", () => {
    const wrapper = shallow(<Keypad />);
    expect(wrapper.find(Key).length).toEqual(12);
  });
});
