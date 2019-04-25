import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';


class PieChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ["Front End", "Back End", "Full-Stack", "DevOps", "QA"],
                datasets:[{
                    label: 'Number of jobs',
                    data:[
                        3,
                        4,
                        5,
                        1,
                        0
                    ]
                }
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }
        }
    }

    render(){
        return(
            <Doughnut
            data={this.state.chartData}
            width={100}
            height={50}
            options={{ maintainAspectRatio: true }}
            />
        )
    }
}

export default PieChart;
