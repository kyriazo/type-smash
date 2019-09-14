import React,{Component} from 'react';
import classes from './Countdown.module.css';

class Countdown extends Component {

    state = {
        time: 10,
    }

    render() {

        const formattedTime = this.formatTime(this.state.time);

        return (
            <div className={classes.countdownWrapper}>
                <div className={classes.seconds}>
                    {formattedTime}
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps) {

        if (this.state.time === 0) {
            console.log('To state time egine 0')
            this.resetInterval();
        }
        if (this.props.typingStarted !== prevProps.typingStarted && this.props.typingStarted === true)  {
            console.log('Ta typingStarted kai previous typingStarted einai:', this.props.typingStarted, prevProps.typingStarted);
            console.log('Ananeosi interval')
            console.log('')
            this.updateInterval();
        }
        
    } 

    componentDidMount() {
        console.log('Time Component mounted.')
        if (this.props.typingStarted) {
            this.updateInterval();
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log('eefe',this.state.time);
    }

    updateInterval() {
        this.interval = setInterval(() => this.setState({ time: this.state.time - 1 }), 1000);
    }

    resetInterval() {
        this.setState({time: 10});
        console.log('Ekana to state time 10, benw sto reset.');
        this.props.reset();
    }

    formatTime(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }
}

export default Countdown;
