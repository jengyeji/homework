// import logo from './logo.svg';
import Navi from './component/Navi';
import Title from'./component/Title';
import MainImage from './component/MainImage';
import ItemList from './component/ItemList';
import './App.css';
import React from 'react';


function App() {
  const MainImg = "img/relax-1137240_1280.jpg"
  const imgOne = "img/shoes-1433925_1280.jpg"
  const imgTwo = "img/running-shoe-371624_1280.jpg"
  const imgThree = "img/boot-2558324_1280.jpg"
  const imgchange = "img/skater-4618922_1280.jpg"
  const [itemlist, setItemList] = React.useState([imgOne, imgTwo, imgThree]);
  const [main, setMain] = React.useState(MainImg);
  function handlerRightClick() {
    console.log("클릭했다!!")
    setMain(imgchange);
  }

  return (
    <div className="App">
      <Title/>
      <Navi />
      <MainImage src={main} handlerRightClick={handlerRightClick} />
      <ItemList itemlist={itemlist} />
    </div>
  );
}

export default App;
