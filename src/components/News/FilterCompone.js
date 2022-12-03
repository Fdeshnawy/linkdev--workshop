import React from "react";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
Form.Control  = styled.input.attrs(props => ({
  type: "text",
  size: props.small ? 5 : undefined
}))`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
`;


const FilterComponent = (props) => (
  <>
  	
    <Form.Control 
    className="me-3"
    id="search"
    type="text"
   
    value={props.filterText}
    onChange={props.onFilter}
    style={{borderRadius:'5px', padding:'1.5%'}}
     />

    
  </>
);

export default FilterComponent;
