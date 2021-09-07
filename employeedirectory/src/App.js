import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import EmployeeCard from './components/cards';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Title />
      <EmployeeCard />

    </Wrapper>

  );
}

export default App;
