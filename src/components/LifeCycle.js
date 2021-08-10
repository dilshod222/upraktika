import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("this text from construciton function")
        this.state={
            users:[]
        }
    }

    componentDidMount() {
        console.log("this text from componentDidMount");

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                console.log(res);

                this.setState({users:res.data});
            });


    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("this text form componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillMount");
    }
    componentWillCatch(error,errorInfo){
        console.log("this text from componentWillCatch");
    }


    render() {
        console.log("this text form function ");
        return (
            <div>

                <div className="container">
                    <div className="row">
                        {
                            this.state.users.map((item,index)=>{
                                return(
                                    <div className="col-4 mt-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>{item.name}</h5>
                                            </div>
                                            <div className="card-body">
                                                <p>City: {item.address.city}</p>
                                                <a href={"http://"+item.website}>{item.website}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }

}

export default LifeCycle;