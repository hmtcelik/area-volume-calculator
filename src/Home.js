import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
      <div className="home">
          <ul>
            <li><Link to='/sphere'>Sphere</Link></li>
            <li><Link to='/cylinder'>Cylinder</Link></li>
            <li><Link to='/cone'>Cone</Link></li>
            <li><Link to='/reactangular'>Rectangular Prism</Link></li>
            <li><Link to='/triangular'>Triangular Prism</Link></li>
          </ul>
      </div>
    );
}
 
export default Home;