import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';


class PieChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ["Front-end", "Back-end"],
                datasets:[{
                    label: 'Number of jobs',
                    data:[
                        3,
                        4
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
            <Pie
            data={this.state.chartData}
            width={100}
            height={50}
            options={{ maintainAspectRatio: true }}
            />
        )
    }
}

export default PieChart;
