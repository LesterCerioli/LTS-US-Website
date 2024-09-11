import styled from 'styled-components'

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  ul {
    align-items: center;
    width: 100%;
    text-align: center;
    margin-top: 0;
    margin-bottom: 12px;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  li {
    position: relative;
    display: inline-block;
    width: 20%;
    position: relative;
    z-index: 999;
    font-size: 20px;

    p {
      font-size: 10px;
    }

    div {
      width: 60px;
      height: 60px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: rgb(2, 31, 62);
      color: #fff;
      border-radius: 50%;
      margin-left: auto;
      margin-right: auto;
      -webkit-transition: 0.3s linear;
      -o-transition: 0.3s linear;
      transition: 0.3s linear;
      overflow: hidden;

      &:hover {
        background-color: rgb(5, 52, 98);
        transform: scale(1.2);
      }
    }
  }

  p {
    font-size: 12px;
    color: #000;
    font-weight: 600;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 375px) {
    max-width: 100px;
    padding-left: 110px;
    div {
      max-width: 30px;
      max-height: 30px;

      align-items: center;

      p {
        font-size: 14px;
        margin-left: -25px;
        margin-top: 15px;
      }
    }
    ~ div {
      padding-bottom: 70px;
    }
  }

  @media screen and (max-width: 480px) {
    div {
      width: 480px;
      margin: 5px;
      padding: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    div {
    }
  }
`
