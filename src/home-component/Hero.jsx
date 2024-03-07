import  blurredFunction  from '../features/blurredFunction';
import developerImg from "../assets/images/developer.jpg"
import Project from './Project';


const Hero = () => {
   const { blurred } = blurredFunction()
  return (
    <section>
        <div className='wrapper '>
            <div className="wrapInfoDev">
              <div className='developerProfile'>
            <div className="infoDev">
              <div style={{display:"flex", flexDirection:"column", gap:"50px"}}>
              <h1>Full Stack Web Developer</h1>
            <p >Hi, my name is Luca. I am a passionate Full Stack Web developer. This is my official site!</p>
            <div id='profileLink'>
              <a href="https://www.linkedin.com/in/luca-campo-431a4827b/" target="_blank"><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-dhkaf9ri.png" alt="" /></a>
              <a href="https://github.com/lucaprogrammer25/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
            </div>
            </div>
            <img id="developerImg" src={developerImg} className={blurred ? 'blurred' : ''} alt="" />
            </div>
            </div>
            <div className='skills'>
             <h4>Hard Skills</h4>
             <div id='skillIcon' className={blurred ? 'blurred' : ''}>
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png" alt="" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png" alt="" />
              <img src="https://banner2.cleanpng.com/20180411/cvq/kisspng-javascript-html-computer-software-web-browser-watermark-5acdbd54ac19f7.4484983215234327887049.jpg" alt="" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
              <img src="https://w7.pngwing.com/pngs/273/105/png-transparent-redux-original-logo-icon.png" alt="" />
              <img src="https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon.png" alt="" />
              <img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="" />
              <img src="https://w7.pngwing.com/pngs/384/848/png-transparent-mysql-php-database-javascript-ajax-carnifex-blue-text-logo.png" alt="" />
              </div> 
            </div>
            </div>
        </div>
        <Project/>
    </section>
  )
  }
export default Hero