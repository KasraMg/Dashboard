 var options = {
    series: [{
        name: 'series1',
        data: [100, 40, 28, 51, 42, 109, 100]
      }],
        chart: {
        height: 250,
        width:280,
        type: 'area',
        zoom: {
            enabled: false
          },
          toolbar: {
            autoSelected: "pan",
            show: false
          },
      },
      grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 50]
        }
      },
      
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },

      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();

      const timer_1_hour=document.querySelector('.timer-1-hour')
      const timer_1_min=document.querySelector('.timer-1-min')
      const timer_1_sec=document.querySelector('.timer-1-sec')

    

      
     let timer1Interval = setInterval(() => {
      
          timer_1_sec.innerHTML --
          
          if (timer_1_sec.innerHTML == -1) {
            timer_1_min.innerHTML --
            timer_1_sec.innerHTML =59
            
          }

           if (timer_1_sec.innerHTML == -1 &&  timer_1_min.innerHTML== 0) {
            timer_1_min.innerHTML =60
            timer_1_sec.innerHTML =59
            timer_1_hour.innerHTML --
           }
           
           if (timer_1_sec.innerHTML == 0 &&  timer_1_min.innerHTML== 0 && timer_1_hour.innerHTML==0) {
       clearInterval(timer1Interval)
           }


        }, 1000); 
  
     