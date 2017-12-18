import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Group } from "./group";

configure({ adapter: new Adapter() });

test("it defines a scope", () => {
  const x = shallow(<Group scope="all" />);
  expect(x.text()).toContain('When all of the conditions match');
});