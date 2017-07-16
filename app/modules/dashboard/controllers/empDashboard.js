//CRM Dashboard Page JS

dashboard.controller("empDashController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    vm.meMarks = false;
    vm.mscMarks = false;
   
    

    vm.lineChartOptions = { scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, bezierCurve: !0, bezierCurveTension: .4, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' };
    
    vm.barChartOptions = { scaleBeginAtZero: !0, scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>', responsive: !0, maintainAspectRatio: !0 };
    
    var me = document.getElementById("meChart").getContext("2d");
    var msc = document.getElementById("mscChart").getContext("2d");
   

    vm.meData = {
        labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],
        datasets: [
            {
                label: "My ME Semester Marks",
                fillColor: "rgba(0,192,239,0.2)",
                strokeColor: "rgba(0,192,239,1)",
                pointColor: "rgba(0,151,188,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [7.5, 8.4, 7.6, 10.0]
            }
        ]
    };

    vm.mscData = {
        labels: ["Sem 1 & 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8", "Sem 9", "Sem 10"],
        datasets: [
            {
                label: "My MSC Semester Marks",
                fillColor: "rgba(243,156,18,0.2)",
                strokeColor: "rgba(243,156,18,1)",
                pointColor: "rgba(200,127,10,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [7.7, 7.8, 8.5, 8.1, 8.1, 10.0, 7.8, 8.3, 10.0]
            }
        ]
    }; 

    var meChart = new Chart(me).Line(vm.meData, vm.lineChartOptions);
    var mscChart = new Chart(msc).Bar(vm.mscData, vm.barChartOptions);
   
    //ME Chart   
    vm.meLineChart = function () {
        var meChart = new Chart(me).Line(vm.meData, vm.lineChartOptions);
    };

    //MSC Chart
    vm.mscBarChart = function () {
        var mscChart = new Chart(msc).Bar(vm.mscData, vm.barChartOptions);
    };
      

}]);

