// Customer Dashboard page

dashboard.controller("CusController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    vm.meMarks = false;
    vm.mscMarks = false;
    console.log("coming to About controller");

    vm.lineChartOptions = { scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, bezierCurve: !0, bezierCurveTension: .4, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' };
    vm.barChartOptions = { scaleBeginAtZero: !0, scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>', responsive: !0, maintainAspectRatio: !0 };

    var me = document.getElementById("meChart").getContext("2d");
    var msc = document.getElementById("mscChart").getContext("2d");

    vm.meData = {
        labels: ["G1", "G2", "G3", "G4"],
        datasets: [
            {

                fillColor: "rgba(0,192,239,0.2)",
                strokeColor: "rgba(0,192,239,1)",
                pointColor: "rgba(0,151,188,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [8.5, 9.2, 7.6, 9.8]
            }
        ]
    };
    vm.mscData = {
        labels: ["Jan", "Apr", "Jul", "Oct", "Dec"],
        datasets: [
            {

                fillColor: "rgba(243,156,18,0.2)",
                strokeColor: "rgba(243,156,18,1)",
                pointColor: "rgba(200,127,10,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [7, 8, 5, 9, 4]
            }
        ]
    };
    var meChart = new Chart(me).Line(vm.meData, vm.lineChartOptions);
    var mscChart = new Chart(msc).Bar(vm.mscData, vm.barChartOptions);
    // Line Chart
    vm.meLineChart = function () {
        var meChart = new Chart(me).Line(vm.meData, vm.lineChartOptions);
    };
    // Bar Chart
    vm.mscBarChart = function () {
        var mscChart = new Chart(msc).Bar(vm.mscData, vm.barChartOptions);
    };

}]);

