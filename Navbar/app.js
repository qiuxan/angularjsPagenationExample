angular.module('paginationApp', [])
  .controller('PaginationController', ['$scope', function($scope) {
    $scope.items = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
      'Item 8',
      'Item 9',
      'Item 10',
      'Item 11',
      'Item 12',
      'Item 13',
      'Item 14',
      'Item 15',
      'Item 16',
      'Item 17',
      'Item 18',
      'Item 19',
      'Item 20',
      'Item 01',
      'Item 02',
      'Item 03',
      'Item 04',
      'Item 05',
      'Item 06',
      'Item 07',
      'Item 08',
      'Item 09',
      'Item 010',
      'Item 011',
      'Item 012',
      'Item 013',
      'Item 014',
      'Item 015',
      'Item 016',
      'Item 017',
      'Item 018',
      'Item 019',
      'Item 020',
      'Item 11',
      'Item 12',
      'Item 13',
      'Item 14',
      'Item 15',
      'Item 16',
      'Item 17',
      'Item 18',
      'Item 19',
      'Item 110',
      'Item 111',
      'Item 112',
      'Item 113',
      'Item 114',
      'Item 115',
      'Item 116',
      'Item 117',
      'Item 118',
      'Item 119',
      'Item 120',
    ];

    $scope.itemsPerPageOptions = [5, 10, 15];
    $scope.itemsPerPage = 5;
    $scope.currentPage = 1;
    $scope.maxVisiblePages = 3;

    $scope.setCurrentPage = function(page) {
      $scope.currentPage = page;
    };

    $scope.navigateToPreviousPages = function() {
      if ($scope.currentPage > $scope.maxVisiblePages) {
        $scope.currentPage -= $scope.maxVisiblePages;
      } else {
        $scope.currentPage = 1;
      }
    };

    $scope.navigateToNextPages = function() {
      var totalPages = Math.ceil($scope.items.length / $scope.itemsPerPage);
      var maxPage = Math.ceil($scope.currentPage / $scope.maxVisiblePages) * $scope.maxVisiblePages + 1;
      if (maxPage <= totalPages) {
        $scope.currentPage = maxPage;
      } else {
        $scope.currentPage = totalPages;
      }
    };

    $scope.$watchGroup(['itemsPerPage', 'currentPage'], function() {
      var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
      var endIndex = startIndex + parseInt($scope.itemsPerPage, 10);
      $scope.displayedItems = $scope.items.slice(startIndex, endIndex);

      var totalPages = Math.ceil($scope.items.length / $scope.itemsPerPage);
      var currentPageGroup = Math.ceil($scope.currentPage / $scope.maxVisiblePages);

      var startPage = (currentPageGroup - 1) * $scope.maxVisiblePages + 1;
      var endPage = startPage + $scope.maxVisiblePages - 1;
      endPage = Math.min(endPage, totalPages);

      $scope.visiblePages = [];
      for (var i = startPage; i <= endPage; i++) {
        $scope.visiblePages.push(i);
      }
    });
  }]);
