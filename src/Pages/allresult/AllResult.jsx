import { AllResultImg, AllResultText, AllResultText2, QqText, Wrapper } from "Styles/styles";
import Result1 from 'Images/result/Rectangle 21.svg'
import Result2 from 'Images/result/Rectangle 22.svg'
import Result3 from 'Images/result/Rectangle 23.svg'
import Result4 from 'Images/result/Rectangle 24.svg'
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "Pages/quiz/QuizContext";

export default function AllResult() {
    const {setQuizItem} = useQuizContext();
    
    const navigate = useNavigate();

    const goResult = (selectedItem) => {
        setQuizItem('result', selectedItem); 
        navigate("/result");
    }

    return(
        <Wrapper>
            <QqText style={{marginTop:'10%', fontSize:'25px'}}>모든 결과 모아보기</QqText>
            <AllResultImg onClick={() => goResult('공주')} src={Result1}></AllResultImg>
            <AllResultText style={{top:'15%'}}>ㅎㅎ <br/> 내 쌩얼이 싫어?</AllResultText>
            <AllResultText2 style={{top:'21%'}}>“공주 솔미”</AllResultText2>
            <AllResultImg onClick={() => goResult('애기')} src={Result2}></AllResultImg>
            <AllResultText style={{top:'37%', right:'20%'}} >응애</AllResultText>
            <AllResultText2 style={{top:'40%'}}>“애기 솔미”</AllResultText2>
            <AllResultImg onClick={() => goResult('여친')} src={Result3}></AllResultImg>
            <AllResultText style={{top:'58%', left:'43%' }}>2024 <br/> 사귀고 싶은 여자 1위</AllResultText>
            <AllResultText2 style={{top:'64%'}}>“여친 솔미”</AllResultText2>
            <AllResultImg onClick={() => goResult('솔냥이')} src={Result4}></AllResultImg>
            <AllResultText style={{top:'82%'}}>초치는 말 장인</AllResultText>
            <AllResultText2 style={{top:'85%', right:'20%'}}>“솔냥이”</AllResultText2>
        </Wrapper>
    );
}