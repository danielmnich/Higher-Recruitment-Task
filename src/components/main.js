import React, {Component} from 'react';
import axios from 'axios';
import Slider from './Slider/Slider';


class Main extends Component {
    state = {
        objList: [],
        imgToShow: [],
        counter: 0,
    };

    componentDidMount() {
        axios.get("https://picsum.photos/v2/list")
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data);
                    this.setState({
                        objList: response.data,
                        imgToShow: [response.data[0], response.data[1], response.data[2]],
                    });
                }
            })
    }

    handleImgsToShow = () => {
        this.setState({
            imgToShow: [this.state.objList[this.state.counter], this.state.objList[this.state.counter + 1], this.state.objList[this.state.counter + 2]]
        })
    };

    next = async () => {
        console.dir(this.state.counter);

        if (this.state.counter + 3 >= this.state.objList.length) {
            await this.setState({
                counter: 0,
            });
            this.handleImgsToShow();
        } else {
            await this.setState({
                counter: this.state.counter + 3,
            });
            this.handleImgsToShow();
        }
    };

    prev = async () => {
        console.dir(this.state.counter);
        if (this.state.counter - 3 <= 0) {
            await this.setState({
                counter: this.state.objList.length - 3,
            });
            this.handleImgsToShow();
        } else {
            await this.setState({
                counter: this.state.counter - 3,

            });
            this.handleImgsToShow();
        }
    };

    render() {
        return (
            <div>
                <Slider imgList={this.state.imgToShow}
                        counter={this.state.counter}
                        imgPrev={this.state.imgPrev}
                        imgNext={this.state.imgNext}
                        prev={this.prev}
                        next={this.next}/>
            </div>
        )
    }
}

export default Main
