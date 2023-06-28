import { useState } from "react";
import Wrapper from "./Wrappers/Form";
import { useGlobalContext } from "./context";
import { toast } from "react-toastify";

const Form = () => {
  const [color, setColor] = useState("");
  const { colorGenerator } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const result = hexRegex.test(color);
    if (result) {
      colorGenerator(color);
    } else toast.error("incorrect value, only hex code");
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <input
        type="text"
        placeholder={color ? color : "#e91325"}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit" style={{ background: color }}>
        Submit
      </button>
    </Wrapper>
  );
};

export default Form;
