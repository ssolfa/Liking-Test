import square from 'Images/main/Rectangle 4.svg'
import { Count, Progress, QText, SecretButton, SelectButton, Square, Wrapper } from 'Styles/styles';
import { useNavigate } from 'react-router-dom';
import Modal from 'Pages/quiz/Modal';
import { useState } from 'react';

export default function Quiz6(){
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const goQuiz = () => {
        navigate("/quiz7");
    }

    return(
        <Wrapper>
            <Square src={square} alt=''></Square>
            <Count>6/10</Count>
            <Progress value="60" min="0" max="100"></Progress>
            <QText>Q.6<br/>제일 보고싶은 솔미 모습은</QText>
            <SelectButton onClick={goQuiz} style={{marginBottom: '5px'}}>보드타는 솔미</SelectButton>
            <SecretButton onClick={openModal} style={{marginBottom: '5px', color: '#D9D9D9'}}>보드타는 솔미.avi</SecretButton>
            <SelectButton onClick={goQuiz}>학생시절 솔미</SelectButton>
            <SelectButton onClick={goQuiz}>새내기 솔미</SelectButton>
            <SelectButton onClick={goQuiz}>렌즈 낀 솔미</SelectButton>
            {isModalOpen && <Modal closeModal={closeModal} />}
        </Wrapper>
    );
}