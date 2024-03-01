import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'; // Recoil의 상태 훅 import
import { quizState } from 'Pages/recoil/atom'; // Recoil의 상태 import
import { Wrapper, Square, Count, Progress, QText, SelectButton } from 'Styles/styles';
import square from 'Images/main/Rectangle 4.svg';

export default function Quiz1(){
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useRecoilState(quizState); // Recoil의 상태 훅 사용

  const goQuiz = (selectedItem) => {
    setSelectedItem(prevItems => ({
      ...prevItems,
      quiz1: selectedItem
    })); // Recoil의 상태 업데이트 함수 사용
    navigate("/quiz2");
  };

  return (
    <Wrapper>
      <Square src={square} alt='' />
      <Count>1/10</Count>
      <Progress value="10" min="0" max="100" />
      <QText>Q.1<br/>당신의 솔미 모에화는</QText>
      <SelectButton onClick={() => goQuiz('햄스터')}>햄스터 🐹</SelectButton>
      <SelectButton onClick={() => goQuiz('다람쥐')}>다람쥐 🐿️</SelectButton>
      <SelectButton onClick={() => goQuiz('고양이')}>고양이 🐈</SelectButton>
      <SelectButton onClick={() => goQuiz('강아지')}>강아지 🐶</SelectButton>
    </Wrapper>
  );
}