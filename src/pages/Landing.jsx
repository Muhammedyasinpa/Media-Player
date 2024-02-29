import React from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "react-bootstrap"

function Landing() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    //navitage to home page
    navigate('/home')
  }
  return (
    <>
      <div className='container mt-5'>
        <div className="header row align-items-center">
          <div className='col-lg-5'>
            <h3 style={{ height: '50px' }}>Welcome To <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Music Player is a platform where you can download and play the latest music for free in Hindi and other languages. Explore trending songs, top charts, podcasts, radio stations and more.</p>
            <button onClick={handleNavigate} className="btn" style={{ backgroundColor: 'blueviolet' }}>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Landing Image" />
          </div>
        </div>
        <div className="features mt-5">
          <h2 className="text-center" style={{ height: '50px' }}>Features</h2>
          <div className="row mt-5">
            <div className="col-lg-4">


              <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '10rem' }} variant="top" src="https://c.tenor.com/b8o4QL3NxV4AAAAC/sound-wave-waves.gif" />
                <Card.Body>
                  <Card.Title style={{ height: '30px' }}>Managing Videos</Card.Title>
                  <Card.Text style={{ height: '80px' }}>
                    User can Upload,view and remove the Videos.
                  </Card.Text>

                </Card.Body>
              </Card>

            </div>
            <div className="col-lg-4">

              <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '10rem' }} variant="top" src="https://media.giphy.com/media/3o6gDP9oLOGtBMMBSU/giphy.gif" />
                <Card.Body>
                  <Card.Title style={{ height: '30px' }}>Categorize Videos</Card.Title>
                  <Card.Text style={{ height: '80px' }}>
                    User can Catergorize videos according to their Preference using Drag and Drop.
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-lg-4">


              <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '10rem' }} variant="top" src="https://i.pinimg.com/originals/4c/1a/52/4c1a52e76ecb222ace05df67dff0796a.gif" />
                <Card.Body>
                  <Card.Title style={{ height: '30px' }}>Watch History</Card.Title>
                  <Card.Text style={{ height: '80px' }}>
                    User is Able to see the history of Watched Videos.
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
          </div>
        </div>
        <div className="video row border p-5 mt-5 rounded mb-5 align-items-center">
          <div className="col-lg-5">
            <h3 style={{height:'50px'}} className="text-warning">Simple Fast And Powerful</h3>
            <p style={{ textAlign: 'justify' }}><span className="fs-4">Play Everything</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cumque doloribus sunt omnis aperiam accusantium quisquam nostrum praesentium atque beatae eos alias porro molestias doloremque, ratione, similique excepturi delectus impedit?</p>
            <p style={{ textAlign: 'justify' }}><span className="fs-4">Categorize Video</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cumque doloribus sunt omnis aperiam accusantium quisquam nostrum praesentium atque beatae eos alias porro molestias doloremque, ratione, similique excepturi delectus impedit?</p>
            <p style={{ textAlign: 'justify' }}><span className="fs-4">Watch History</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cumque doloribus sunt omnis aperiam accusantium quisquam nostrum praesentium atque beatae eos alias porro molestias doloremque, ratione, similique excepturi delectus impedit?</p>

          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <iframe width="1236" height="695" src="https://www.youtube.com/embed/m9Rx47LYqlU" title="LEO - Teaser Trailer 2023 | Thalapathy Vijay | Trisha | Lokesh Kanagaraj | Anirudh | #thalapathy67" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <hr />
    </>

  )
}

export default Landing