import { Button, Col, Divider, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AntdGridSyatem = () => {
  return (
    <div>
      <h1
        style={{
          color: "white",
        }}
      >
        Antd Grid System
      </h1>
      <Divider>Columnas (24 c/u)</Divider>
      <Row>
        <Col span={24}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>24</h1>
          </div>
        </Col>
      </Row>

      <Divider>Columnas (12 c/u)</Divider>
      <Row gutter={[8, 8]}>
        <Col xm={24} sm={12}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>6</h1>
          </div>
        </Col>
        <Col xm={24} sm={12}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>6</h1>
          </div>
        </Col>
      </Row>

      <Divider>Columnas (8 c/u)</Divider>
      <Row gutter={[16, 16]}>
        <Col xm={24} sm={8}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>8</h1>
          </div>
        </Col>
        <Col xm={24} sm={8}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>8</h1>
          </div>
        </Col>
        <Col xm={24} sm={8}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>8</h1>
          </div>
        </Col>
      </Row>

      <Divider>Columnas (6 c/u)</Divider>
      <Row gutter={[32, 32]}>
        <Col xm={24} sm={6}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>6</h1>
          </div>
        </Col>
        <Col xm={24} sm={6}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>6</h1>
          </div>
        </Col>
        <Col xm={24} sm={6}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>6</h1>
          </div>
        </Col>
        <Col xm={24} sm={6}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>6</h1>
          </div>
        </Col>
      </Row>

      <Divider>Columnas (6 c/u)</Divider>
      <Row gutter={[16, 16]}>
        <Col flex={2}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>2/6</h1>
          </div>
        </Col>
        <Col flex={1}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>1/6</h1>
          </div>
        </Col>
        <Col flex={3}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <h1>3/6</h1>
          </div>
        </Col>
      </Row>
      <Divider>Back Button</Divider>
      <Row>
        <Col span={24}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              border: "2px solid yellow",
            }}
          >
            <Link to={"/"}>
              <h1>
              <Button>Back</Button>
              </h1>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AntdGridSyatem;
