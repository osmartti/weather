import React, { Component } from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {temp: '', weather: '', WSymbol: ''};
    };

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=19c5e5ffb75add6818b7387369506c8a')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                this.setState({
                    temp: (responseData.main.temp - 273).toFixed(1) + ('°C'),
                    weather: responseData.weather[0].main,
                    WSymbol: ('http://openweathermap.org/img/w/' + responseData.weather[0].icon + '.png')
                });
            });
    }

    render() {
        return (
            <div>
                <div>Temperature: {this.state.temp}</div>
                <div>{this.state.weather}</div>
                <div>
                    <img src={this.state.WSymbol} />
                </div>
            </div>
        );
    }
}

export default Weather;
