import PropTypes from "prop-types";
import Wrapper from "./Wrappers/ColorList";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";
const ColorList = ({ colorList }) => {
  ColorList.propTypes = {
    colorList: PropTypes.array,
  };
  return (
    <Wrapper>
      {colorList.map((color,index) => {
        return (
          <SingleColor key={nanoid()} index={index} weight={color.weight} hex={color.hex} />
        );
      })}
    </Wrapper>
  );
};

export default ColorList;
