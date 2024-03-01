import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Wrapper } from "./Styles/styles";
import { QuizProvider } from 'Pages/quiz/QuizContext';
import Main from './Pages/start/Main'
import Quiz1 from 'Pages/quiz/Quiz1'
import Quiz2 from 'Pages/quiz/Quiz2'
import Quiz3 from 'Pages/quiz/Quiz3'
import Quiz4 from 'Pages/quiz/Quiz4'
import Quiz5 from 'Pages/quiz/Quiz5'
import Quiz6 from 'Pages/quiz/Quiz6'
import Quiz7 from 'Pages/quiz/Quiz7'
import Quiz8 from 'Pages/quiz/Quiz8'
import Quiz9 from 'Pages/quiz/Quiz9'
import Quiz10 from 'Pages/quiz/Quiz10'
import Result from 'Pages/allresult/Result'
import Present from 'Pages/present/Present';
import AllResult from 'Pages/allresult/AllResult';
import Loading from 'Pages/loading/Loading';


function App() {
  return (
    //<Wrapper>
      <Router>
      <QuizProvider>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/quiz1" element={<Quiz1 />} />
      <Route path="/quiz2" element={<Quiz2 />} />
      <Route path="/quiz3" element={<Quiz3 />} />
      <Route path="/quiz4" element={<Quiz4 />} />
      <Route path="/quiz5" element={<Quiz5 />} />
      <Route path="/quiz6" element={<Quiz6 />} />
      <Route path="/quiz7" element={<Quiz7 />} />
      <Route path="/quiz8" element={<Quiz8 />} />
      <Route path="/quiz9" element={<Quiz9 />} />
      <Route path="/quiz10" element={<Quiz10 />} />
      <Route path="/result" element={<Result />} />
      <Route path="/allresult" element={<AllResult />} />
      <Route path="/present" element={<Present />} />
      <Route path="/loading" element={<Loading />} />


      </Routes>
      </QuizProvider>
      </Router>
    //</Wrapper>
  );
}

export default App;
