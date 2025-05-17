import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfilePicture from "../src/assets/Profile_Picture.png"

function App() {

  return (
      <>
          <div className="hero min-h-screen main-hero">
              <div className="hero-content flex-col lg:flex-row">
                  <div className="avatar">
                      <div className="ring-primary ring-offset-base-100 w-60 rounded-full ring-2 ring-offset-2">
                          <img src={ProfilePicture}/>
                      </div>
                  </div>
                  <div className={"m-auto"}>
                      <h1 className="text-5xl font-bold">David Prasad Augustian</h1>

                      <i>Blessed to be a Blessing - Genesis 12:2</i> <br/><br/>
                      <p className="py-6">

                          I am a software engineer with a passion for building web applications. I have experience in
                          Java, Spring-boot, React, and Node.js. I am currently learning Golang and Kubernetes. I am
                          also interested in cloud computing and DevOps practices.

                      </p>
                      <button className="btn btn-primary">Get Started</button>
                  </div>

              </div>
          </div>
      </>
  )
}

export default App
