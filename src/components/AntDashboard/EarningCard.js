import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Flex, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import React from 'react';

const EarningCard = () => {
  return (
    <div>
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card>
            <Paragraph type='secondary'>Youtube</Paragraph>
            <Flex justify='space-between'>
              <Title level={4} style={{ marginBottom: 0 }}>$ 1257.65</Title>
              <p><ArrowUpOutlined style={{ fontSize: 24, color: 'green' }} /></p>
            </Flex>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Paragraph type='secondary'>Facebook</Paragraph>
            <Flex justify='space-between'>
              <Title level={4} style={{ marginBottom: 0 }}>$ 224.98</Title>
              <p><ArrowDownOutlined style={{ fontSize: 24, color: 'red' }} /></p>
            </Flex>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Paragraph type='secondary'>Website</Paragraph>
            <Flex justify='space-between'>
              <Title level={4} style={{ marginBottom: 0 }}>$ 674.43</Title>
              <p><ArrowUpOutlined style={{ fontSize: 24, color: 'green' }} /></p>
            </Flex>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Paragraph type='secondary'>Buy me a coffee</Paragraph>
            <Flex justify='space-between'>
              <Title level={4} style={{ marginBottom: 0 }}>$ 453.67</Title>
              <p><ArrowDownOutlined style={{ fontSize: 24, color: 'red' }} /></p>
            </Flex>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EarningCard;