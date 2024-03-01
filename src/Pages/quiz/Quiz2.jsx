import square from 'Images/main/Rectangle 4.svg'
import second from 'Images/quiz/Rectangle 11.svg'
import third from 'Images/quiz/Rectangle 13.svg'
import fourth from 'Images/quiz/Rectangle 12.svg'
import { Count, Progress, QText, Square, SquareButton, TextBelow, Wrapper } from 'Styles/styles';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from './QuizContext';

export default function Quiz2(){
    const {setQuizItem} = useQuizContext();
    
    const navigate = useNavigate();

    const goQuiz = (selectedItem) => {
        setQuizItem('quiz2', selectedItem); 
        navigate("/quiz3");
    }

    return(
        <Wrapper>
            <Square src={square} alt=''></Square>
            <Count>2/10</Count>
            <Progress value="20" min="0" max="100"></Progress>
            <QText>Q.2<br/>제일 좋아하는 솔미 사진은</QText>
            <div>
                <SquareButton onClick={() => goQuiz('')} src={square} alt=''></SquareButton>
                <SquareButton onClick={() => goQuiz('')} src={second} alt=''></SquareButton>
                <TextBelow> 셀카                                        남찍사</TextBelow>
            </div>
            <div>
                <SquareButton onClick={() => goQuiz('')} src={third} alt=''></SquareButton>
                <SquareButton onClick={() => goQuiz('졸미')} src={fourth} alt=''></SquareButton>
                <TextBelow>거울 셀카                                      졸미 </TextBelow>
            </div>
        </Wrapper>
    );
}