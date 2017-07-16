app.controller("appCtrl", ['$rootScope', '$scope', '$state', '$location', 'Flash','appSettings',
function ($rootScope, $scope, $state, $location, Flash,appSettings) {

    $rootScope.theme = appSettings.theme;
    $rootScope.layout = appSettings.layout;

    var vm = this;


    //available layouts
    vm.layouts = [
        {
            name: "Boxed",
            layout: "layout-boxed"
        },
        {
            name: "Fixed",
            layout: "fixed"
        },
        {
            name: "Sidebar Collapse",
            layout: "sidebar-collapse"
        },
    ];


    //Main menu items of the dashboard
    vm.menuItems = [
        {
            title: "CRM Dashboard",
            icon: "dashboard",
            state: "empDashboard"
        },
        {
            title: "Employee Dashboard",
            icon: "dashboard",
            state: "skills"
        },
        {
            title: "Customer Dashboard",
            icon: "dashboard",
            state: "education"
        },
        {
            title: "Support Center",
            icon: "suitcase",
            state: "experience"
        },
        {
            title: "Supoort Wiki",
            icon: "anchor",
            state: "recent"
        },
        {
            title: "Settings",
            icon: "globe",
            state: "websites"
        },
       
        {
            title: "About Me",
            icon: "user-secret",
            state: "about"
        }
        
    ];

    //set the theme selected
    vm.setTheme = function (value) {
        $rootScope.theme = value;
    };


    //set the Layout in normal view
    vm.setLayout = function (value) {
        $rootScope.layout = value;
    };


    //controll sidebar open & close in mobile and normal view
    vm.sideBar = function (value) {
        if($(window).width()<=767){
        if ($("body").hasClass('sidebar-open'))
            $("body").removeClass('sidebar-open');
        else
            $("body").addClass('sidebar-open');
        }
        else {
            if(value==1){
            if ($("body").hasClass('sidebar-collapse'))
                $("body").removeClass('sidebar-collapse');
            else
                $("body").addClass('sidebar-collapse');
            }
        }
    };

    //navigate to search page
    vm.search = function () {
        $state.go('app.search');
    };

    console.log('getting in to the app controller');

}]);
