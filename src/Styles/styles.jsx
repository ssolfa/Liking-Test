import styled, { keyframes } from "styled-components";

const slideOn = keyframes`
  0% {
    transform: translateY(15%);
    opacity: 1;
    margin-top: 15%;
  }
  100% {
    transform: translateY(100%);
    opacity: 1;
    margin-top: 50%;

  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Progressani = keyframes`
    from {
        width: 0;
    }
`;

/* 기본 Wrapper 스타일 */
export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  background-color: #FBFBFB;
  align-items: center;
`;

export const MainWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  min-height: 99vh;
  display: flex;
  width: 390px;
  background-size: cover;
  animation: ${FadeIn} 2s ease-in-out;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
`;

export const StartButton = styled.button`
    background-color: #D9D9D9;
    color: #000000;
    height: 80px;
    width: 230px;
    border: none;
    border-radius: 10px;
    margin: 700px auto 0;

    &:hover {
        background-color: #FFACA4;
    }
`;

export const Square = styled.img`
    margin-top: 15%;
`;

export const Count = styled.p`
    margin-top: 5%;
    margin-left: 60%;
`;

export const Progress = styled.progress`
    appearance: none;
    width: 80%;
    height: 20px;
    &::-webkit-progress-bar {
        background: #D9D9D9;
        border-radius: 10px;
    }
    &::-webkit-progress-value {
        background: #FFACA4;
        border-radius: 10px;
        animation: ${Progressani} 4s ease-in;
        transition: width 4s ease-in-out;
        width: ${props => props.width};
    }
`;

export const QText = styled.h3`
    margin-top: 10%;
    text-align: center;
    margin-bottom: 10%;
`;

export const SelectButton = styled.button`
    margin-bottom: 10%;
    background-color: #FFACA4;
    color: #000000;
    width: 70%;
    height: 40px;
    border: none;
    border-radius: 10px;
    font-size: 14px;

    &:hover {
        border: 1px solid #FFFFFF;
    }
`;

export const SecretButton = styled.button`
    margin-bottom: 10%;
    background-color: transparent;
    color: #000000;
    width: 30%;
    height: 30px;
    border: none;
    border-radius: 10px;

    &:hover {
        border: 1px solid #FFFFFF;
    }
`;

export const SquareButton = styled.img`
    margin-top: 15%;
    margin-left: 20px;
    margin-right: 20px;
    width: 150px;
    height: 150px;
    transition: transform 0.2s linear; 
    &:hover {
        transform: scale(1.1); /* 호버!! */
    }
`;

export const RectangleButton = styled.img`
    margin-top: 3%;
    margin-bottom: -4%;
    margin-left: 20px;
    margin-right: 20px;
    width: 150px;
    height: 300px;
    transition: transform 0.2s linear; 
    &:hover {
        transform: scale(1.1); /* 호버!! */
    }
`;

export const TextBelow = styled.p`
    text-align: center;
    margin-bottom: -9%;
    white-space: pre;
`;

export const InputText = styled.input`
    background-color: #ffffff;
    border: 1px solid #FFACA4;
    border-radius: 30px;
    padding: 8px;
    width: 80%;
    height: 35px;


    &:focus {
        border-color: #000000;
        outline: none;
    }   
`;

export const ResultButton = styled.button`
    margin-top: 20%;
    background-color: #FFACA4;
    color: #000000;
    width: 40%;
    height: 60px;
    border: none;
    border-radius: 10px;
    font-size: 20px;

    &:hover {
        border: 1px solid #FFFFFF;
    }
`;

export const ErrorBox = styled.div`
    margin-top: 10%;
    color: #ED1B24;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    display: ${props => props.visible ? 'block' : 'none'};
`;

export const QqText = styled.h3`
    margin-top: 30%;
    text-align: center;
    margin-bottom: 10%;
`;

export const ResultText = styled.h3`
    margin-top: 120%;
    text-align: center;
    margin-bottom: 10%;
    z-index: 1; /* 배경 이미지 뒤로 이동 */
    margin-left: 15%;
    margin-right: 15%
`;

export const LetterImg = styled.img`
    width: 100%;
    height: 200%;
`;

export const ChocoImg = styled.img`
    margin-top: 10px;
    width: 70%;
    height: 100%;
`;

export const LetterText = styled.h3`
    text-align: center;
    position: absolute;
    top: 14.5%;
    font-size: 15px;
    margin-left: 10.5%;
    margin-right: 10.5%;
`;

export const PresentButton = styled.button`
    margin-top: 5%;
    background-color: #FFACA4;
    color: #000000;
    width: 40%;
    height: 60px;
    border: none;
    border-radius: 10px;
    font-size: 20px;

    &:hover {
        border: 1px solid #FFFFFF;
    }
`;

export const AllResultImg = styled.img`
    width: 80%;
    height: 140%;
    margin-bottom: 8%;
    transition: transform 0.2s linear; 
    &:hover {
        transform: scale(1.1); /* 호버!! */
    }
`;

export const AllResultText = styled.h3`
    text-align: center;
    position: absolute;
    left: 49%; /* 가운데로 이동 */
    transform: translateX(10%); /* 가운데에서 오른쪽으로 이동 */
`;

export const AllResultText2 = styled.h2`
    text-align: center;
    position: absolute;
    left: 50%; /* 가운데로 이동 */
    transform: translateX(10%);
`;

export const MoveSquare = styled.img`
    margin-top: 50%;
    transform: translateY(100%);
    animation: ${slideOn} 0.8s ease-in-out;
`;

export const ResultWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  min-height: 99vh;
  display: flex;
  width: 390px;
  background-size: cover;
  animation: ${FadeIn} 2s ease-in-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px; /* 원하는 너비 조정 */
    height: 600px; /* 원하는 높이 조정 */
    background-color: white;
    border-radius: 20px; /* 원하는 모양 조정 */
    z-index: 1; /* 배경 이미지 뒤로 이동 */
`;

export const PresentBtn = styled.button`
    position: absolute;
    bottom: 4%;
    left: 50%; /* 가운데 정렬 */
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #FFACA4; /* 버튼 배경색 */
    color: black; /* 버튼 텍스트 색상 */
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 4; /* 배경 이미지 뒤로 이동 */
    &:hover {
        border: 1px solid #FFFFFF;
    }
`;

export const KakaoBtn = styled.button`
    position: absolute;
    bottom: -3%;
    left: 50%; /* 가운데 정렬 */
    transform: translateX(-50%);
    padding: 10px 20px;
    color: black; /* 버튼 텍스트 색상 */
    font-size: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 4; /* 배경 이미지 뒤로 이동 */
    background-image: url(${props => props.bgImage});
    background-size: cover;
    
    background-color: #FDDC3F; /* 버튼 배경색 */
    &:hover {
        border: 1px solid #FFFFFF;
    }
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경 */
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
`;

export const ModalIn = styled.div`
    background-color: FFFFFF
    width: 30%;
    height: 70%;
`;

export const ContentWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  
`;

