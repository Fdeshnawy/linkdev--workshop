import Header from './components/Layout/Header';
import './App.css';
import ThingsWeDo from './components/ThingsWeDo/ThingsWeDo';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
function App() {

 
  return (
    <div className="App">
      <Header />
      <ThingsWeDo/>
      <News />
      <Footer />
   
    </div>
  );
}

export default App;
