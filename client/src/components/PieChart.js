import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';


class PieChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentDidMount(){
        this.getPositions();
    }

    getPositions = () => {
        axios.get('api/job/')
        .then(res=>{
            var fr = 0;
            var back = 0;
            var fs = 0;
            var devOp = 0;
            var qa = 0;
            for (let i = 0; i < res.data.length; i++) {
                switch (res.data[i].position) {
                    case "Front End":
                        fr++;
                        break;
                    case "Back End":
                        back++;
                        break;
                    case "Full-Stack":
                        fs++;
                        break;
                    case "DevOps":
                        devOp++;
                        break;
                    case "QA":
                        qa++
                        break;
                
                    default:
                        break;
                }
            }

            this.setState({
                    chartData: {
                        labels: ["Front End", "Back End", "Full-Stack", "DevOps", "QA"],
                        datasets:[{
                            label: 'Number of jobs',
                            data:[
                                fr,
                                back,
                                fs,
                                devOp,
                                qa
                            ],
                            backgroundColor:[
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)'
                            ]
                        }
                        
                        ],
                        
                    }
            })
        })
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
