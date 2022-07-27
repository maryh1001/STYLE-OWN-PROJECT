import { Link } from 'react-router-dom'
import { FaAddressCard, FaCouch, FaGithubSquare } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>CoderConnect</h1>
        <p>Create a developer profile/portfolio, share posts, and get help from other developers</p>
      </section>
        
        <Link to='/profile' className='btn btn-reverse btn-block'>
          <FaAddressCard /> Profile
        </Link>
        <Link to='/lounge' className='btn btn-reverse btn-block'>
          <FaCouch /> Lounge
        </Link>
        <Link to='/git-hub' className='btn btn-reverse btn-block'>
          <FaGithubSquare /> GitHub
        </Link>
    </>
  )
}

export default Home;
