import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/books'><p>A list of our Books</p></Link>
      <Link to='/login'><p>LOG IN</p></Link>
      <Link to='/account'><p>My account</p></Link>
      <Link to='/register'><p>Register account</p></Link>
    </nav>
  )
}

export default Nav;