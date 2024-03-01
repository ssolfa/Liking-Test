import square from 'Images/main/Rectangle 4.svg'
import first from 'Images/quiz/Rectangle 6.svg'
import second from 'Images/quiz/Rectangle 7.svg'
import { Count, Progress, QText, RectangleButton, Square, TextBelow, Wrapper } from 'Styles/styles';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from './QuizContext';

export default function Quiz3(){
    const { setQuizItem } = useQuizContext();
    const navigate = useNavigate();

    const goQuiz = (selectedItem) => {
        setQuizItem('quiz3', selectedItem);
        navigate("/quiz4");
    }

    return(
        <Wrapper>
            <Square src={square} alt=''></Square>
            <Count>3/10</Count>
            <Progress value="30" min="0" max="100"></Progress>
            <QText>Q.3<br/>내가 좋아하는 솔미는</QText>
            <div>
                <RectangleButton onClick={() => goQuiz('쌩얼')} src={first} alt=''></RectangleButton>
                <RectangleButton onClick={() => goQuiz('풀메')} src={second} alt=''></RectangleButton>
                <TextBelow>   쌩얼 솔미                                 풀메 솔미</TextBelow>
            </div>
        </Wrapper>
    );
}