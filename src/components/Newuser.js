import React, { Component } from 'react';
import {
  Container,
  Card, CardHeader, CardBody, CardText,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  ButtonGroup,
  Toast, ToastHeader, ToastBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user-actions';
import apiCalls  from '../services/api-calls';


class Newuser extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.handleToast = this.handleToast.bind(this);
    
    this.state = {
        show: false,
        title: '',
        msg:'',
        clkCnt:0
    };
  }

  clearInputs(){
    document.getElementById("CreateUserForm").reset();
  }
  
  handleCancel(e){
    e.preventDefault();
    this.clearInputs();
    //hide toast
    if (this.state.show){
        this.handleToast(e)
    }
  }
  
  handleSubmit(e){
      this.onUpdateUser()
      this.handleToast(e)
  }

  handleToast(e){
    e.preventDefault();
    if (e.target.id === "runApiBtn"){
        this.handleApiToast(e);
    }else{
        if (this.state.show){
            this.setState({
                show:false,
                title:"",
                msg: "",
                clkCnt:0
            })
        }else{
            this.setState({
                show:true,
                title:"Create User",
                msg:"Successful Submission"
            })
        }
    }
  }

  handleApiToast(e){
    e.preventDefault();
    apiCalls.createNewUser().then(res=>{
        if (this.state.clkCnt > 0 ){
            this.setState({
                show:true,
                title:"API Submission",
                msg:"Failure Submission",
                clkCnt: 0
            })
        }else{
            if (this.state.show){
                this.setState({
                    show:false,
                    title:"",
                    msg: "",
                    clkCnt:0
                })
            }else{
                this.setState({
                    show:true,
                    title:"API Submission",
                    msg:"Successful Submission",
                    clkCnt: this.state.clkCnt + 1
                })
            }
        }
    });
  }


  onUpdateUser(){
    this.props.onUpdateUser("submit user")
  }
  
  render() {
    console.log(this.props)
    return (
          <Container>
          <Toast isOpen={this.state.show}>
                <ToastHeader>
                    {this.state.title}
                </ToastHeader>
                <ToastBody>
                    {this.state.msg}
                </ToastBody>
            </Toast>
            <Card>
              <CardHeader id="cardTitle" as="h4">Create User</CardHeader>
                  <CardBody>
                      <CardText>
                            <Form id="CreateUserForm" 
                                onSubmit={e => this.handleSubmit(e)}
                                value="userSubmission"
                            >
                                  <Row>
                                      <Col xs="2"></Col>
                                      <Col xs="6">
                                          <FormGroup>
                                              <Input
                                                  type="input"
                                                  name="username"
                                                  id="username"
                                                  placeholder="Username"
                                                  value={this.props.user.username}
                                                  required="true"
                                              />
                                          </FormGroup>
                                          <FormGroup>
                                              <Input
                                                  type="email"
                                                  name="emailaddress"
                                                  id="emailaddress"
                                                  placeholder="Email Address"
                                                  value={this.props.user.emailaddress}
                                                  required="true"
                                              />
                                          </FormGroup>
                                          <FormGroup>
                                              <Input
                                                  type="input"
                                                  name="phone"
                                                  id="phone"
                                                  placeholder="Phone Number"
                                                  value={this.props.user.phone}
                                                  required="true"
                                                  min={10}
                                                  max={10}
                                              />
                                          </FormGroup>
                                          <FormGroup>
                                              <Input
                                                  type="input"
                                                  name="firstname"
                                                  id="firstname"
                                                  placeholder="First Name"
                                                  value={this.props.user.firstname}
                                                  required="true"
                                              />
                                          </FormGroup>
                                          <FormGroup>
                                              <Input
                                                  type="input"
                                                  name="lastname"
                                                  id="lastname"
                                                  placeholder="Last Name"
                                                  value={this.props.user.lastname}
                                                  required="true"
                                              />
                                          </FormGroup>
                                          <FormGroup>
                                              <Input
                                                  type="input"
                                                  name="streetaddress"
                                                  id="streetaddress"
                                                  placeholder="Street Address"
                                                  value={this.props.user.streetaddress}
                                                  required="true"
                                              />
                                          </FormGroup>
                                          <FormGroup>
                                              <Input
                                                  type="input"
                                                  name="unitnumber"
                                                  id="unitnumber"
                                                  placeholder="Unit Number"
                                                  value={this.props.user.unitnumber}
                                              />
                                          </FormGroup>
                                          <FormGroup>
                                              <Input
                                                  type="input"
                                                  name="city"
                                                  id="city"
                                                  placeholder="City"
                                                  value={this.props.user.city}
                                                  required="true"
                                              />
                                          </FormGroup>
                                          <FormGroup>
                                              <Input
                                                  type="input"
                                                  name="state"
                                                  id="state"
                                                  placeholder="State"
                                                  value={this.props.user.state}
                                                  required="true"
                                              />
                                          </FormGroup>
                                          <FormGroup>
                                              <Input
                                                  type="input"
                                                  name="zip"
                                                  id="zip"
                                                  placeholder="Zip"
                                                  value={this.props.user.zip}
                                                  required="true"
                                              />
                                          </FormGroup>
                                      </Col>
                                      <Col xs="4"></Col>    
                                  </Row>
                                  <ButtonGroup 
                                        id="buttongroup"
                                        className="float-right"
                                    >
                                        <Button
                                            id="cancelBtn"
                                            onClick={ e => this.handleCancel(e)}
                                        >Cancel</Button>
                                        <Button
                                            id="submitBtn"
                                        >Submit</Button>
                                        <Button
                                            id="runApiBtn"
                                            onClick={e =>this.handleToast(e)}
                                        >Test API</Button>
                                    </ButtonGroup>
                              </Form>            
                      </CardText>
                  </CardBody>
            </Card>
          </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
    onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionsToProps)(Newuser);