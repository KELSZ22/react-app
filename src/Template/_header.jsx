import Michael from '../assets/images/cover2.png'

function Header (){

    return(
        <div className="home-header">
            
           <div className="header-text">
                <h1>Hi, I’m </h1>

                <h1>Michael Z. Sabino</h1>

                <p>I’m a web developer who loves building sleek, functional websites. Whether it’s a portfolio and custom project, I’m here to bring your ideas to life. Let’s create something great!</p>

                <button>Know More</button>

           </div>

            <img src={Michael} alt="michael_pogi.png" height="500px"/>


        </div>

    )

}
export default Header