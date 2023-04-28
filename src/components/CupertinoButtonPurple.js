import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonPurple(props) {
  return (
    <Container {...props}>
      <Caption>Button</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #5856D6;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Caption = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonPurple;
