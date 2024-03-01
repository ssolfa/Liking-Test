import square from 'Images/main/Rectangle 4.svg'
import first from 'Images/quiz/Rectangle 10 (1).svg'
import second from 'Images/quiz/Rectangle 11 (2).svg'
import third from 'Images/quiz/Rectangle 13 (2).svg'
import fourth from 'Images/quiz/Rectangle 12 (3).svg'
import { Count, Progress, QText, Square, SquareButton, TextBelow, Wrapper } from 'Styles/styles';
import { useNavigate } from 'react-router-dom';

export default function Quiz8(){
    const navigate = useNavigate();

    const goQuiz = () => {
        navigate("/quiz9");
    }

    return(
        <Wrapper>
            <Square src={square} alt=''></Square>
            <Count>8/10</Count>
            <Progress value="80" min="0" max="100"></Progress>
            <QText>Q.8<br/>가장 좋아하는 아기 솔미 사진은</QText>
            <div>
                <SquareButton onClick={goQuiz} src={fourth} alt=''></SquareButton>
                <SquareButton onClick={goQuiz} src={second} alt=''></SquareButton>
                <TextBelow>아장 솔미                                어릴때 부터<br></br>                                              자세가 안좋은 솔미</TextBelow>
            </div>
            <div>
                <SquareButton onClick={goQuiz} src={third} alt=''></SquareButton>
                <SquareButton onClick={goQuiz} src={first} alt=''></SquareButton>
                <TextBelow>  브이 중독 솔미                     라이키 추는 솔미</TextBelow>
            </div>
        </Wrapper>
    );
}