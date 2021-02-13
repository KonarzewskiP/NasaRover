import styled from "styled-components";

export const RadioControl = styled.span`
  margin: 0 0.2em;
  display: grid;
  place-items: center;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.1em solid white;
  transform: translateY(0em);
`

export  const LabelWrapper = styled.label`
  font-size: ${({large}) => large ? "1.5rem" : "1rem"};
  color: white;

  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.2em;

  input + ${RadioControl}::before {
    content: "";
    width: 0.5em;
    height: 0.5em;
    box-shadow: inset .5em .5em white;
    border-radius: 50%;
    transition: 180ms transform ease-in-out;
    transform: scale(0);
  }

  input:checked + ${RadioControl}::before {
    transform: scale(1);
    box-shadow: 0 0 0 0.03em #fff, 0 0 0.15em 0.1em red;
  }
`
export const RadioInput = styled.span`
  display: flex;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:focus + ${RadioControl} {
      box-shadow: 0 0 0 0.03em #fff, 0 0 0.15em 0.2em indianred;
    }
  }
`
export const RadioLabel = styled.span`
  line-height: 1;
`