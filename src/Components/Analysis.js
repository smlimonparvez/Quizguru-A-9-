import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';


const Analysis = () => {
    const chart = useLoaderData();
    console.log(chart.data);
      
    return (
        <BarChart width={500} height={400} data={chart.data}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
    );
};

export default Analysis;