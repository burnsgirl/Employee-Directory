import React, {Component} from 'react';

class Employee extends Component {

    constructor(props){
        super(props)
        this.state = {
            items:[],
            loading:false
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20")
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                items:res.results,
                loading:true
            })
        })
    }

    render() {
        var {items, loading} = this.state

        if(!loading) {
            return (
                <div>Loading...</div>
            )
        } else {

        return (
            <div className="container">
                <div className="row">
                {items.map(items => (
                    <div className="card col-md-3">
                        <div card-header>
                            <h1>{items.name.first} {items.name.last}</h1>
                        </div>
                        <img src={items.picture.large} class="img-thumbnail" alt={items.name.first}/>
                        <p>
                        <button className="btn btn-primary btn-lg">Learn more</button>
                        </p>
                    </div>
                ))}
                </div>
            </div>
        )

        }
    }
}

export default Employee;