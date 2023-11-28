import 'bulma/css/bulma.css'
import { Course } from "./Course";
import an from "./images/angular.jpg";
import boot from "./images/bootstrap5.png";
import cc from "./images/ccsharp.png";
import kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <>
    <div className='App'>
      
    <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Kurslarım
    </p>
    
  </div>
</section>
      <div className='container'>
        <section className='section'>
        <div className='columns' >
          <div className='column'>
          <Course 
    title="Bootstrap"
    description="kmedscmlkxlcxlzcxözçcxzöçxzöxçcçözcmzxcömccmzx mzx c"
    yol={boot}
    
    />
          </div>
          <div className='column'>
          <Course
    title="Frontend"
    description="kmedscmlkxlcxlzcxözçcxzöçxzöxçcçözcmzxcömccmzx mzx c"
    yol={an}
    
    />
          </div>
          <div className='column'>
          <Course
    title="Frontend"
    description="kmedscmlkxlcxlzcxözçcxzöçxzöxçcçözcmzxcömccmzx mzx c"
    yol={kompleweb}
    
    />
          </div>
          <div className='column'>
          <Course
    title="Komple Web"
    description="kmedscmlkxlcxlzcxözçcxzöçxzöxçcçözcmzxcömccmzx mzx c"
    yol={cc}

    />
          </div>

        </div>
        </section>
        
      </div>
  
    
   
    
   
    </div>
    
    
    </>
  );
}

export default App;
