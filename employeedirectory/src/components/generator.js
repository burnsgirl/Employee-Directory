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
}

export default Employee;