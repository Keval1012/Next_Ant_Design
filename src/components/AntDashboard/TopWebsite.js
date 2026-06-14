import { Card, Col, Progress, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Image from "next/image";
import React from "react";
import Profile from '../../../public/profile.webp';

const TopWebsite = () => {
  return (
    <div>
      <Card title="Top earnings form Website">
        <Row gutter={[3, 3]}>
          <Col span={24}>
            <Row gutter={8} align="middle">
              <Col span={5}>
                <Image src={Profile} alt="image" width={100} height={50} />
              </Col>
              <Col span={19}>
                <Paragraph style={{ marginBottom: 0 }}>
                  Next JS + Tailwind CSS card design components
                </Paragraph>
                <Progress percent={65} size="small" />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={8} align="middle">
              <Col span={5}>
                <Image src={Profile} alt="image" width={100} height={50} />
              </Col>
              <Col span={19}>
                <Paragraph style={{ marginBottom: 0 }}>
                  How to add background video in HTML website
                </Paragraph>
                <Progress percent={95} size="small" />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={8} align="middle">
              <Col span={5}>
                <Image src={Profile} alt="image" width={100} height={50} />
              </Col>
              <Col span={19}>
                <Paragraph style={{ marginBottom: 0 }} ellipsis>
                  Building Your Personal Portfolio Website from Scratch with HTML and CSS: Step-by-Step Guide
                </Paragraph>
                <Progress percent={80} size="small" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default TopWebsite;
