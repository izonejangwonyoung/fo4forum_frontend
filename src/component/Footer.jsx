import React from 'react'
function Footer () {
    return (

        <div>
            <footer className="footer" style={{ marginTop: '400px' }}>
                <div className="footer-top pt-70 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 mb-30">
                                <div className="f-widgets-item">
                                    <div className="f-logo">
                                        <a href="#">
                                            <img src="" alt="logo"/>
                                        </a>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis..</p>
                                    <ul>
                                        <li><a href="#"><i className="bi bi-geo-alt-fill"></i> 153 Williamson Plaza,
                                        Maggieberg</a></li>
                                        <li><a href="#"><i className="bi bi-telephone-inbound"></i> +1 (123)
                                        456-7891</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-30">
                                <div className="f-widgets-item">
                                    <h3>Product</h3>
                                    <ul>
                                        <li><a href="#">Product Tour</a></li>
                                        <li><a href="#">Analytics</a></li>
                                        <li><a href="#">Product Overview</a></li>
                                        <li><a href="#">What’s New</a></li>
                                        <li><a href="#">Templates</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-30">
                                <div className="f-widgets-item">
                                    <h3>Company</h3>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Careers <span>We&apos;re hiring</span></a></li>
                                        <li><a href="#">PCustomers </a></li>
                                        <li><a href="#">What’s New</a></li>
                                        <li><a href="#">Blog & News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-30">
                                <div className="f-widgets-item">
                                    <h3>Documentation</h3>
                                    <ul>
                                        <li><a href="#">Tech Requirements</a></li>
                                        <li><a href="#">API Reference</a></li>
                                        <li><a href="#">Solutions </a></li>
                                        <li><a href="#">Brand Assets</a></li>
                                        <li><a href="#">Blog & News</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-30 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="copy-f-text">
                                    <p>Copyright ©2023 <a href="#">Eric shim</a>. Data based on NEXON DEVELOPERS</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer_social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-github-square"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="scroll-area">
                <i className="bi bi-arrow-up"></i>
            </div>

        </div>

    )
}
export default Footer
