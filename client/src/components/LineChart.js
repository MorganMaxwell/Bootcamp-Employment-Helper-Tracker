import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';
import axios from 'axios';

class LineChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentDidMount(){
        this.getSalaries();
    }

    getSalaries = () => {
        axios.get('/api/job/')
      .then(res => {
        console.log(res.data);
        let allSal = res.data.map(job => {
            return job.salary
        })

        this.setState({
            chartData: {
                labels: ["Salaries"],
                datasets:[{
                    label: 'Salaries',
                    data: allSal
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
        })

        
      }); 
    }

    render(){
        console.log("sal",this.props.salaries)
        return(
            <Scatter
            data={this.state.chartData}
            width={100}
            height={50}
            options={{ maintainAspectRatio: true }}
            />
        )
    }
}

export default LineChart;