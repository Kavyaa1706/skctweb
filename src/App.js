import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Demo from './Home';
import Welc from './Welcome';
import Stuulog from './login1';
import Kashif from './Aboutus';
import Sample from './Events';
import Emo from './Sem';
import Haan from './Ceo';
import Contact from './ContactUs';
import Appli from './Form';
import Rights from './Fund';
import Lgn from './Student';
import Navbar from './Nav';
import Ship from './Scholarship';
import Hall from './Hallticket';
import Implement from './Campus1';
import Med from './Medical.js';
import Sem from './Seminar';
import Audi from './Auditorium';
import Yog from './yoga';
import Trans from './transport';
import Spor from './sports';
import Gall from './gallery';
import Online from './onlinefee';
import Stat from './statistics';
import Add from './Admission';
import Acad from './Acadamics';
import Cal from './Calender';
import Clu from './Club';
import Cre from './Credit';
import Teaa from './Fee';
import Aro from './Aroma';
function App(){
  return(
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welc/>}/>
        <Route path='/Home' element={<Demo/>}/>
        <Route path='/login1' element={<Stuulog/>}/>
        <Route path='/Aboutus' element={<Kashif/>}/>
        <Route path='/Events' element={<Sample/>}/>
        <Route path='/Sem'element={<Emo/>}/>
        <Route path='/Ceo'element={<Haan/>}/>
       <Route path='/Nav' element={<Navbar/>}/>
       <Route path='/ContactUs' element={<Contact/>}/>
       <Route path='/Form' element={<Appli />}/>
       <Route path='/Student' element={<Lgn />}/>
       <Route path='/Scholarship' element={<Ship />}/>
       <Route path='/Campus1' element={<Implement/>}/>
       <Route path='/Medical' element={<Med/>}/>
       <Route path='/Seminar' element={<Sem/>}/>
       <Route path='/Auditorium' element={<Audi/>}/>
       <Route path='/yoga' element={<Yog/>}/>
       <Route path='/transport' element={<Trans/>}/>
       <Route path='/sports' element={<Spor/>}/>
       <Route path='/gallery' element={<Gall/>}/>
       <Route path='/onlinefee' element={<Online/>}/>
       <Route path='/statistics' element={<Stat/>}/>
       <Route path='/Hallticket' element={<Hall/>}/>
       <Route path='/Admission' element={<Add/>}/>
       <Route path='/Fund' element={<Rights/>}/>
       <Route path='/Acadamics' element={<Acad/>}/>
       <Route path='/Calender' element={<Cal/>}/>
       <Route path='/Club' element={<Clu/>}/>
       <Route path='/Credit' element={<Cre/>}/>
       <Route path='/Fee' element={<Teaa/>}/>
       <Route path='/Aroma' element={<Aro/>}/>
       
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;