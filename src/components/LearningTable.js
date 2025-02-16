import { Space, Table, Tag } from 'antd';
import React from 'react';

const LearningTable = () => {

    const columns = [
        {
            title: 'Course name',
            dataIndex: 'courseName',
            key: 'courseName'
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration'
        },
        {
            title: 'Leval',
            dataIndex: 'leval',
            key: 'leval'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, text) => (
                <Tag color={text.status === 'completed' ? 'green' : text.status === 'inProgress' ? 'blue' : 'red'}>
                    {text.status === 'completed' ? 'Completed' : text.status === 'inProgress' ? 'In progress' : 'Pending'}
                </Tag>
            )
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <Space size='middle'>
                    <a>View</a>
                    <a>Delete</a>
                </Space>
            )
        }
    ];

    const data = [
        {
            id: 1,
            courseName: 'Design Accessibility',
            duration: '5 hours',
            leval: 'Advanced',
            status: 'completed'
        },
        {
            id: 2,
            courseName: 'UX Research',
            duration: '6 hours',
            leval: 'Intermidiate',
            status: 'inProgress'
        },
        {
            id: 3,
            courseName: 'Figma for Beginners',
            duration: '9 hours',
            leval: 'Advanced',
            status: 'completed'
        },
        {
            id: 4,
            courseName: 'HYML & CSS',
            duration: '4 hours',
            leval: 'Advanced',
            status: 'pending'
        },
        {
            id: 5,
            courseName: 'Java for Beginners',
            duration: '3 hours',
            leval: 'Intermidiate',
            status: 'inProgress'
        },
        {
            id: 6,
            courseName: 'Next JS',
            duration: '5 hours',
            leval: 'Advanced',
            status: 'completed'
        },
        {
            id: 7,
            courseName: 'Design Patterns',
            duration: '2 hours',
            leval: 'Intermidiate',
            status: 'pending'
        },
        {
            id: 8,
            courseName: 'Machine Learning Concepts',
            duration: '6 hours',
            leval: 'Advanced',
            status: 'completed'
        },
    ];

    return (
        <div>
            <Table className='mt-4' columns={columns} dataSource={data} rowKey='id' />
        </div>
    );
}

export default LearningTable;