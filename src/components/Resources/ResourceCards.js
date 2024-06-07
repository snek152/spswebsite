import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import {
    AiOutlineFolderOpen
} from "react-icons/ai";
import { RiPresentationLine } from "react-icons/ri";
import { TbTallymarks } from "react-icons/tb";


function ResourceCards(props) {
    return (
        <Card className="resource-card-view">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>

                <Button
                    variant="primary"
                    href={props.aLink}
                    target="_blank"
                    style={{ marginLeft: "42px", marginRight: "42px", marginBottom: "20px", marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                    <AiOutlineFolderOpen /> &nbsp;
                    {props.aName}
                </Button>

                <Button
                    variant="primary"
                    href={props.bLink}
                    target="_blank"
                    style={{ marginLeft: "42px", marginRight: "42px", marginBottom: "20px", marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "center"  }}
                >
                    <RiPresentationLine /> &nbsp;
                    {props.bName}
                </Button>

                {props.hasThree && (
                    <Button
                        variant="primary"
                        href={props.cLink}
                        target="_blank"
                        style={{ marginLeft: "42px", marginRight: "42px", marginBottom: "20px", marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "center"  }}
                    >
                        <TbTallymarks /> &nbsp;
                        {props.cName}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}
export default ResourceCards;