import React,{useState} from 'react';
import SimpleSlider from '../components/slider';




function Home(){

    const [nav,setNav]=useState(true);

    const respNav = () => {
        setNav(!nav);        
        console.log(nav)
    }

    return(
        <div className="main">
            <div className='home'>
                <div className='header'>
                    <span><a href="#home"><img src='./assets/logo_text.png' alt='logo_text'></img></a></span>
                    <div className={`navbar ${nav?'':'responsive'}`}>
                        <a href="#home" className="nav-toggle" onClick={respNav}>
                            <i className="fa fa-bars"></i>
                        </a>
                        <a href="#home" className="active">Contact</a>
                        <a href="#news">Team</a>
                        <a href="#contact">Vision</a>
                        <a href="#about">Products</a>
                        <a href="#about">Services</a>
                    </div>
                </div>

                <div className="home_content">
                    <SimpleSlider/>
                    <div className="slider_overlay">
                        <img id="text_logo" src="./assets/text_logo.png" alt="text_logo"/>
                        <p>Lorem ipsum is simply dummy text of printing</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>

            <div className="team">
                <div className="team_img_cont">
                    <img src="../../assets/team1.jpg" alt="team1"/>
                </div>
                <div className="team_img_cont">
                    <img src="../../assets/team2.jpg" alt="team2"/>
                </div>
                <div className="team_img_cont">
                    <img src="../../assets/team3.jpg" alt="team3"/>
                </div>
                <div className="team_img_cont">
                    <img src="../../assets/team4.jpg" alt="team4"/>
                </div>
            </div>
        </div>
    )
}

export default Home;