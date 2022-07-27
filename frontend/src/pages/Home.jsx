import { FaUser, FaAddressCard, FaBookOpen, FaGithubSquare, FaChess } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Welcome to CoderConnect!</h1>
        <hr />
        <br />
        <p>
          Create a developer profile/portfolio, share posts, and get help from
          other developers
        </p>
      </section>

      <Link to='/profile' className='btn btn-reverse btn-block'>
        <FaUser /> Profile
      </Link>
      <Link to='/about' className='btn btn-reverse btn-block'>
        <FaBookOpen /> About
      </Link>
      <Link to='/skills' className='btn btn-reverse btn-block'>
        <FaChess /> Skills
      </Link>
      <Link to='/projects' className='btn btn-reverse btn-block'>
        <FaGithubSquare /> Projects
      </Link>
      <Link to='/contact' className='btn btn-reverse btn-block'>
        <FaAddressCard /> Contact
      </Link>
    </>
  );
}

export default Home;
