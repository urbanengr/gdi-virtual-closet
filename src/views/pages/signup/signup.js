import React, {Component} from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 15,
        display:'block'
    },
});
class Signup extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            zipcode: '',
            errors: [],
            loading: false
        };
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            });
        }
    }
    handleChange = (event) => {
        console.log('handleChange event: ', event)
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

      console.log('handleSubmit event: ', event)
        this.setState({
            loading: true
        });

        const userData = {
            email: this.state.email,
            passsword: this.state.password,
            name:this.state.name,
            zipcode:this.state.zipcode

        };

            
        axios.post('/signup', userData)
            .then((response) => {
            if(response.success){
                // take user to home
            }
                // localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
                // this.setState({
                //     loading: false
                // });

                // this.props.history.push('/');
            })
            .catch((error) => {
                this.setState({
                    errors: error.response.data,
                    loading: false
                });
            });
    };
    

    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;
        return (
            <Container>
                <Row>
                    <Col xs={6}>
                        <div className={classes.paper}>
                            <h2>Signup</h2>
                            <Form className={classes.form} noValidate>
                            <Form.Group className="mb-3" controlId="name" autoComplete="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="string" placeholder="Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email" autoComplete="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="zipcode">
                                    <Form.Label>Zipcode</Form.Label>
                                    <Form.Control type="number" placeholder="Zipcode" />
                                </Form.Group>
                                <span className={classes.customError}> Add Simple Validation</span> 

                                <Button variant="primary" type="submit" className={classes.submit}>
                                    Submit
                                </Button>

                                {/* Add loading spinner */}
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={7}>
                        <span className="mt-3"> Not yet a member? <a href="/signup">Sign up</a></span> 
                    </Col>
                </Row>
            </Container>
        )
    }

}
export default withStyles(styles)(Signup);