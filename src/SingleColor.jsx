import { toast } from "react-toastify";
import Wrapper from "./Wrappers/SingleColor";
import PropTypes from "prop-types";
const SingleColor = ({ weight, hex, index }) => {
  SingleColor.propTypes = {
    weight: PropTypes.number,
    hex: PropTypes.string,
    index: PropTypes.number,
  };
  const handleClick = () => {
    navigator.clipboard
      .writeText(hex)
      .then(() => {
        toast.success(`copied #${hex}`);
      })
      .catch((error) => {
        toast.error(`copied ${error}`);
      });
  };
  return (
    <Wrapper style={{ background: `#${hex}` }} onClick={handleClick}>
      <p style={{ color: index > 10 ? "white" : "black" }}>{weight}%</p>
      <p style={{ color: index > 10 ? "white" : "black" }}>#{hex}</p>
    </Wrapper>
  );
};

export default SingleColor;
