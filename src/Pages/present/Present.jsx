import { QqText, Wrapper, LetterImg, ChocoImg, LetterText, PresentButton } from "Styles/styles";
import Letter from 'Images/present/f9c1d17818dcd256533c767fd6b8aba1 1.svg'
import Choco from 'Images/present/IMG_5004.svg'
import { useNavigate } from "react-router-dom";

export default function Present() {
    
    const navigate = useNavigate();

    const goStart = () => {
        navigate("/");
    }

    const goResult = () => {
        navigate("/allresult");
    }

    return(
        <Wrapper>
            <QqText>Happy Valentine Day ❤️</QqText>
            <LetterImg src={Letter}></LetterImg>
            <LetterText> To. 000
                <br></br>
                <br></br>
                편지 내용 입니다!
            </LetterText>
            <ChocoImg src={Choco}></ChocoImg>
            <PresentButton onClick={goResult}>모든 결과 보기</PresentButton>
            <PresentButton style={{marginBottom:'10%'}} onClick={goStart}>다시 시작하기</PresentButton>
        </Wrapper>
    );
}