import React, { useCallback, useEffect, useState } from 'react';
import usersData from '../data.json';
import { Pagination } from './Pagination';
import filterServiceProps from '../component/filter';

interface User {
    id: number;
    name: string;
    email: string;
}

const MainPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [filterData, setFilterData] = useState({
        limit: 10, 
        page: 1,
    });
    const SHOW_PAGE_COUNT_ARR = [10, 20, 30, 40, 50];

    const onPageDrpSelect = (e: string) => {
        const updatedFilterData = {
            ...filterData,
            limit: parseInt(e),
            page: 1,
        };
        setFilterData(updatedFilterData);
        filterServiceProps.saveState('filter', JSON.stringify(updatedFilterData));
    };

    const handlePageChange = useCallback((newPage: number): void => {
        const updatedFilterData = {
            ...filterData,
            page: newPage,
        };
        setFilterData(updatedFilterData);
        filterServiceProps.saveState('filter', JSON.stringify(updatedFilterData));
    }, [filterData]);

    useEffect(() => {
        // Update filtered users when users data changes or filter data changes
        const start = (filterData.page - 1) * filterData.limit;
        const end = start + filterData.limit;
        setFilteredUsers(users.slice(start, end));
    }, [users, filterData]);

    useEffect(() => {
        // Load users data
        setUsers(usersData);
    }, []);

    const totalPages = Math.ceil(users.length / filterData.limit);

    return (
        <div>
            <select value={filterData.limit} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', "border": "1px solid #cbd5e0", "borderRadius": "0.375rem", "paddingLeft": "0.75rem", "paddingRight": "0.75rem", "fontSize": "0.875rem", "paddingTop": "0.375rem", "paddingBottom": "0.375rem", "color": "#4b5563", "marginLeft": "0.25rem", "marginRight": "0.25rem", "backgroundColor": "#ffffff", "borderColor": "#a5b4fc" }}
                onChange={(e) => onPageDrpSelect(e.target.value)}>
                {SHOW_PAGE_COUNT_ARR.map((item: number) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
            <ul>
                {filteredUsers.map((user: User) => (
                    <li key={user.id}>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </li>
                ))}
            </ul>
            <Pagination currentPage={filterData.page} totalPages={totalPages} onPageChange={handlePageChange} recordsPerPage={5} />
        </div>
    );
};

export default MainPage;
