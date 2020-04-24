import styled from "@emotion/styled"

const Global = styled.div`
    @font-face {
        font-family: "San Francisco";
        font-weight: 400;
        src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
      }
    font-family: "San Francisco";
    position: absolute; top: 0; left: 0;
    width: 100%;
    height: 100%;
    background: beige;
    font-size: 18px;
    @media (min-width: 800px) {
        width: 100%;
    }
`
export default Global 