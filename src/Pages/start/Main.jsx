import main from 'Images/main/main.svg'
import { MainWrapper, StartButton, TextOverlay } from 'Styles/styles';
import { useNavigate } from 'react-router-dom';

export default function Main(){
    const navigate = useNavigate();

    const goQuiz = () => {
        navigate("/quiz1");
    }

    return(
        <MainWrapper
            style={{backgroundImage: `url(${main})`}}
        >
            <TextOverlay>
                <h1>취향의 솔미❤️</h1>
                <p>내 취향의 솔미는?</p>
            </TextOverlay>
            <StartButton
                onClick={goQuiz}
            >
                <h1>시작하기</h1>
            </StartButton>
        </MainWrapper>
    );
}