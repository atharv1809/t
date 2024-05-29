// import { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import styles from './chart.module.css';

// const ApexChart = () => {
//   const [series] = useState([14, 23, 21, 17, 15, 10, 12, 17, 21]);
//   const [options] = useState({
//     chart: {
//       type: 'polarArea',
//     },
//     stroke: {
//       colors: ['#00008B']
//     },
//     fill: {
//       opacity: 0.6
//     },
//     responsive: [{
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 200
//         },
//         legend: {
//           position: 'bottom'
//         }
//       }
//     }],
//     plotOptions: {
//       polarArea: {
//         dataLabels: {
//           position: 'top'
//         }
//       },
//       dataLabels: {
//         enabled: true,
//         style: {
//             colors: ['#000']
//         },
//         offsetX: 30
//       },
//     },
//   });

//   return (
//     <div>
//       <div id="chart" className={styles.short}>
//         <ReactApexChart options={options} series={series} type="polarArea" />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };
// export default ApexChart;

// import { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import styles from './chart.module.css';

// const ApexChart = () => {
//   const [series] = useState([14, 23, 21, 17, 15, 10, 12, 17, 21]);
//   const [options] = useState({
//     chart: {
//       type: 'polarArea',
//       background: '#0c1b46'
//     },
//     stroke: {
//       colors: [''] // Set dark blue color for the borders
//     },
//     fill: {
//       opacity: 0.6
//     },
//     responsive: [{
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 200
//         },
//         legend: {
//           position: 'bottom'
//         }
//       }
//     }],
//     plotOptions: {
//       polarArea: {
//         rings: {
//           strokeColor: '#00008B' // Set dark blue color for the rings' borders
//         },
//         spokes: {
//           strokeColor: '#00008B' // Set dark blue color for the spokes' borders
//         },
//         dataLabels: {
//           position: 'top'
//         }
//       },
//       dataLabels: {
//         enabled: true,
//         style: {
//             colors: ['#000']
//         },
//         offsetX: 30
//       },
//     },
//   });

//   return (
//     <div>
//       <div id="chart" className={styles.short}>
//         <ReactApexChart options={options} series={series} type="polarArea" />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default ApexChart;  

// import { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import styles from './chart.module.css';

// const ApexChart = () => {
//   const [series] = useState([14, 23, 21, 17, 15, 10, 12, 17, 21]);
//   const [options] = useState({
//     chart: {
//       type: 'polarArea',
//       background: '#0c1b46'
//     },
//     stroke: {
//       colors: ['#00008B']
//     },
//     fill: {
//       opacity: 0.6
//     },
//     responsive: [{
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 200
//         },
//         legend: {
//           position: 'bottom'
//         }
//       }
//     }],
//     plotOptions: {
//       polarArea: {
//         rings: {
//           strokeColor: '#00008B' // Set dark blue color for the rings' borders
//         },
//         spokes: {
//           strokeColor: '#00008B' // Set dark blue color for the spokes' borders
//         },
//         dataLabels: {
//           position: 'top'
//         }
//       },
//       dataLabels: {
//         enabled: true,
//         style: {
//             colors: ['#ffffff']
//         },
//         offsetX: 30
//       },
//     },
//   });

//   return (
//     <div>
//       <div id="chart" className={styles.short}>
//         <ReactApexChart options={options} series={series} type="polarArea" />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default ApexChart;

import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from './chart.module.css';

const ApexChart = () => {
  const [series] = useState([14, 23, 21, 17, 15, 10, 12, 17, 21]);
  const [options] = useState({
    chart: {
      type: 'polarArea',
      background: '#0c1e4e' // Set dark navy blue background color
    },
    stroke: {
      // show: true,
      width: 2,
      colors: ['#00008B'] // Set dark blue color for the sector borders
    },
    fill: {
      opacity: 0.6
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'top'
        }
      }
    }],
    plotOptions: {
      polarArea: {
        rings: {
          strokeColor: '#194285'
        },
        spokes: {
          strokeColor: '#194285',
          width: 10
        },
        dataLabels: {
          position: 'bottom',
          style: {
            colors: ['#FFFFFF'] // Set data points (values) color to white
          }
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#FFFFFF' // Set axis labels (5, 10, 15, 20, 25) color to white
        }
      },
      stroke:{
        strokeColor: '#00008B'
      }
    },
    legend: {
      labels: {
        colors: '#FFFFFF' // Set legend labels color to white
      }
    }
  });

  return (
    <div>
      <div id="chart" className={styles.short}>
        <ReactApexChart options={options} series={series} type="polarArea" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;