'use client';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AppSideMenu = () => {

    const pathName = usePathname();
    const [selectedKey, setSelectedKey] = useState(['']);

    useEffect(() => {
        if (pathName === '/') setSelectedKey(['1']);
        else if (pathName.startsWith('/ant-dashboard')) setSelectedKey(['2']);
        else if (pathName.startsWith('/courses')) setSelectedKey(['3']);
        else if (pathName.startsWith('/tutorials')) setSelectedKey(['4']);
        else if (pathName.startsWith('/best-practices')) setSelectedKey(['5']);
        else if (pathName.startsWith('/certifications')) setSelectedKey(['6']);
        else if (pathName.startsWith('/resources')) setSelectedKey(['7']);
        else if (pathName.startsWith('/events')) setSelectedKey(['8']);
        else if (pathName.startsWith('/community')) setSelectedKey(['9']);
        else if (pathName.startsWith('/earnings')) setSelectedKey(['10']);
        else if (pathName.startsWith('/wallet')) setSelectedKey(['11']);
        else if (pathName.startsWith('/loans')) setSelectedKey(['12']);
        else if (pathName.startsWith('/expences')) setSelectedKey(['13']);
        else if (pathName.startsWith('/trading')) setSelectedKey(['14']);
        else if (pathName.startsWith('/vaults')) setSelectedKey(['15']);
        else if (pathName.startsWith('/reports')) setSelectedKey(['16']);
    }, [pathName]);

    const menuItems = [
        { label: <Link href='/'>Home</Link>, key: 1 },
        { label: <Link href='/ant-dashboard'>Ant Dashboard</Link>, key: 2 },
        { type: 'divider' },
        { label: <Link href='/courses'>Courses</Link>, key: 3 },
        { label: <Link href='/tutorials'>Tutorials</Link>, key: 4 },
        { label: <Link href='/best-practices'>Best Practices</Link>, key: 5 },
        { label: <Link href='/certifications'>Certifications</Link>, key: 6 },
        { type: 'divider' },
        { label: <Link href='/resources'>Resources</Link>, key: 7 },
        { label: <Link href='/events'>Events</Link>, key: 8 },
        { label: <Link href='/community'>Community</Link>, key: 9 },
        { type: 'divider' },
        { label: <Link href='/earnings'>Earnings</Link>, key: 10 },
        { label: <Link href='/wallet'>Wallet</Link>, key: 11 },
        { label: <Link href='/loans'>Loans</Link>, key: 12 },
        { label: <Link href='/expences'>Expences</Link>, key: 13 },
        { label: <Link href='/trading'>Trading</Link>, key: 14 },
        { label: <Link href='/vaults'>Vaults</Link>, key: 15 },
        { label: <Link href='/reports'>Reports</Link>, key: 16 },
    ];

    return (
        <Menu mode='inline' items={menuItems} selectedKeys={selectedKey} />
    );
}

export default AppSideMenu;