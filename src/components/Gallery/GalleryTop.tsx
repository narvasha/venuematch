import bannerImg1 from "../../assets/banner-img1.png";
import bannerImg2 from "../../assets/banner-img2.png";

export default function GalleryTop() {
  return (
    <div className="home-banner-section overflow-hidden position-relative sub-baner">
        <figure className="banner-img1 mb-0">
            <img src={bannerImg1} alt="" className="star"/>
        </figure>
        <figure className="banner-img2 mb-0">
            <img src={bannerImg2} alt="" className="star"/>
        </figure>
        <div className="banner-container-box">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 order-lg-2 order-1">
                        <div className="position-relative sub-banner-section aos-init aos-animate" data-aos="fade-up" id="myContentDIV">
                            <h1><span className="h1-text"> Gallery</span></h1>
                            <p className="banner-paragraph">
                            "Welcome to our Gallery!" Take a virtual tour.
                            </p>
                            <div className="banner-btn discover-btn-banner">
                                <div className="btn-inner">Home   - <span className="about-margin"> Gallery</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
