class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNumber];
        alert(selectedOption);
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Enter this option already exists';
        }

        this.setState((prevState) => {
            // we don't to change the state value
            // we can just create another array then concat
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer.'
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        const options = this.props.options;
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <p>Number of options: {options.length}</p>
                {
                    options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const input = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(input);

        this.setState(() => {
            return { error };
        });

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));