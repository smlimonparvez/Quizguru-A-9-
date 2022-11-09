import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';


const Analysis = () => {
    const chart = useLoaderData();

    return (
        <BarChart className='mx-auto' width={400} height={450} data={chart.data}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip/>
        </BarChart>
    );
};

export default Analysis;