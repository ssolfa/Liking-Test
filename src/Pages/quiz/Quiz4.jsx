import square from 'Images/main/Rectangle 4.svg'
import first from 'Images/quiz/Rectangle 6 (1).svg'
import second from 'Images/quiz/Rectangle 7 (1).svg'
import { Count, Progress, QText, RectangleButton, Square, TextBelow, Wrapper } from 'Styles/styles';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from './QuizContext';

export default function Quiz4(){
    const {setQuizItem} = useQuizContext();
    const navigate = useNavigate();

    const goQuiz = (selectedItem) => {
        setQuizItem('quiz4', selectedItem);
        navigate("/quiz5");
    }

    return(
        <Wrapper>
            <Square src={square} alt=''></Square>
            <Count>4/10</Count>
            <Progress value="40" min="0" max="100"></Progress>
            <QText>Q.4<br/>좋아하는 솔미 머리 스타일은</QText>
            <div>
                <RectangleButton onClick={() => goQuiz('생머리')} src={first} alt=''></RectangleButton>
                <RectangleButton onClick={() => goQuiz('웨이브')} src={second} alt=''></RectangleButton>
                <TextBelow>생머리                                      웨이브</TextBelow>
            </div>
        </Wrapper>
    );
}