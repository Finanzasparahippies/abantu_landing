import React from 'react'

const SmallFooter = () => {
    return (
        <footer className="footer-half sub-bg">
          <div className="container">
            <div className="copyrights text-center mt-0">
              <p>
                © {new Date().getFullYear()}{" "}Desarrollado por{" "}
                <a href='#'>Desersoft</a>
              </p>
            </div>
          </div>
        </footer>
    )
}

export default SmallFooter
