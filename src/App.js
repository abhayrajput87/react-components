
import Route from './Components/Route';
import AccordionPage from './Pages/AccordionPage';
import DropdownPage from './Pages/DropdownPage';
import ButtonPage from './Pages/ButtonPage';
import Sidebar from './Components/Sidebar';
import ModalPage from './Pages/ModalPage';
import TablePage from './Pages/TablePage';
function App() {
  
  return (
    <div>
      {/* <Dropdown options={options} selected={selected} handleSelected={onClickMenu}  /> */}
      <Sidebar/>
      <div>
      
        <Route path='/accordion' >
          <AccordionPage/>
        </Route>
        <Route path='/' >
          <DropdownPage/>
        </Route>
        <Route path='/button' >
          <ButtonPage/>
        </Route>
        <Route path='/modal' >
          <ModalPage/>
        </Route>
        <Route path='/table' >
          <TablePage/>
        </Route>
      </div>
    </div>
   
  );
}

export default App;
