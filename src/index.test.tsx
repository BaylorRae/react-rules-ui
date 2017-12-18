import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Greeter from "./index";

configure({ adapter: new Adapter() });

test("should greet user", () => {
  const x = shallow(<Greeter name="bob" />);
  expect(x.text()).toEqual("Welcome bob");
});
