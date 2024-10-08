import React, {useState, useEffect} from "react"
import { Chart } from 'primereact/chart';

export default function LineDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
       // const documentStyle = getComputedStyle(document.documentElement);
       // const textColor = documentStyle.getPropertyValue('--text-color');
       // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
       // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Production',
                    data: [50, 68, 70, 71, 56, 55],
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Defects',
                    data: [4, 5, 2, 7, 6, 2],
                    fill: false,
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.7,
        };

        setChartData(data);
        setChartOptions(options);
    }, []);


    return(
        <Chart type='line' data={chartData} options={chartOptions} />
    )
}