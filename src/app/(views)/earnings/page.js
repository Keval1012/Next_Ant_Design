import EarningCard from '@/components/AntDashboard/EarningCard';
import LastEarning from '@/components/AntDashboard/LastEarning';
import TopWebsite from '@/components/AntDashboard/TopWebsite';
import TopYoutube from '@/components/AntDashboard/TopYoutube';
import { Col, Row } from 'antd';
import React from 'react';

const page = () => {
  return (
    <div>
      <EarningCard />
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={12}><TopYoutube /></Col>
        <Col span={12}><TopWebsite /></Col>
      </Row>
      <LastEarning />
    </div>
  );
}

export default page;