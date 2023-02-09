import React , {useState,useEffect}from 'react';
import {Row, Container,Col} from 'react-bootstrap';
import {Link ,useLocation} from 'react-router-dom'
function HeaderDefault({srcBg}) {
    const location = useLocation();
    const [pathItems, setPathItems] = useState([]);
    useEffect( ()=>{
            const pathName =  location.pathname.split('/').splice(1 );
            setPathItems([...pathName]);
            
    },[ ]);
    return (
        <div className="header-default" style={{backgroundImage: `url(${srcBg}`}}>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="breadcrumb-header">
                            <div className="heading d-flex align-items-center">
                            <h3>Home</h3>
                            {
                                pathItems.map(path => (
                                    <h3 key={path}>{path}</h3>
                                ))
                            }
                            </div>
                            <Link to="/"> Home </Link> 
                            {
                                pathItems.map(path => (
                                    <Link to={path} key={path}>{path}</Link>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderDefault
