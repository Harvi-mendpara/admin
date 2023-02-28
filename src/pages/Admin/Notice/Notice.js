import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import withLayout from "../../../component/SideBar/SideBar";
import "./Notice.css";

function Notice() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div class="col-auto text-right float-right ml-auto">
                <a href="/notice/addnotice">
                  <button
                    style={{
                      padding: "3px 25px",
                      borderRadius: "5px",
                      backgroundColor: "#005d91",
                      border: "none",
                      color: "#fff",
                      marginBottom: "20px",
                      marginRight: "0px",
                    }}
                  >
                    Add
                  </button>
                </a>
              </div>
              <Card style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                <Card.Header
                  style={{ backgroundColor: "#005d91", color: "#fff" }}
                >
                  Special title treatment
                </Card.Header>
                <Card.Body>
                  <Card.Title>Date : 12/10/2022</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <a href="/notice/viewnotice">
                    <Button
                      style={{
                        padding: "5px",
                        width: "80px",
                        borderRadius: "5px",
                        backgroundColor: "#005d91",
                        border: "none",
                        color: "#fff",
                      }}
                    >
                      View
                    </Button>
                  </a>
                  <Button
                    style={{
                      padding: "5px",
                      width: "80px",
                      borderRadius: "5px",
                      backgroundColor: "#e35260",
                      border: "none",
                      color: "#fff",
                      marginLeft: "10px",
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withLayout(Notice);
