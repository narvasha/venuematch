import khalti from "../../../assets/khalti.png";
import signup from "../../../assets/signup.png";
import login from "../../../assets/login.png";
import welcome from "../../../assets/welcome.png";
import ringIconBanner from "../../../assets/ring-icon-banner.png";
import instaBirdImg from "../../../assets/insta-bird-img.png";
import app from "../../../assets/app.png";
export default function InstagramFeeds() {
  return (
    <section className="insta-feed-section">
    <figure className="mb-0 insta-feed-img">
        <img src={app} alt="" className="img-fluid star"/>
    </figure>
  <div className="container">
      <div className="row">
          <div className="col-lg-12">
            <figure className="mb-0 insta-bird-fig">
                <img src={instaBirdImg} alt="" className="star"/>
            </figure>
            <figure className="insta-fig">
                <img src={ringIconBanner} alt=""/>
            </figure>
          </div>
      </div>
      <h2>Venue Match Feed</h2>
      <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6">
            <figure className="mb-0 insta-section-imgs">
                <img src={welcome} alt="" className="img-fluid"/>
                
            </figure>
          </div>
          <div className="col-lg-3 col-md-3 col-fluid sm-6">
            <figure className="mb-0 insta-section-imgs">
                <img src={login} alt="" className="img-fluid"/>
                
            </figure>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
            <figure className="mb-0 insta-section-imgs insta-section-imgs-mb">
                <img src={signup} alt="" className="img-fluid"/>
                
            </figure>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
            <figure className="mb-0 insta-section-imgs insta-section-imgs-mb">
                <img src={khalti} alt="" className="img-fluid"/>
                
            </figure> 
        </div>
      </div>
  </div>
</section>
  )
}
