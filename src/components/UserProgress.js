import React from 'react';
import { Avatar, Card, Flex, Progress, Typography } from 'antd';
import Title from 'antd/es/typography/Title';

const { Text } = Typography;

const UserProgress = () => {
  return (
    <div>
        <Card title='Progress'>
            <Flex vertical align='center'>
                <Avatar size={64} src='/profile.webp'></Avatar>
                <Title level={4} style={{ marginBottom: 3, marginTop: 5 }}>John Doe Smith</Title>
                <Text type='secondary'>Basic Member</Text>
            </Flex>
            <Text>Front-end</Text>
            <Progress percent={90} status='active' />
            <Text>Back-end</Text>
            <Progress percent={70} status='active' />
            <Text>Devops</Text>
            <Progress percent={40} status='active' />
            <Text>Testing</Text>
            <Progress percent={60} status='active' />
        </Card>
    </div>
  );
}

export default UserProgress;