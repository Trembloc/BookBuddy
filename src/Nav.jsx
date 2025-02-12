import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/books'>A list of our Books</Link>
    </nav>
  )
}

export default Nav;