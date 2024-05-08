import React from 'react'

const SectionsHeader = ({lc, lg, txt}) => {
 


    return (
      <div className="container">
      <header
        className="works-header hfixd valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">{lc}</h2>
                  <p>
                    {txt}
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="w-75 p-3">{lg}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      </div>
      

)}

export default SectionsHeader
