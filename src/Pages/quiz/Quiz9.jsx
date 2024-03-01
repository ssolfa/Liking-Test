import square from 'Images/main/Rectangle 4.svg'
import { Count, Progress, QText, SelectButton, Square, Wrapper } from 'Styles/styles';
import { useNavigate } from 'react-router-dom';

export default function Quiz9(){
    const navigate = useNavigate();

    const goQuiz = () => {
        navigate("/quiz10");
    }

    return(
        <Wrapper>
            <Square src={square} alt=''></Square>
            <Count>9/10</Count>
            <Progress value="90" min="0" max="100"></Progress>
            <QText>Q.9<br/>솔미에게 듣고싶은 칭찬은</QText>
            <SelectButton onClick={goQuiz}>잘했어</SelectButton>
            <SelectButton onClick={goQuiz}>멋있다</SelectButton>
            <SelectButton onClick={goQuiz}>와</SelectButton>
            <SelectButton onClick={goQuiz}>최고야</SelectButton>
        </Wrapper>
    );
}