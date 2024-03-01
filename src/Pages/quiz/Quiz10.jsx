import square from 'Images/main/Rectangle 4.svg'
import { Count, InputText, Progress, QText, ResultButton, Square, Wrapper} from 'Styles/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC5-A0eGndyp_irZHhQEAqDVSd1020wOkY",
  authDomain: "test-c674e.firebaseapp.com",
  projectId: "test-c674e",
  storageBucket: "test-c674e.appspot.com",
  messagingSenderId: "499994823461",
  appId: "1:499994823461:web:03dd85b994d388e61428cc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Quiz10(){
    const navigate = useNavigate();

    // const gotest = () => {
    //     navigate("/loading");
    // }

    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        const { value } = e.target;
        setText(value);
      };

      const saveTextToFirestore = async () => {
        try {
            const docRef = await addDoc(collection(db, "your_collection_name"), {
                text: text
            });
            console.log("Document written with ID: ", docRef.id);
            navigate("/loading");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };


    return(
        <Wrapper>
            <Square src={square} alt=''></Square>
            <Count>10/10</Count>
            <Progress value="100" min="0" max="100"></Progress>
            <QText>Q.10<br/>마지막으로 솔미에게<br></br>하고싶은 말은?</QText>
            <InputText onChange={handleTextChange} placeholder="하고싶은 말을 입력하세요" type="text" value={text}></InputText>
            <ResultButton onClick={saveTextToFirestore}>결과 확인하기</ResultButton>
        </Wrapper>
    );
}
