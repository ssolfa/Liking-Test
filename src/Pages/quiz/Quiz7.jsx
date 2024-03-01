import square from 'Images/main/Rectangle 4.svg'
import { Count, Progress, QText, SelectButton, Square, Wrapper } from 'Styles/styles';
import { useNavigate } from 'react-router-dom';

export default function Quiz7(){
    const navigate = useNavigate();

    const goQuiz = () => {
        navigate("/quiz8");
    }

    return(
        <Wrapper>
            <Square src={square} alt=''></Square>
            <Count>7/10</Count>
            <Progress value="70" min="0" max="100"></Progress>
            <QText>Q.7<br/>가장 좋아하는 솔미의 모먼트는</QText>
            <SelectButton onClick={goQuiz}>맛있는 요리 해줄 때</SelectButton>
            <SelectButton onClick={goQuiz}>코딩할 때</SelectButton>
            <SelectButton onClick={goQuiz}>데이트 코스 짜올 때 ㅎ</SelectButton>
            <SelectButton onClick={goQuiz}>000 칭찬해줄 때</SelectButton>
        </Wrapper>
    );
}