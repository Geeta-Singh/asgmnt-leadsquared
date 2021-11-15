<template>
  <div>
    <div id="chart">
        hi geeta
        {{chartOptions}}--
        {{series}}
      <ApexCharts type="area" height="350"  :options="chartOptions" :series="series">
          hi
      </ApexCharts>
    </div>
  </div>
</template>
<script>
import ApexCharts from "vue-apexcharts";
export default {
  components: {
    ApexCharts
  },
  data() {
    return {
        dates:['Jan','Feb','Mar','Apr'],
      
        series: [
          {
            name: "",
            data: ['Jan','Feb','Mar','Apr']
          }
        ],
        chartOptions: {
          chart: {
            type: "line",
            stacked: false,
            height: 350,
            zoom: {
              type: "x",
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: "zoom"
            }
          },
          dataLabels: {
            enabled: false
          },
          
          title: {
            // text: "Stock Price Movement",
            // align: "left"
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            }
          },
          yaxis: {
               labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            // labels: {
            //   formatter: function(val) {
            //       console.log('val',val)
            //     return (val / 1000000).toFixed(0);
            //   }
            // },
            title: {
              text: "Price"
            }
          },
          xaxis: {
            type: "datetime",
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          },
          tooltip: {
            shared: false,
            y: {
              formatter: function(val) {
                return (val / 1000000).toFixed(0);
              }
            }
          }
       
      }
    };
  }
};
</script>