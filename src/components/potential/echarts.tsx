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
          color: 'rgb(159 239 0)',
        },
        areaStyle: {
          color: 'rgb(159 239 0)',
        },
        emphasis: {
          focus: 'series',
          areaStyle: {
            color: 'rgba(159, 239, 0, 0.8)',
          },
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
    <div className=" ~w-[300px]/[400px]">
      <ReactECharts
        option={options}
        className="~w-[300px]/[400px] "
        opts={{ renderer: 'canvas' }}
      />
    </div>
  );
};

export default RadarChart;
