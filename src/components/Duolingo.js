import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line no-unused-vars
import {AvForm, AvField} from "availity-reactstrap-validation";
import {Button} from 'reactstrap'


class Duolingo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            modalOpen: false,
            selectedIndex: -1,
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-3">
                        <div className="card">
                            <div className="col-8">
                                <AvForm>
                                    <AvField name="question" type="text" errorMessage="Bu maydon to'ldirilishi shart"
                                             label="Question" required/>
                                </AvForm>

                                <AvForm className="mt-4">
                                    <AvField name="options" type="text" errorMessage="Bu maydon to'ldirilishi shart"
                                             label="Options" required/>

                                    <Button type="button" color="outline-danger">Add</Button>
                                </AvForm>


                            </div>
                        </div>
                    </div>

                </div>

            </>
        );
    }
}

export default Duolingo;