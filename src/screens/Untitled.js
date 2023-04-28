import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import CupertinoButtonPurple from "../components/CupertinoButtonPurple";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";

function Untitled(props) {
  return (
    <>
      <CupertinoButtonInfo
        style={{
          height: 44,
          width: 204,
          marginTop: 294,
          marginLeft: 85
        }}
      ></CupertinoButtonInfo>
      <CupertinoButtonPurple
        style={{
          height: 44,
          width: 204,
          marginTop: 14,
          marginLeft: 85
        }}
      ></CupertinoButtonPurple>
      <CupertinoButtonSuccess
        style={{
          height: 44,
          width: 204,
          marginTop: 10,
          marginLeft: 85
        }}
      ></CupertinoButtonSuccess>
    </>
  );
}

export default Untitled;
