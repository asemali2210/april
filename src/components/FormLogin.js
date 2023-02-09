import React from 'react';
import { Row, Container,  Col} from 'react-bootstrap';
import SignIn from './SignIn';
import SignUp from './SignUp';
function FormLogin(props) {
    const {isLogin} = props
    return (
        <div className="form-login">
            <Container>
                <Row className="justify-content-center">
                    <Col md={5}>
                        { isLogin? <SignIn/> : <SignUp/> }
                        </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FormLogin;
