import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";

function App() {
    const {products} = data;
    return (
        <div className="App">
            <Header></Header>
            <Main products={products}></Main>
            <Basket></Basket>
        </div>
    );
}

export default App;
