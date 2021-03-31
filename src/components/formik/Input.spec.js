import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

const setUp = (props = {}) => {
  const component = shallow(<Input {...props} />);
  return component;
};

const props = {
  title: "haha",
  description: "desc",
  image: "hahahahah",
};

describe("<Input/>", () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });

  it("Should render without errors", () => {
    const wrapper = component.find(".form-control");
    expect(wrapper).toHaveLength(1);
  });

  // it("Should check function show hide password", () => {
  //   const toggleTypeMock = jest.fn();
  //   const toggleTypeButton = component.find(
  //     ".form-control__input-password button"
  //   );
  //   // toggleTypeButton.simulate("click");
  //   toggleTypeButton.prop("onClick")();
  //   expect(toggleTypeMock).toHaveBeenCalled();
  // });
});
