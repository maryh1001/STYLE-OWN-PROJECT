import {
  FaUser,
  FaAddressCard,
  FaBookOpen,
  FaGithubSquare,
  FaChess,
} from 'react-icons/fa';

function Profile() {
  return (
    <>
      <section className='heading'>
          <h1>User Profile</h1>
          <hr />
          <h6>Software Development Student</h6>
          <h6>NC State Software Development BootCamp</h6>
        
        <div>
          <br />
          <h3>Hello User!</h3>
          <hr />
          <p>What would you like to work on?</p>

          <h2>Project 1:</h2>
          <p>
            <a href='https://digitalskills.instructure.com/courses/5375'>
              MySQL :
            </a>
          </p>
          <p>To do: Updating the Routes</p>

          <p>Project 2:</p>
          <p>
            <a href='https://digitalskills.instructure.com/courses/4915'>
              React-Music-Library :
            </a>
          </p>
          <p>description</p>

          <p>Project 3:</p>
          <p>
            <a href='https://digitalskills.instructure.com/courses/5792'>
              MileStone 2 :{' '}
            </a>
          </p>
          <p>description</p>

          <p>Project 4:</p>
          <p>
            <a href='https://digitalskills.instructure.com/courses/3811'>
              CSS :
            </a>
          </p>
          <p>description</p>
          </div>

        <div>
          <h3>Discover Projects!</h3>
          <hr />
          <br />
          <a
            href='https://github.com/MGWr6/Milestone-Project-1'
            className='btn btn-reverse btn-block'
          >
            <FaGithubSquare /> Number Guesser
          </a>
          <a
            href='https://github.com/MGWr6/react-a-mole'
            className='btn btn-reverse btn-block'
          >
            <FaGithubSquare /> React-a-Mole
          </a>
          <a
            href='https://github.com/MGWr6/Coder_Connect'
            className='btn btn-reverse btn-block'
          >
            <FaGithubSquare /> CoderConnect
          </a>
          </div>
        
        <p>Study Lounge:</p>
          <p>
            <a href='https://learnjs.slack.com/ssb/redirect'>Frontend</a>
          </p>
          <p></p>
          <p>
            <a href='https://discord.com/invite/yvtRAAaP'>
              CodeSupport community
            </a>
          </p>
          <p>
            <a href='https://discord.com/invite/python'>Python</a>
          </p>
        
      </section>
    </>
  );
}

export default Profile;
