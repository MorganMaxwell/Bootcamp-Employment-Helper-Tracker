import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

class PieChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentDidMount(){
        this.getLevels();
    }

    getLevels = () => {
        axios.get('/api/job/')
        .then(res=> {
            var intern = 0;
            var jr = 0;
            var mid = 0;
            var sr = 0;
            var lead = 0;
            for (let i = 0; i < res.data.length; i++) {
                switch (res.data[i].level) {
                    case "Internship":
                        intern++;
                        break;
                    case "Junior":
                        jr++;
                        break;
                    case "Mid":
                        mid++;
                        break;
                    case "Senior":
                        sr++;
                        break;
                    case "Team Lead":
                        lead++
                        break;
                
                    default:
                        break;
                }
                
            }

        this.setState({
            chartData: {
                labels: ["Internship", "Junior", "Mid", "Senior", "Team Lead"],
                datasets:[{
                    label: 'Number of jobs',
                    data:[
                        intern, //intern
                        jr, //jr
                        mid, //mid
                        sr, //sr
                        lead //lead
                    ]
                }
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 162, 132, 0.6)'
                ]
            }
        })
    })
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