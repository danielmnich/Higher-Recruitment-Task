import React from 'react';
import './slider.css';

const Slider = (props) => {
    return (
        <div className="container">
            <h2 className="mb-4">Sample Title</h2>
            <div className="row d-flex">
                {props.imgList.map((obj, index) => {
                    return (
                        <div key={index} className="col-md-4">
                            <div className="d-flex align-items-center custom-imgContainer">
                                <a href={obj.url}> <img className="img-fluid" src={obj.download_url}
                                                        alt={`imige by ${obj.author}`}/></a>
                            </div>

                            <p className="font-italic">Author: {obj.author}</p>
                        </div>
                    )
                })
                }
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6 d-flex justify-content-center">
                    <div className="col-sm-5">
                        <button className="btn btn-secondary" onClick={props.prev}>&#x25C4;</button>
                    </div>
                    <div className="col-sm-5">
                        <button className="btn btn-secondary" onClick={props.next}>&#x25BA;</button>
                    </div>
                </div>

            </div>

        </div>
    )
};
export default Slider;
