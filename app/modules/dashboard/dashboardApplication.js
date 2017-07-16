var dashboard = angular.module('dashboard', ['ui.router', 'ngAnimate','ngMaterial']);


dashboard.config(["$stateProvider", function ($stateProvider) {

    // CRMDashbaord Design
    $stateProvider.state('app.empDashboard', {
        url: '/empDashboard',
        templateUrl: 'app/modules/dashboard/views/empDashboard.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'CRM Dashboard'
        }
    });


    //skills page state
    $stateProvider.state('app.skills', {
        url: '/skills',
        templateUrl: 'app/modules/dashboard/views/skills.html',
        controller: 'CustomerController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Employee DashBoard'
        }
    });

    //education page state
    $stateProvider.state('app.education', {
        url: '/education',
        templateUrl: 'app/modules/dashboard/views/education.html',
        controller: 'CusController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Dashboard Home'
        }
    });
    
    //Experience page state
    $stateProvider.state('app.experience', {
        url: '/experience',
        templateUrl: 'app/modules/dashboard/views/experience.html',
        controller: 'ExperienceController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Experience'
        }
    });

    //About Me page state
    $stateProvider.state('app.about', {
        url: '/about-me',
        templateUrl: 'app/modules/dashboard/views/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'About Me'
        }
    });

    //Search page state
    $stateProvider.state('app.search', {
        url: '/search',
        templateUrl: 'app/modules/dashboard/views/search.html',
        controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Search'
        }
    });

}]);

