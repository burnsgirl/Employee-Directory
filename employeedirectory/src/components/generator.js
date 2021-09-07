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
        fetch("https://randomuser.me/api/")
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
                {items.map(items => (
                    <img src={items.picture.medium} alt={items.name.first}/>
                ))}
            </div>
        )

        }
    }
}

export default Employee;