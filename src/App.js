import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import FormContainer from './components/FormContainer';
import Header from './components/Header'
import Info from './components/Info'
import 'font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="row">
        <Info/>
        <FormContainer/>
      </div>
    </div>
  );
}

export default App;
