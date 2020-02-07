class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            value: 0

        };

    }
    
    handleClick() {

        this.setState({

            value: this.state.value + 1
        })

    }
    
    render() {

        return (

            <div>
            <h2>{this.state.value}</h2>
                <button onClick={this.handleClick.bind(this)} type='button'>Click Mei!</button>
            </div>

        );

    }

}