import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
            <Link to='/'><h2>Area-Volume Calculator</h2></Link>
            </div>
        </div>    
    );
}
 
export default Navbar
