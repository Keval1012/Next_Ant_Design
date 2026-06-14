'use client';
import React from 'react';
import { Header } from 'antd/es/layout/layout';
import { BellOutlined, RadarChartOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Flex } from 'antd';
import { usePathname } from 'next/navigation';
import Title from 'antd/es/typography/Title';
import Search from 'antd/es/input/Search';

const AppHeader = () => {

    const pathName = usePathname();

    return (
        <Header className='!bg-white border-b border-[#f1f1f1] flex items-center justify-between sticky top-0 z-10'>
            {(pathName !== '/ant-dashboard' && pathName !== '/earnings') ? <>
                <div className='flex items-center gap-2'>
                    <RadarChartOutlined className='text-3xl' />
                    <div>Academic</div>
                </div>
                <div className='flex items-center gap-2'>
                    <Avatar size={36} src='/profile.webp' />
                    <div>John Doe</div>
                </div>
            </> : <>
                <Title level={3} style={{ margin: 0, color: '#2288ff' }}>
                    My Wallet
                </Title>
                <Search
                    size='large'
                    style={{ width: 500 }}
                    enterButton='Search'
                    placeholder='Search anything...'
                />
                <Flex align='center' gap={8}>
                    <Button type='text' shape='circle' icon={<SettingOutlined />}></Button>
                    <Button type='text' shape='circle' icon={<BellOutlined />}></Button>
                    <Avatar>K</Avatar>
                </Flex>
            </>}
        </Header>
    );
}

export default AppHeader;