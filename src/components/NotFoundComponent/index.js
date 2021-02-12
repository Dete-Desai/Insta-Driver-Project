import React from 'react'

const NotFoundComponent = () => {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 minheight300 padding_left_25 padding_right_40">
        <div className="container" style={{margin: '0 auto', border: 'none'}}>
          <div className="container">
            <div className="row">
            {/* <EmployerSideBarFunction /> */}
              <div className="col-sm">
                <div className="card" style={{width: '100%', border: 'none'}}>
                  <div className="cus-space" style={{height: '20px'}} />
                  <div className="card-body" style={{fontFamily: " Rubik, -apple-system, BlinkMacSystemFont", fontSize:"20px"}}>
                    <h1 className="card-title" >Mmhhh</h1>

                    <h3>You have not created a profile.So no one
                    knows your'e on Instadriver</h3>
                    <h1  style={{color: 'red'}}>
                        Don't worry. Let's fix this
                    </h1>
                    <p>First congrats on creating an account. That's one step closer to the world of opportunities</p><br/>
                    Now, you need to fill your profile for you to go live so that employers and other drivers can connect with you. Also,
                    once you create your profile, you will be able to use our amazing features like posting jobcards, create social groups, play online 
                    multiplayer games et cetera!<br/>
                    <br/>
                    Let's dive into creating your profile!
                    <p />
                    <button style={{borderColor:"#fed136" ,color: "black",borderRadius: "8px",backgroundColor:"white",width: "206px", height: "40px",left: "313.29px",top: "661.66px"}} href type="submit" className="btn btn-primary btn-form display-4">Create Driver Profile</button>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <img src="images/Not found 1.png" alt="not_found_1" style={{width: '100%', height: 'auto', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default NotFoundComponent
