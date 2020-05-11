import React from 'react';

import Table from '@bit/nexxtway.react-rainbow.table';
import Badge from '@bit/nexxtway.react-rainbow.badge';
import Column from '@bit/nexxtway.react-rainbow.column';

import { data } from './data';
const badgeStyles = { color: '#1de9b6' };
const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

const newClass = () => {
    
    return ( <Table data={data} keyField="id" style={{ width: 600 }}>
    <Column header="Name" field="name" />
    <Column header="Status" field="status" component={StatusBadge} />
    <Column header="Company" field="company" />
    <Column header="Email" field="email" />
</Table> );
}
 
export default newClass;

