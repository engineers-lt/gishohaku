import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"

import logo from "../../images/logo.png"

import { media, colors } from "src/utils/style"

// break for smartphone
const Br4Sm = () => (
  <br
    css={css`
      display: none;
      @media ${media.small} {
        display: inline;
      }
    `}
  />
)

const ParallaxBackground = () => {
  const [translateY, updateTranslateY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const yOffset = window.pageYOffset
        updateTranslateY(yOffset * -0.2)
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <div
    css={css`
      background-image: url(https://img.esa.io/uploads/production/attachments/6967/2019/03/14/4651/30015db4-c726-49d1-9e1b-541a2307db50.jpg);
      background-size: cover;
      background-position: center center;
      position: absolute;
      top: 0;
      right: 0;
      bottom: -120px;
      left: 0;
      z-index: -1;
    `}
    style={{ transform: `translateY(${translateY}px)`}}
  />
}

const Hero = () => {
  return (
    <section
      css={css`
        position: relative;
        color: white;
        text-align: center;
        padding: 60px 0 100px;
        @media ${media.small} {
          padding: 20px 0 60px 0;
        }
      `}
    >
      <ParallaxBackground/>
      <div
        css={css`
          position: absolute;
          right: 0;
          bottom: 0;
          border-top: 60px solid transparent;
          border-left: 0 solid transparent;
          border-right: 50vw solid white;
          border-bottom: 0 solid white;
        `}
      />
      {/* <div
      css={css`
        position: absolute;
        right: 0;
        top: 0;
        border-bottom: 60px solid transparent;
        border-left: 0 solid transparent;
        border-right: 50vw solid white;
        border-top: 0 solid white;
      `}
    /> */}
      <div
        css={css`
          position: absolute;
          left: 0;
          bottom: 0;
          border-top: 60px solid transparent;
          border-right: 0 solid transparent;
          border-left: 50vw solid white;
          border-bottom: 0 solid white;
        `}
      />
      {/* <div
      css={css`
        position: absolute;
        left: 0;
        top: 0;
        border-bottom: 60px solid transparent;
        border-right: 0 solid transparent;
        border-left: 50vw solid white;
        border-top: 0 solid white;
      `}
    /> */}
      <div
        css={css`
          margin: 0 auto;
          width: 300px;
          height: 300px;
          @media ${media.small} {
            width: 260px;
            height: 260px;
          }
        `}
      >
        <img src={logo} alt="技術書同人誌博覧会" />
      </div>
      <h1
        css={css`
          font-weight: bold;
          font-size: 32px;
          @media ${media.small} {
            font-size: 28px;
          }
        `}
      >
        「技術書」という、
        <Br4Sm />
        アウトプットの形。
      </h1>
      <p
        css={css`
          font-size: 20px;
          font-weight: bold;
          margin-top: 4px;
          @media ${media.small} {
            font-size: 16px;
          }
        `}
      >
        2019.07.27(Sat.) 10:00 <br />
        @大田区産業プラザPiO
      </p>
      <a
        href="#"
        css={css`
          background-color: #aaaaaa;
          font-size: 16px;
          font-weight: bold;
          color: white;
          padding: 11px 36px 13px;
          min-width: 270px;
          display: inline-block;
          border-radius: 30px;
          margin-top: 24px;
          text-decoration: none;
        `}
      >
        サークル参加申し込み
      </a>
    </section>
  )
}

export default Hero
