import React, { useRef } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Form from 'react-bootstrap/Form';
import agent_dashboardStyles from '@/app/components/agent_dashboard.module.css';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
    const chart = useRef(null);

    const addSymbols = (e) => {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }

    const toggleDataSeries = (e) => {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.current.render();
    }

    const options = {
        animationEnabled: true,
        colorSet: "colorSet2",
        dataPointWidth: 40,
        axisX: {
            valueFormatString: "DDD",
            gridColor: '#EEEEEE',
            lineThickness: 0,
            labelFontColor: '#2E2A2A'
        },
        axisY: {
            prefix: "$",
            labelFormatter: addSymbols,
            gridColor: '#EEEEEE',
            lineThickness: 0,
            minimum: 0,
            labelFontColor: '#77838F'
        },
        data: [{
            type: "column",
            name: "Property Views",
            showInLegend: false,
            xValueFormatString: "MMMM YYYY",
            yValueFormatString: "$#,##0",
            color: ' #2665B0',
            label: true,
            dataPoints: [
                { x: 0, y: 104500, label: "Mon", color: '#E6EEF5' },
                { x: 1, y: 150000, label: "Tue", color: '#E6EEF5' },
                { x: 2, y: 220000, label: "Wed", indexLabel: '220k', indexLabelFontColor: '#77838F' },
                { x: 3, y: 150000, label: "Thu", color: '#E6EEF5' },
                { x: 4, y: 127000, label: "Fri", color: '#E6EEF5' },
                { x: 5, y: 104500, label: "Sat", color: '#E6EEF5' },
            ]
        }
        ]
    }

    return (
        <div className={agent_dashboardStyles.chart_container}>
            <div className='mb-4 d-flex justify-content-between align-items-center'>
                <div>
                    <h4 className={agent_dashboardStyles.messages_heading}>Property View</h4>
                </div>
                <div className='d-flex align-items-center'>
                    <span className={`${agent_dashboardStyles.sort_text} me-2`}>Sort by:</span>
                    <Form.Select aria-label="Default select example" className={agent_dashboardStyles.chart_select}>
                        <option value="1">Weekly</option>
                        <option value="2">Monthly</option>
                        <option value="3">Yearly</option>
                        <option value="4">Daily</option>
                    </Form.Select>
                </div>
            </div>
            <CanvasJSChart options={options}
                onRef={ref => chart.current = ref}
            />
        </div>
    );
};

export default Chart;