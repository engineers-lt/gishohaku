import React from "react"
import { css } from "@emotion/core"

const sectionHeader = css`
  font-size: 32px;
  position: relative;
  text-align: center;
  margin-top: 16px;
  font-family: 游明朝, "Yu Mincho", YuMincho, "Hiragino Mincho ProN",
    "Hiragino Mincho Pro", HGS明朝E;
  font-weight: 400;
  color: #1d272d;
  letter-spacing: 3px;

  &:after {
    content: attr(data-text);
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    color: #2b5773;
    opacity: 0.1;
    font-size: 76px;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    letter-spacing: 4px;
  }
`

export default ({ children, text }) => <h2 css={sectionHeader} data-text={text}>{children}</h2>