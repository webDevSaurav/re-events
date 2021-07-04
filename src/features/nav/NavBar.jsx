import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

const NavBar = ({ setFormOpen }) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "1em" }}
          />{" "}
          Revents
        </Menu.Item>
        <Menu.Item name="events" />
        <Menu.Item>
          <Button
            positive
            inverted
            content="New Event"
            onClick={() => setFormOpen(true)}
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
