import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
    AppBar, Toolbar, Typography, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, makeStyles, TableSortLabel
} from '@material-ui/core';
import './subdashboard.css'

ChartJs.register(
    ArcElement, Tooltip, Legend
);

const SubDashboard = () => {

    const [showChart, setShowChart] = useState(true);
    const tdata = [
        { campaign: 'Cosmetics', clicks: 712, cost: 4272, conversions: 8, revenue: 16568 },
        { campaign: 'Serums', clicks: 3961, cost: 27331, conversions: 115, revenue: 266800 },
        { campaign: 'Facewash', clicks: 9462, cost:  76831, conversions: 123, revenue:  266800 },
        { campaign: 'Shampoos', clicks: 439, cost: 2151, conversions: 5, revenue: 11029 },
        { campaign: 'Conditioners', clicks: 1680, cost: 3864, conversions: 49, revenue: 175249 },
        { campaign: 'oil', clicks: 4978, cost: 29370, conversions: 189, revenue: 623103 },
       
    ];
    const sdata = [
        { groups: 'Male', clicks: 348, cost: 12528, conversions: 42, revenue: 62118 },
        { groups: 'Female', clicks: 692, cost: 24912, conversions: 35, revenue: 5175 },
        { groups: 'Unknown', clicks: 105, cost:  3943, conversions: 3, revenue:  4489 },
       
       
    ];
    //   const classes = useStyles();
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortsField, setSortsField] = useState(null);
    const [sortsDirection, setSortsDirection] = useState('asc');

    const sortedData = [...tdata].sort((a, b) => {
        if (sortField) {
            return sortDirection === 'asc' ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
        }
        return 0;
    });
    const sortData = [...sdata].sort((a, b) => {
        if (sortsField) {
            return sortsDirection === 'asc' ? a[sortsField] - b[sortsField] : b[sortsField] - a[sortsField];
        }
        return 0;
    });

    const handleSort = (field) => {
        const isAsc = sortField === field && sortDirection === 'asc';
        setSortField(field);
        setSortDirection(isAsc ? 'desc' : 'asc');
    };
    const handlesSort = (fied) => {
        const isAsc = sortsField === fied && sortsDirection === 'asc';
        setSortsField(fied);
        setSortsDirection(isAsc ? 'desc' : 'asc');
    };

    const total = tdata.reduce((acc, row) => ({
        clicks: acc.clicks + row.clicks,
        cost: acc.cost + row.cost,
        conversions: acc.conversions + row.conversions,
        revenue: acc.revenue + row.revenue,
    }), { clicks: 0, cost: 0, conversions: 0, revenue: 0 });

    const stotal = sdata.reduce((acc, row) => ({
        clicks: acc.clicks + row.clicks,
        cost: acc.cost + row.cost,
        conversions: acc.conversions + row.conversions,
        revenue: acc.revenue + row.revenue,
    }), { clicks: 0, cost: 0, conversions: 0, revenue: 0 });

    const data = {
        labels: ['40%-Male', '25%-Unknown', '35%-Female'],
        datasets: [
            {
                data: [40, 35, 25],
                backgroundColor: ['blue', 'black', 'orange'],

            },
        ],
    };

    const options = {

    }

    return (
        <Container fluid className='bg-light dash-height'>
            <Row className='pt-5'>
                <Col md={6} className='p-4'>
                    <div className='bgwhite'>
                       
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Ad Insights
                                        </TableCell>
                                        <TableCell>
                                        </TableCell>
                                        <TableCell>
                                        </TableCell><TableCell>
                                        </TableCell>
                                        <TableCell><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <TableSortLabel active={sortField === 'campaign'} direction={sortDirection} onClick={() => handleSort('campaign')}>
                                                Campaigns
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel active={sortField === 'clicks'} direction={sortDirection} onClick={() => handleSort('clicks')}>
                                                Clicks
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel active={sortField === 'cost'} direction={sortDirection} onClick={() => handleSort('cost')}>
                                                Cost
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel active={sortField === 'conversions'} direction={sortDirection} onClick={() => handleSort('conversions')}>
                                                Conversions
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel active={sortField === 'revenue'} direction={sortDirection} onClick={() => handleSort('revenue')}>
                                                Revenue
                                            </TableSortLabel>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sortedData.map((row) => (
                                        <TableRow key={row.campaign}>
                                            <TableCell>{row.campaign}</TableCell>
                                            <TableCell>{row.clicks}</TableCell>
                                            <TableCell>{`USD ${row.cost}`}</TableCell>
                                            <TableCell>{row.conversions}</TableCell>
                                            <TableCell>{`USD ${row.revenue}`}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell>Total</TableCell>
                                        <TableCell>{total.clicks}</TableCell>
                                        <TableCell>{`USD ${total.cost}`}</TableCell>
                                        <TableCell>{total.conversions}</TableCell>
                                        <TableCell>{`USD ${total.revenue}`}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                </Col>
                <Col md={6} className='p-4'>
<div className='right-div'>
                    <div className='chart-div'>
                        {showChart && <Doughnut data={data} options={options} className="dough-height"/>}
                    </div>

                    <div className='table-div bg-white mb-5'>
                        {!showChart && (
                            // <table className='bg-white mb-5'>
                            //     <thead>
                            //         <tr>
                            //             <th>Ad Insights</th>
                            //             <th></th>
                            //             <th></th>
                            //             <th></th>
                            //             <th><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg></th>
                            //         </tr>
                            //         <tr>
                            //             <th>
                            //                 Group
                            //             </th>
                            //             <th >
                            //                 Clicks
                            //             </th>
                            //             <th>
                            //                 Cost
                            //             </th>
                            //             <th >Conversion</th>
                            //             <th >Revenue </th>
                            //         </tr>
                            //     </thead>
                            //     <tbody>
                            //         <tr>
                            //             <td>Male</td>
                            //             <td>348</td>
                            //             <td>USD 12,580</td>
                            //             <td>42</td>
                            //             <td>USD 62,118</td>
                            //         </tr>
                            //         <tr>
                            //             <td>Female</td>
                            //             <td>692</td>
                            //             <td>USD 24,912</td>
                            //             <td>35</td>
                            //             <td>USD 5,175</td>
                            //         </tr>
                            //         <tr>
                            //             <td>Unknown</td>
                            //             <td>105</td>
                            //             <td>USD 3,943</td>
                            //             <td>3</td>
                            //             <td>USD 4,489</td>
                            //         </tr>
                            //     </tbody>
                            //     <tfoot>
                            //         <tr>
                            //             <td>Total</td>
                            //             <td>1,145</td>
                            //             <td>USD 48,383</td>
                            //             <td>80</td>
                            //             <td>USD 71,782</td>
                            //         </tr>
                                    
                            //     </tfoot>
                            // </table>
                            <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Ad Insights
                                        </TableCell>
                                        <TableCell>
                                        </TableCell>
                                        <TableCell>
                                        </TableCell><TableCell>
                                        </TableCell>
                                        <TableCell><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <TableSortLabel active={sortsField === 'groups'} direction={sortsDirection} onClick={() => handlesSort('groups')}>
                                            Group
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel active={sortsField === 'clicks'} direction={sortsDirection} onClick={() => handlesSort('clicks')}>
                                                Clicks
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel active={sortsField === 'cost'} direction={sortsDirection} onClick={() => handlesSort('cost')}>
                                                Cost
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel active={sortsField === 'conversions'} direction={sortsDirection} onClick={() => handlesSort('conversions')}>
                                                Conversions
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel active={sortsField === 'revenue'} direction={sortsDirection} onClick={() => handlesSort('revenue')}>
                                                Revenue
                                            </TableSortLabel>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sortData.map((row) => (
                                        <TableRow key={row.campaign}>
                                            <TableCell>{row.groups}</TableCell>
                                            <TableCell>{row.clicks}</TableCell>
                                            <TableCell>{`USD ${row.cost}`}</TableCell>
                                            <TableCell>{row.conversions}</TableCell>
                                            <TableCell>{`USD ${row.revenue}`}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell>Total</TableCell>
                                        <TableCell>{stotal.clicks}</TableCell>
                                        <TableCell>{`USD ${stotal.cost}`}</TableCell>
                                        <TableCell>{stotal.conversions}</TableCell>
                                        <TableCell>{`USD ${stotal.revenue}`}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                            )}
                    </div>

                    <div className='text-end button-div'>
                        <button onClick={() => setShowChart(true)}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" /></svg></button>
                        <button onClick={() => setShowChart(false)}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg></button>

                    </div></div>
                </Col>
            </Row>
        </Container>
    )
}

export default SubDashboard