import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil'; // Recoil의 값 훅 import
import { quizState } from 'Pages/recoil/atom'; // Recoil의 상태 import
import { RData } from "./ResultData";
import { KakaoBtn, PresentBtn, ResultText, ResultWrapper} from "Styles/styles";
import result1 from 'Images/result/result1.svg';
import result2 from 'Images/result/result2.svg';
import result3 from 'Images/result/result3.svg';
import result4 from 'Images/result/result4.svg';

export default function Result() {
    useEffect(() => {
        // SDK 로드
        const script = document.createElement('script');
        script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          // 컴포넌트가 언마운트될 때 스크립트 제거
          document.body.removeChild(script);
        };
      }, []);
    
    const quizResult = useRecoilValue(quizState); // Recoil의 상태 값 읽어오기
    const navigate = useNavigate();

    const shareKakao = () => {
        if (window.Kakao) {
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
                kakao.init('162e234250fed19646e20b80576a28af');
            }
            window.Kakao.Share.sendCustom({
                templateId: 104264,
            });
        }
    };

    let backgroundImage, result, data1, data2;

    if ((quizResult && quizResult['quiz1'] === '고양이' )||quizResult['result'] === '솔냥이') {
        result = RData.find(item => item.data1 === '솔냥이');
        data1 = result.data1;
        data2 = result.data2;
        backgroundImage = result4;
    } 
    else if((quizResult && quizResult['quiz3'] === '풀메' && quizResult['quiz4'] === '웨이브') || quizResult['result'] === '공주') {
        result = RData.find(item => item.data1 === '공주 솔미');
        data1 = result.data1;
        data2 = result.data2;
        backgroundImage = result1;
    }
    else if((quizResult && quizResult['quiz3'] === '쌩얼' && quizResult['quiz2'] === '졸미') || quizResult['result'] === '애기') {
        result = RData.find(item => item.data1 === '애기 솔미');
        data1 = result.data1;
        data2 = result.data2;
        backgroundImage = result3;
    }
    else {
        result = RData.find(item => item.data1 === '여친 솔미');
        data1 = result.data1;
        data2 = result.data2;
        backgroundImage = result2;
    }

    const goStart = () => {
        navigate("/present");
    };

    return(
        <ResultWrapper
        style={{backgroundImage: `url(${backgroundImage})`}}
         >
                <ResultText>
                <span style={{ fontSize: '30px' }}>{data1}</span>
                <br></br>
                <br></br>
                <span>{data2}</span>
                </ResultText>
            <PresentBtn onClick={goStart}>선물 보러가기</PresentBtn>
            <KakaoBtn onClick={shareKakao}>카카오톡 공유하기</KakaoBtn>
        </ResultWrapper>
    );
}
