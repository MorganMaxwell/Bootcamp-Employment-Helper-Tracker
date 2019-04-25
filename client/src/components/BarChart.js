import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class PieChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ["Internship", "Junior", "Mid", "Senior", "Team Lead"],
                datasets:[{
                    label: 'Number of jobs',
                    data:[
                        0, //intern
                        3, //jr
                        4, //mid
                        5, //sr
                        0 //lead
                    ]
                }
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 162, 132, 0.6)'
                ]
            }
        }
    }

    render(){
        return(
            <Bar
            data={this.state.chartData}
            width={100}
            height={50}
            options={{ maintainAspectRatio: true }}
            />
        )
    }
}

export default PieChart;