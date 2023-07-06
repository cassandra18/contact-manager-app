import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    app = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "") {
            alert ("All fields are mandatory!");
            return 
        };



    }
    render () {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={(e) => this.state.name({name:e.target.value})}
                        ></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                         type = "text" 
                         name="email" 
                         placeholder="Email"
                         value={this.state.name}
                         onChange={(e) => this.state.name({name:e.target.value})}
                         ></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default  AddContact