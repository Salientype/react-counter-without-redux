class Counter extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {
             value: 0
        };

    }
    
    handleClickAdd() {

        this.setState({    
            value: this.state.value + 1
        })

    }

    handleClickSub() {

        this.setState({    
            value: this.state.value - 1
        })

    }
    
    render() {

        return (

            <div>
            <h2>{this.state.value}</h2>
                <button onClick={this.handleClickAdd.bind(this)} type='button'>Add 1</button>
                <button onClick={this.handleClickSub.bind(this)} type='button'>Subtract 1</button>
            </div>

        );

    }

}