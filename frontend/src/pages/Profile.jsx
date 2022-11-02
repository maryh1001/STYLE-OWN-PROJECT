import { FaGithubSquare, FaCouch } from 'react-icons/fa';

function Profile() {
  return (
    <>
      <section className='heading'>
        <h3>User Profile</h3>
        <hr />
        <p>About Me</p>
        
        <h6>Software Development Student</h6>
        <h6>NC State Software Development BootCamp</h6>
        <br />
        <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga accusantium praesentium voluptas, adipisci non debitis ducimus quasi aspernatur quo ad.</h6>

        <div>
          <br />

          <h3>Hello User!</h3>
          <hr />
          <p>What would you like to work on?</p>
          <br />
          <a
            href='https://github.com/MGWr6/My_Portfolio'
            className='btn btn-reverse btn-block'
          >
            <FaGithubSquare /> My Portfolio
          </a>
          <a
            href='https://github.com/MGWr6/CSS-Copy-Cat'
            className='btn btn-reverse btn-block'
          >
            <FaGithubSquare /> CSS Copy Cat Practice
          </a>
          <a
            href='https://github.com/MGWr6/Milestone-Project-1'
            className='btn btn-reverse btn-block'
          >
            <FaGithubSquare /> JavaScript Number Guesser Game
          </a>
          <a
            href='https://github.com/MGWr6/Coder_Connect'
            className='btn btn-reverse btn-block'
          >
            <FaGithubSquare /> Coder Connect
          </a>
          <a
            href='https://github.com/MGWr6/complete-javascript-course'
            className='btn btn-reverse btn-block'
          >
            <FaGithubSquare /> The Complete JavaScript Course
          </a>
          <a
            href='https://github.com/MGWr6/JS-Interactive-Map'
            className='btn btn-reverse btn-block'
          >
            <FaGithubSquare /> Interactive Map
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
