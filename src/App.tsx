import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import {
  InfoCircleOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { List, Divider } from "antd";
import HP from "./assets/085f6811-1590-4031-8bf6-21c0e261dd57.jpeg";
import Piano from "./assets/How-to-Describe-Sound-of-Piano-1.jpg";
import Guitar from "./assets/Guitar-Strings-Order-How-the-Guitar-is-Tuned-and-Why-oy1qust0y4usrsb0ilh4hcdvqie48efdn03mcvh56w.jpg";

const data = [
  "Gap stands for Geriatric Arthritic Pensioners but it initially stood for Glen and Paul.",
  "We play as a form of expression and because we enjoy performing.",
];

const Data = [
  "You can find us at the Eagle Canyon Club House every second friday of the month.",
  "We play at Wonderers occasionally.",
  "You can also hire us out. Contact us to find out more!",
];

function AboutMe() {
  return (
    <div className="center">
      <div className="head">
        <label id="heading">About Us</label>
        <img
          src={HP}
          alt="GAP"
          id="photo"
          style={{ alignContent: "center", alignItems: "center" }}
        />
      </div>
      <div className="d-flex flex-column">
        <Divider orientation="center">Facts</Divider>
        <List
          style={{ alignContent: "center", marginBottom: 20 }}
          id="list"
          size="small"
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    </div>
  );
}

function Motivations() {
  return (
    <div className="center">
      <div id="para">
        <Divider orientation="center">Why We Stand Out</Divider>
        <List
          id="list"
          size="small"
          bordered
          dataSource={Data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <img
          src={Guitar}
          alt="guitar man"
          style={{
            borderRadius: 10,
            width: 1100,
            height: 550,
            alignItems: "center",
            marginTop: 10,
            marginLeft: 15,
          }}
        />
      </div>
    </div>
  );
}
// shows all my socials
function Files() {
  return (
    <div className="files" style={{ alignContent: "center", padding: 25 }}>
      <div className="d-flex flex-column align-content-center">
        <div>
          <h2 className="link">Links to all our Socials</h2>
        </div>
        <div>
          <h1 className="social d-flex flex-column">
            Feel free to checkout our socials if you need any more information
          </h1>
        </div>
        <div className="list" style={{ padding: 10 }}>
          <li>
            <a href="https://www.facebook.com/glen.ashford.3">Facebook</a>
          </li>
          <li>
            <label>gap@gmail.com</label>
          </li>
          <li>
            <label>0832715705</label>
          </li>
        </div>
        <img
          src={Piano}
          alt="piano"
          className="image"
          style={{
            alignItems: "center",
            height: 550,
            width: 1100,
            borderRadius: 10,
          }}
        />
      </div>
    </div>
  );
}

// component to render all the other functions
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<UserOutlined />}>
                About Us
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                What We Do
                <Link to="/motivations" />
              </Menu.Item>
              <Menu.Item key="3" icon={<FileOutlined />}>
                Contact Us
                <Link to="/files" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 32,
                backgroundColor: "charcoal",
              }}
            >
              GAP
            </Header>
            <Content
              style={{
                margin: "24px 24px",
                padding: 24,
                background: "#fff",
                minHeight: 280,
                alignContent: "center",
              }}
            >
              <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/motivations" element={<Motivations />} />
                <Route path="/files" element={<Files />} />
              </Routes>
            </Content>
            <Footer style={{ textAlign: "center" }}>Kyle Drotsky 2021</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
