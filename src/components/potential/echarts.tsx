import ReactECharts from 'echarts-for-react';

const RadarChart = () => {
  const options = {
    tooltip: {},
    radar: {
      indicator: [
        { name: '3D', max: 6500 },
        { name: 'Robotic', max: 16000 },
        { name: 'Electronic', max: 30000 },
        { name: 'cad', max: 38000 },
        { name: 'coding', max: 52000 },
        { name: 'AI', max: 25000 },
      ],
    },
    series: [
      {
        type: 'radar',
        lineStyle: {
          color: 'blue',
        },
        areaStyle: {
          color: 'rgb(159 239 0)',
        },
        data: [
          {
            value: [4200, 8000, 20000, 10000, 50000, 18000],
          },
        ],
      },
    ],
  };

  return (
    <ReactECharts
      option={options}
      style={{ height: '400px', width: '600px' }}
    />
  );
};

export default RadarChart;
