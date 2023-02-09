import React, {useState, useEffect, useRef} from 'react'
import {Row, Container} from 'react-bootstrap';
function CountDown() {
    const[daysTimer , setDaysTimer] = useState("00:00");
    const[hourTimer , setHourTimer] = useState("00:00");
    const[minutesTimer , setMinutesTimer] = useState("00:00");
    const[secondsTimer , setSecondsTimer] = useState("00:00");

    let interval = useRef();

    const handleTime = ()=>{

        const countdown = new Date("Aug 30, 2023 00:00:00");    

        interval = setInterval(()=>{

            const now =  new Date().getTime();
            const distance = countdown - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0){
                clearInterval(interval.current);
            } else{
                setDaysTimer(days);
                setHourTimer(hours);
                setMinutesTimer(minutes);
                setSecondsTimer(seconds);
            }
        },1000);
    }

    useEffect(()=>{
        handleTime()
        return ()=>{
            clearInterval(interval.current);
        }
    })
    return (
        <div className="home-offer">
            <Container fluid={true}>
                <Row className="justify-content-center align-items-center text-center ">
                        <div className="content d-flex flex-column justify-content-center text-center  align-items-center text-center">
                            <h6>#April Store</h6>
                            <h4>Deal Of The days</h4>
                            <div className="countdown d-flex justify-content-center text-center  align-items-center text-center">
                                <div>
                                    <p>{daysTimer}</p>
                                    <h5>Days</h5>
                                </div>
                                <span className="divider">:</span>
                                <div>
                                    <p>{hourTimer}</p>
                                    <h5>Hour</h5>
                                </div>
                                <span className="divider">:</span>
                                <div>
                                    <p>{minutesTimer}</p>
                                    <h5>Minutes</h5>
                                </div>
                                <span className="divider">:</span>
                                <div>
                                    <p>{ secondsTimer}</p>
                                    <h5>Seconds</h5>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-black">
                                    <a href="/shop">
                                        Shop Now
                                    </a>
                                </button>
                            </div>
                        </div>
                </Row>
            </Container>
        </div>
    )
}

export default CountDown
