import React, { Component } from 'react';
import railway1 from '../images/railway1.jpg'
import railway2 from '../images/railway2.jpg'
import railway3 from '../images/railway3.jpg'
class StatsCarousal extends Component {
    render() {
        return (
            <div className="carousel-inner" role="listbox" style={{maxWidth:"1600px",maxHeight:"400px"}}>
                <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li className="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img className="d-block w-100" src={railway1} alt="First slide" /></div>
                        <div className="carousel-item"><img className="d-block w-100" src={railway2} alt="Second slide" /></div>
                        <div className="carousel-item"><img className="d-block w-100" src={railway3} alt="Third slide" /></div>
                        <div className="carousel-item"><img className="d-block w-100" src={railway1} alt="Fourth slide" /></div>
                    </div><a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next"
                        href="#carouselExampleIndicators" role="button" data-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="sr-only">Next</span></a></div>
            </div>
     
        );
    }
}

export default StatsCarousal;