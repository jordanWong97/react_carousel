import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card caption="test" src="test1" currNum="1" totalNum="1" />);
  //{caption, src, currNum, totalNum}
});
// end

it("has the correct alt text & src", function () {
  const { container, debug } =
    render(<Card caption="test" src="test1" currNum="1" totalNum="1" />);
  const img = container.querySelector("img");
  debug(img);

  expect(img).toHaveClass("Card-image");
  expect(img).toContainHTML("<h4");
  expect(img).toContainHTML('src="test1"');
});
// end

it("matches snapshot", function () {
  const { container } =
    render(<Card caption="test" src="test1" currNum="1" totalNum="1" />);
  expect(container).toMatchSnapshot();
});
// end