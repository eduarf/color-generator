import styled from "@emotion/styled";

const Wrapper = styled.form`
display: flex;
justify-content: center;
input[type='color']{
    appearance: none;
    -webkit-appearance: none;
    height: 5rem;
    width: 5rem;
}
input[type='text'] {
    padding: .8rem 2rem;
    font-size: 1.6rem;
}
button {
    padding: 1rem 1.8rem;
    background-color: rgb(45, 161, 45);
    color: #fff;
    font-size: 1.6rem;
    border: none;
    border-radius: 1px;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
}
`;

export default Wrapper;