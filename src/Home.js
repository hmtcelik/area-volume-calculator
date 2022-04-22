import { Link } from 'react-router-dom'; 

// imgs
import pokeball from './img/pokeball.png';
import soda from './img/soda.png';
import icecream from './img/cone.png';
import book from './img/book.png';
import cheese from './img/cheese.png';

const Home = () => {
  return (
      <div className="home">
        <div className='row1'>
          <Link to='/sphere'>
            <div class="card 1">
              <div class="card_image">
                <img src={pokeball} alt="pokeball"/> 
              </div>
              <div class="card_title title-white">
                <p>Sphere</p>
              </div>
            </div>
          </Link>
          <Link to='/cylinder'>
            <div class="card 1">
              <div class="card_image">
                <img src={soda} alt="soda"/> 
              </div>
              <div class="card_title title-white">
                <p>Cylinder</p>
              </div>
            </div>
          </Link>
          <Link to='/cone'>
            <div class="card 1">
              <div class="card_image">
                <img src={icecream} alt="icecream"/> 
              </div>
              <div class="card_title title-white">
                <p>Cone</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="row2">
          <Link to='/rectangular'>
          <div className="rect">
            <div class="card 1">
                <div class="card_image">
                  <img src={book} alt="book"/> 
                </div>
                <div class="card_title title-white">
                  <p style={{marginTop:"-20px", fontSize:"15px"}}>Rectangular Prism</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to='/sphere'>
          <div className='tiran'>
            <div class="card 1">
                <div class="card_image">
                  <img src={cheese} alt="cheese" /> 
                </div>
                <div class="card_title title-white">
                  <p style={{marginTop:"-20px", fontSize:"16px"}}>Triangular Prism</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
}
 
export default Home;