import { FaGithubSquare, FaCouch } from 'react-icons/fa';

function Profile() {
  return (
    <>
      <section className='heading'>
        <h3>User Profile</h3>
        <hr />
        <p>About Me</p>
        <br />
        <h6>Software Development Student</h6>
        <h6>NC State Software Development BootCamp</h6>

        <div>
          <br />

          <h3>Hello User!</h3>
          <hr />
          <p>What would you like to work on?</p>
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
        <br />
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
          <br />
        </div>

        <div>
          <h3>Study Lounge</h3>
          <hr />
          <br />
          <a
            href='https://discordapp.com/invite/code'
            className='btn btn-reverse btn-block'
          >
            <FaCouch /> DevCord
          </a>
          <a
            href='https://discordsl.com/server/4837/lazy-developers'
            className='btn btn-reverse btn-block'
          >
            <FaCouch /> Lazy Developer
          </a>
          <a
            href='https://discord.me/coding'
            className='btn btn-reverse btn-block'
          >
            <FaCouch /> Programmer's Hangout
          </a>
        </div>
        <br />
      </section>
    </>
  );
}

export default Profile;
