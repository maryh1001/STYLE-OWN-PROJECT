import { Link } from 'react-router-dom'
import { FaAddressCard, FaCouch, FaGithubSquare } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Code. Connect. Create.</h1>
        <p>What is your focus for today?</p>
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

export default Home