import ReactECharts from 'echarts-for-react';

const RadarChart = () => {
  const options = {
    tooltip: {},
    radar: {
      indicator: [
        { name: '3D', max: 6500 },
        { name: 'Robotic', max: 16000 },
        { name: 'Electronic', max: 30000 },
        { name: 'CAD', max: 38000 },
        { name: 'Coding', max: 52000 },
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
    <div className="w-1/2">
      <ReactECharts
        option={options}
        className="w-[100%] h-auto"
        opts={{ renderer: 'canvas' }}
      />
    </div>
  );
};

export default RadarChart;
