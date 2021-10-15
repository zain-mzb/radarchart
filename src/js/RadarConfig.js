export const RadarData = {
  labels: ["Soft Skills", "Tech Skills", "Experience", "Education", "Salary"],
  datasets: [
    {
      label: "Candidate 1: Rick Astley",
      backgroundColor: "rgba(34, 202, 236, .2)",
      fill: true,
      borderColor: "rgba(34, 202, 236, 1)",
      hoverBorderColor:"blue",
      pointBackgroundColor: "rgba(34, 202, 236, 1)",
      poingBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 202, 236, 1)",
      data: [13, 15, 12, 6, 10],
    },
    {
      label: "Candidate 2: Michael Jackson",
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      data: [8, 7, 16, 12, 15],

    },
    
  ]
};

export const RadarOptions = {
  scale: {
    
    ticks: {
      min: 0,
      max: 16,
      stepSize: 2,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)",

    },
    angleLines: {
      color: "rgba(191, 191, 191, 1)",
      lineWidth: 1
    },
    gridLines: {
      color: "rgba(191, 191, 191, 1)",
      circular: true
    },
    pointLabels: {
      fontColor:"black",
      fontSize: 15
    },
    datasets: {
      label:{
        fontColor:"white",
        fontSize: 15
      }
      
    }
  }
};
