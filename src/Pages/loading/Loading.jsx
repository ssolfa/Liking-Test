import { MoveSquare, QText, Square, Wrapper } from "Styles/styles";
import square from 'Images/main/Rectangle 4.svg'
import check from 'Images/result/pngwing 1.svg'
import Loadder from 'Images/result/Spinner-1.1s-201px.gif'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loading() {
    
    const navigate = useNavigate();

    const [showSquare, setShowSquare] = useState(false);
    const [currentSquare, setCurrentSquare] = useState(Loadder);
    const [checkSize, setCheckSize] = useState({ marginTop:'90px', width:'30%' });
    const [displayText, setDisplayText] = useState("결과 분석중");

    useEffect(() => {
        const showTimeout = setTimeout(() => {
            setShowSquare(true);
        }, 1000);
        
        const changeImageTimeout = setTimeout(() => {
            setCurrentSquare(check);
            setCheckSize(prevSize => ({ ...prevSize, marginTop:'120px', width: '17%' }));
            setDisplayText("분석 완료!");

            setTimeout(() => {
                navigate("/result");
            }, 1500);

        }, 6000);

        return() => {
            clearTimeout(showTimeout);
            clearTimeout(changeImageTimeout);
        };
    }, [navigate]);

    return(
        <Wrapper>
            <MoveSquare src={square} alt=''></MoveSquare>
            {showSquare && <Square src={currentSquare} style={checkSize} />}
            {showSquare && <QText>{displayText}</QText>}
        </Wrapper>
    );
}