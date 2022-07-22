// import { useState, useEffect, useContext } from 'react'
// import { useNavigate } from 'react-router-dom';
function Navigation() {
<main>

<body>
    <div class="box">
        <form class="form" id="log-in">
            <h1>Log In</h1>
         
            <p>Username</p>
            <div class="userInput">
                <input type="text" class="username" autofocus placeholder="Username" />
            </div>
           
            <p>Password</p>
            <div class="userInputPass">
                <input type="password" class="password" autofocus placeholder="Password" />
            </div>
            <button   type="submit"  >
                Log In
            </button>
            
            
        <p>
            <a href="./" id="linkSignUp"> Don't have an account? Sign up!</a>
        </p>
        </form>

<form class="hide" id="createAccount" style = {{display: none}}>
    <h1>Sign Up</h1>
    
    <p>Username</p>
    <div class="userInput">
        <input type="text" class="username" autofocus placeholder="Username" />
    </div>
    <p>Email Address</p>
    <div class="userInputEmail">
        <input type="text" class="email" autofocus placeholder="Email Address" />
    </div>

    <p>Password</p>
    <div class="userInputPass">
        <input type="password" class="password" autofocus placeholder="Password" />
    </div>
    <p>Confirm Password</p>
    <div class="userInputPass">
        <input type="password" class="password" autofocus placeholder="Confirm Password" />
    </div>
    <button type="submit">
        Sign Up
    </button>
    
    <p>
        <a href="./" id="linkLogIn"> Already have an Account? Log In!</a>
    </p>
</form>
    </div>
</body>
</main>

    // hide sign up or log in forms from which ever is needed
document.addEventListener("DOMContentLoaded" , () =>{
    const logIN = document.querySelector('#log-in');
    const createAcc = document.querySelector('#createAccount');
    //do somthing when create account or log in link is clicked
    document.querySelector('#linkSignUp').addEventListener("click",  e =>{
    e.preventDefault();
        logIN.classList.add('hide');
    createAcc.classList.remove('hide');
    });
    //copy paste from above but switch it up
    document.querySelector('#linkLogIn').addEventListener("click",  e =>{
        e.preventDefault();
        logIN.classList.remove('hide');
        createAcc.classList.add('hide');
        });
    } );
    //store input
    function getInputFromTextBox() {
        var input = document.getElementsByClassName("#userInput");
        console.log(input);
    }
}

export default Navigation;










    // const navigate = useNavigate();

    // let loginActions = (
    //     <>
    //         <li style={{ float: 'right' }}>
    //             <a href="#" onClick={() => navigate("/")}>
    //                 Sign Up
    //             </a>
    //         </li>
    //         <li style={{ float: 'right' }}>
    //             <a href="#" onClick={() => navigate("/")}>
    //                 Login
    //             </a>
    //         </li>
    //     </>
    // )



    // return (
    //   <nav>
    //     <a>Home</a>
    //     <a>Placeholder</a>
    //     <a>Placeholder</a>
    //   </nav>) 