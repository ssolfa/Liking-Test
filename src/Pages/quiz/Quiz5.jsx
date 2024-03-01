import square from 'Images/main/Rectangle 4.svg'
import first from 'Images/quiz/Rectangle 10.svg'
import second from 'Images/quiz/Rectangle 11 (1).svg'
import third from 'Images/quiz/Rectangle 13 (1).svg'
import fourth from 'Images/quiz/Rectangle 14.svg'
import fifth from 'Images/quiz/Rectangle 15.svg'
import sixth from 'Images/quiz/Rectangle 12 (1).svg'
import { Count, Progress, QText, Square, SquareButton, TextBelow, Wrapper } from 'Styles/styles';
import { useNavigate } from 'react-router-dom';

export default function Quiz5(){
    const navigate = useNavigate();

    const goQuiz = () => {
        navigate("/quiz6");
    }

    return(
        <Wrapper>
            <Square src={square} alt=''></Square>
            <Count>5/10</Count>
            <Progress value="50" min="0" max="100"></Progress>
            <QText>Q.5<br/>가장 좋아하는 솔미 착장은</QText>
            <div>
                <SquareButton onClick={goQuiz} src={first} alt=''></SquareButton>
                <SquareButton onClick={goQuiz} src={second} alt=''></SquareButton>
                <TextBelow> 실패없는 셋업                                 올블랙        </TextBelow>
            </div>
            <div>
                <SquareButton onClick={goQuiz} src={third} alt=''></SquareButton>
                <SquareButton onClick={goQuiz} src={fourth} alt=''></SquareButton>
                <TextBelow>   꾸안꾸 대학생룩                          후드티 러버      </TextBelow>
            </div>
            <div>
                <SquareButton onClick={goQuiz} src={fifth} alt=''></SquareButton>
                <SquareButton onClick={goQuiz} src={sixth} alt=''></SquareButton>
                <TextBelow> 흰티에 청바지 국룰                           모르겠고          <br></br>                                                    그냥 치마면 되 </TextBelow>
            </div>
        </Wrapper>
    );
}