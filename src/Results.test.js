import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Results from "./Results";

Enzyme.configure({ adapter: new Adapter() });

it("Renders component correctly given props", () => {
  const testHtml =
    '<div class="card"><div class="card-body"><h5 class="card-title">string</h5><p class="card-text"><strong>DOB:</strong> string</p><p class="card-text"><strong>Gender:</strong> string</p></div></div>';
  const props = {
    data: [
      {
        name: "string",
        birth_year: "string",
        gender: "string"
      }
    ]
  };
  const wrapper = shallow(<Results {...props} />);
  expect(wrapper.html()).toEqual(testHtml);
});
