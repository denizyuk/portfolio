import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard () {
        return (
            <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p style={{ textAlign: "justify" }}>
                            Hi Everyone, I am <span className="purple">Deniz Yüksel </span>
                            from <span className="purple"> Istanbul, Turkey.</span>
                            <br /> I graduated from <span className="purple">Spiced </span> Academy in January 2023 as a Full Stack Web Developer.
                            </p>
                            <p style={{ color: "rgb(155 126 172)" }}>
                                "Strive to build new things! " {" "}
                            </p>
                            <footer className="blockquote-footer">Deniz</footer>
                            </blockquote>
                            </Card.Body>
                            </Card>
        );
}

export default AboutCard;