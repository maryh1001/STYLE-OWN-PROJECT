import profilePage from "./profilePage.css"
const React = require("react");

function ProfilePage() {
    return (
       <main>
  
  <div class="container text-center">    
  <div class="row">
    <div class="col-sm-3 well">
      <div class="well">
        <p>My Profile</p>
        <h1>Name</h1>
        <h3>Current Occupation</h3>
        <h3>Education/Skill Level</h3>
      </div>
      <div class="well">
        <p><a href="#">Discover Other Code!</a></p>
        <p>
          <span class="label label-default">GitHub</span>
          <span class="label label-primary">Discord</span>
        </p>
      </div>
      
      <p><a href="github.com">Mile Stone 1</a></p>
      <p><a href="github.com">React-A-Mole</a></p>
      <p><a href="github.com">Portfolio</a></p>
    </div>
    <div class="col-sm-7">
    
      <div class="row">
        <div class="col-sm-12">
          <div class="panel panel-default text-left">
            <div class="panel-body">
              <h2>Hello User!</h2>
              <p>What would you like to work on?</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-3">
          <div class="well">
           <p>Project 1:</p>
           <p><a href="https://digitalskills.instructure.com/courses/5375">MySQL : </a></p>
          </div>
        </div>
        <div class="col-sm-9">
          <div class="well">
            <p>describe project</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="well">
           <p>Project 2:</p>
           <p><a href="https://digitalskills.instructure.com/courses/4915">React-Music-Library : </a></p>
          </div>
        </div>
        <div class="col-sm-9">
          <div class="well">
            <p>description</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="well">
           <p>Project 3:</p>
           <p><a href="https://digitalskills.instructure.com/courses/5792">MileStone 2 : </a></p>
          </div>
        </div>
        <div class="col-sm-9">
          <div class="well">
            <p>description</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="well">
           <p>Project 4:</p>
           <p><a href="https://digitalskills.instructure.com/courses/3811">CSS : </a></p>
          </div>
        </div>
        <div class="col-sm-9">
          <div class="well">
            <p>description</p>
          </div>
        </div>
      </div>     
    </div>
    <div class="col-sm-2 well">
      <div class="well">
        <p>Study Lounge:</p>
        <p><a href="https://learnjs.slack.com/ssb/redirect">Frontend</a></p>
        <p></p>
      </div>      
      <div class="well">
<p><a href="https://discord.com/invite/yvtRAAaP">CodeSupport community</a></p>
      </div>
      <div class="well">
        <p><a href="https://discord.com/invite/python">Python</a></p>
      </div>
    </div>
  </div>
</div>


       </main> 
    );
}

export default ProfilePage;