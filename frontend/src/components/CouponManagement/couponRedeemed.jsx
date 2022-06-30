import Header from "./Helpers/header";

import Meta from "./Helpers/meta";
import {Container, Card, Table} from "react-bootstrap";
import "./style.css";

function CouponRedeemed() {
    // page content
    const pageDescription = ". ";

    return (
        <div className="redeemed-ok">
            <Container>
                <div>
                    <Meta/>
                    <Header description={pageDescription}/>
                </div>
                <div class="vh-10 d-flex justify-content-center ">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Merchant</th>
                            <th>Address</th>
                            <th>Coupon</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Subway #93</td>
                            <td>6460 LeMerchant Aveneue</td>
                            <td>Subway-{Math.random().toString(36).slice(2, 7)}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Subway #431</td>
                            <td>3433 Chainlake Dvec</td>
                            <td>Subway-{Math.random().toString(36).slice(2, 7)}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
            <Container>
                <div class="vh-10 d-flex justify-content-center ">
                    <h4>
                        {" "}
                        <small class="text-muted">Follow the map for amazing bacons</small>
                    </h4>
                </div>
            </Container>
            <Container>
                <div class="vh-10 d-flex justify-content-center ">
                    <br></br>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{border: 0}}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div>
            </Container>
            <br></br>
        </div>
    );
}

export {CouponRedeemed};
