import React, {Component} from 'react';
import {AvForm,AvField} from "availity-reactstrap-validation";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal,ModalBody,ModalFooter} from "reactstrap";




class Lesson33 extends Component {
    constructor(props) {
        super(props);
        this.state={
            students:[],
            modalOpen:false,
            selectedIndex:-1,
        }
    }

    // con ni bosib tabni bossa ozi construktor yozib beradi

    render() {

        const changeModal=()=>{
          this.setState({modalOpen:!this.state.modalOpen});
        };

        const examplesFunctions=()=>{
            let numbers=[34,45,75,-55,-23,34];
            for (let i=0; i<numbers.lenght;i++){
                console.log(numbers[i]);
            }
            numbers.forEach((item)=>{
                console.log(item);
            });
            //foreach- arrayni har bir elementi bo'yicha siklni aylantirib beradi

            let mappedNumbers=numbers.map((item,index)=>{
                return "Nizom";
            });
            console.log(mappedNumbers);

            //map -berilgan arrayning uzunligiga teng bo'lgan yangi arrayni hosil qilis uchun
            //bunda yangi arrayni har bir elementi returndagi qiymatga teng
            let filteredNumbers=numbers.filter((item,index)=>{
                return item>0;
            });
            console.log(filteredNumbers);

            let sortedNumbers=numbers.sort((a,b)=>{
                return a-b;
            });
            console.log(sortedNumbers);
        };

        examplesFunctions();

        const addStudent=(event,values)=>{
            // console.log(errors);
            // console.log(values);
            this.state.students.push(values);
            this.setState({students:this.state.students});


            this.form&&this.form.reset();
            console.log(this.state.students);
        };

        const deleteStudent=(index)=>{
          this.state.students.splice(index,1);
          this.setState({students:this.state.students});
        };

        const editStudent=(index)=>{
          this.setState({selectedIndex:index});
          changeModal();
        };
        const saveStudent=(event,values)=>{
            // eslint-disable-next-line react/no-direct-mutation-state
          this.state.students[this.state.selectedindex]=values;
          this.setState({students:this.state.students});
          changeModal();
        };

        return (
            <div>

                <div className="container">
                    <div className="row mt-3">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onValidSubmit={addStudent} ref={c=>(this.form=c)}>
                                        <AvField name="firstName" type="text" errorMessage="Bu maydon to'ldirilishi shart" label="Student's name" required />
                                        <AvField name="lastName" type="text" label="Student's surname" required  />
                                        <AvField name="address" type="text" label="Student's adress" required  />
                                        <AvField name="birthday" type="date" label="Student's birthday" required  />

                                        <AvField name="studyType" type="select" label="Study type"  required >
                                            <option>choose</option>
                                            <option value="Grant">Grant</option>
                                            <option value="Cantract">Cantract</option>
                                        </AvField>

                                        <button type="submit" className="btn btn-success btn-block">Add student</button>

                                    </AvForm>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>№</th>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Address</th>
                                            <th>Birthday</th>
                                            <th>Study type</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.students.map((item,index)=>{
                                                return(
                                                    <tr>
                                                        <td>{(index+1)}</td>
                                                        <td>{item.firstName}</td>
                                                        <td>{item.lastName}</td>
                                                        <td>{item.address}</td>
                                                        <td>{item.birthday}</td>
                                                        <td>{item.studyType}</td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary" onClick={()=> editStudent(index)}>E</button>
                                                            <button type="button" className="btn btn-danger ml-1" onClick={()=>deleteStudent(index)}>D</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Modal  isOpen={this.state.modalOpen} toggle={changeModal}>
                    <AvForm  onValidSubmit={saveStudent}  model={this.state.students[this.state.selectedIndex]}>
                    <ModalBody>


                            <AvField name="firstName" type="text" errorMessage="Bu maydon to'ldirilishi shart" label="Student's name" required />
                            <AvField name="lastName" type="text" label="Student's surname" required  />
                            <AvField name="address" type="text" label="Student's adress" required  />
                            <AvField name="birthday" type="date" label="Student's birthday" required  />

                            <AvField name="studyType" type="select" label="Study type"  required >
                                <option>choose</option>
                                <option value="Grant">Grant</option>
                                <option value="Cantract">Cantract</option>
                            </AvField>


                    </ModalBody>
                    <ModalFooter>
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="button" className="btn btn-secondary" onClick={changeModal}>Cancel</button>
                    </ModalFooter>
                    </AvForm>
                </Modal>

            </div>
        );
    }
}

export default Lesson33;

