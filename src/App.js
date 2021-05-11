import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  QqOutlined,
  DingtalkOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      
      <div style={{ width: 256 }}>
        
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? DingtalkOutlined : DingtalkOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <div>
            <img src="/images/page2.png"/>
          </div>
{/* -------------------------------------------------------------------------------------------------------- */}
          <SubMenu key="sub1" icon={<QqOutlined />} title="Root of Equation">
            <Menu.Item key="5">Bisection</Menu.Item>
            <Menu.Item key="6">False Position</Menu.Item>
            <Menu.Item key="7">One-point iteration</Menu.Item>
            <Menu.Item key="8">Newton Raphson</Menu.Item>
          </SubMenu>
{/* -------------------------------------------------------------------------------------------------------- */}
          <SubMenu key="sub2" icon={<QqOutlined />} title="Linear Algaba">
            <Menu.Item key="9">Cramer's Rule</Menu.Item>
            <Menu.Item key="10">Gauss Jordan</Menu.Item>
            <Menu.Item key="11">Gauss Seidel</Menu.Item>
            <Menu.Item key="12">Jacobi</Menu.Item>
            <Menu.Item key="13">Conjugate Gradient</Menu.Item>
            <Menu.Item key="14">Gauss Elimination</Menu.Item>
            <Menu.Item key="15">LU Decomposition Method</Menu.Item>
          </SubMenu>
{/* -------------------------------------------------------------------------------------------------------- */}
          <SubMenu key="sub3" icon={<QqOutlined />} title="Interpolation Technique">
            <Menu.Item key="16">Newton's Divided</Menu.Item>
            <Menu.Item key="17">Lagrange</Menu.Item>
            <Menu.Item key="18">Spline</Menu.Item>
          </SubMenu>
{/* -------------------------------------------------------------------------------------------------------- */}
          <SubMenu key="sub4" icon={<QqOutlined />} title="Regression">
            <Menu.Item key="19">Linear</Menu.Item>
            <Menu.Item key="20">Polynomial</Menu.Item>
            <Menu.Item key="21">Multiple Linear</Menu.Item>
          </SubMenu>
{/* -------------------------------------------------------------------------------------------------------- */}
          <SubMenu key="sub5" icon={<QqOutlined />} title="Regression">
            <Menu.Item key="22">Trapzoidal</Menu.Item>
            <Menu.Item key="23">Composite Trapzoidal</Menu.Item>
            <Menu.Item key="24">Simpson</Menu.Item>
            <Menu.Item key="25">Composite Simpson</Menu.Item>
          </SubMenu>

        </Menu>
        <div>
            <img src="/images/gif1.gif"/>
        </div>
      </div>
    );
  }
}


export default App;
