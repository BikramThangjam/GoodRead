
import "./Header.css";
import heroImg1 from "../../images/hero-img1.jpg"
import heroImg2 from "../../images/hero-img2.jpg"
import heroImg3 from "../../images/hero-img3.jpg"
import heroImg4 from "../../images/hero-img4.jpg"
import heroImg5 from "../../images/hero-img5.jpg"
import heroImg6 from "../../images/hero-img6.jpg"

const Header = () => {
    return (
       
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner myCarousel">
                <div className="carousel-item active position-relative">
                    <img src={heroImg4} className="d-block w-100" alt="Meet your next favorite book."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="display-4">Meet your next favorite book.</h1> 
                        <h3>The Ultimate Guide to Free eBooks</h3>                        
                        <p>Not sure what to read next? Explore our catalog of public domain books with our editors. Some real gems are hidden in our library. </p>                          
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={heroImg3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={heroImg2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={heroImg1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={heroImg5} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={heroImg6} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    )
}

export default Header;