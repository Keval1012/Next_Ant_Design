import { Card, Col, Progress, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Image from 'next/image';
import React from 'react';
import Profile from '../../../public/profile.webp';

const TopYoutube = () => {
  return (
    <div>
      <Card title='Top earnings form Youtube'>
        <Row gutter={[3, 3]}>
          <Col span={24}>
            <Row gutter={8} align='middle'>
              <Col span={5}>
                <Image src={Profile} alt='image' width={100} height={50} />  
              </Col>
              <Col span={19}>
                <Paragraph style={{ marginBottom: 0 }}>
                  Dashboard using HTML and CSS
                </Paragraph>
                <Progress percent={75} size='small' />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={8} align='middle'>
              <Col span={5}>
                <Image src={Profile} alt='image' width={100} height={50} />  
              </Col>
              <Col span={19}>
                <Paragraph style={{ marginBottom: 0 }} ellipsis>
                  Create a Modern Website with HTML and CSS | Step-by-Step Guide
                </Paragraph>
                <Progress percent={60} size='small' />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={8} align='middle'>
              <Col span={5}>
                <Image src={Profile} alt='image' width={100} height={50} />  
              </Col>
              <Col span={19}>
                <Paragraph style={{ marginBottom: 0 }} ellipsis>
                  How to add background image in Next JS with image optimization
                </Paragraph>
                <Progress percent={90} size='small' />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default TopYoutube;