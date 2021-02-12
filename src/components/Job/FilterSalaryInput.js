import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  > div .btn {
    background-color: #eaecee !important;
    border: 1px solid #d4d4d4;
    color: #000;
    margin: 0 !important;
    text-align: center;
    font-weight: 500;

    &:hover {
      color: #000;
    }
  }
`;

function FilterSalaryInput(props) {
  return (
    <InputWrapper className="input-group">
      <input
        type="text"
        className="form-control"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        maxlength="15"
        onChange={props.onChange}
        onFocus={(e) => {
          props.checkLocation();
        }}
        disabled={props.disable}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          style={{ width: "50px" }}
          type="button"
        >
          {props.currency}
        </button>
      </div>
    </InputWrapper>
  );
}

export default FilterSalaryInput;
