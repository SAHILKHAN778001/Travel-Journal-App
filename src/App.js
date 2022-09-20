import './App.css';
import Navbar from './navbar';
import Places from './places';
import Data from './data.js'
 function App() {
  const places = Data.map(items => {
    return (
     <Places 
     key={items.id}
     {...items} />
    )
  }) 
  return (
    <div>
      <Navbar />
      <section className='section1'>
       {places}
      </section>
    </div>
  );
}
export default App;


