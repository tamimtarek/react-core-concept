import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('Btn Clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked');
  }

  const AddToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      {/* 1st Way */}
      <button onClick={handleClick}>Click Me</button>
      {/* 2nd Way */}
      <button onClick={handleClick2}>click2</button>
      {/* 3rd Way */}
      <button onClick={() => {alert('Third Clicked')}}>Third</button>
      {/* Vejailla */}
      <button onClick={() => AddToFive(3)}>Four</button>
    </>
  )
}

export default App
