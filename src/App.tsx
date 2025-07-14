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

          <div className={"table-container"}>
              <div className="overflow-x-auto">
                  <table className="table">
                      {/* head */}
                      <thead>
                      <tr>
                          <th>Technolgies</th>
                          <th>Details</th>
                          <th>Years</th>
                          <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      {/* row 1 */}
                      <tr>
                          <td>
                              <div className="flex items-center gap-3">
                                  <div className="avatar">
                                      <div className="mask mask-squircle h-12 w-12">

                                          <svg xmlns="http://www.w3.org/2000/svg"
                                               viewBox="0 0 384 512">
                                              <path fill="#74C0FC"
                                                    d="M277.7 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.8 0 242.8 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.2 12.2 0 0 1 -2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.3 17.3 0 0 0 -8.2 6.3 70.5 70.5 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6 .7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.8 509.4 401 461.3 348 437.4zM124.4 396c-78.7 22 47.9 67.4 148.1 24.5a185.9 185.9 0 0 1 -28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.6 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.4 60.4 0 0 1 -21.1-12.8z"/>
                                          </svg>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="font-bold">Java</div>
                                      <div className="text-sm opacity-50">Java/J2ee</div>
                                  </div>
                              </div>
                          </td>
                          <td>
                              Java 17 +, J2EE, JSF
                              <br/>
                              <span className="badge badge-ghost badge-sm">Worked in Banking, Securities, Insurance domain</span>
                          </td>
                          <td>10+</td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                          <td>
                              <div className="flex items-center gap-3">
                                  <div className="avatar">
                                      <div className="mask mask-squircle h-12 w-12">

                                          <svg xmlns="http://www.w3.org/2000/svg"
                                               viewBox="0 0 640 512">
                                              <path
                                                  d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
                                          </svg>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="font-bold">Spring</div>
                                      <div className="text-sm opacity-50">Spring/Spring-Boot</div>
                                  </div>
                              </div>
                          </td>
                          <td>
                              Spring, Spring-Boot, Spring MVC, Spring Data
                              <br/>
                              <span className="badge badge-ghost badge-sm">Spring, Kafka, Scheduler, Spring Reactive</span>
                          </td>
                          <td>10+</td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                          <td>
                              <div className="flex items-center gap-3">
                                  <div className="avatar">
                                      <div className="mask mask-squircle h-12 w-12">
                                          <svg xmlns="http://www.w3.org/2000/svg"
                                               viewBox="0 0 384 512">
                                              <path
                                                  d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM265 255l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
                                          </svg>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="font-bold">React</div>
                                      <div className="text-sm opacity-50">Frontend</div>
                                  </div>
                              </div>
                          </td>
                          <td>
                              Javascript, Angular, JQuery, React, Redux, HTML5, CSS3, Bootstrap
                              <br/>
                              <span className="badge badge-ghost badge-sm">Worked in front-end technologies</span>
                          </td>
                          <td>1+</td>
                      </tr>
                      </tbody>
                  </table>
              </div>

          </div>
      </>
  )
}

export default App
