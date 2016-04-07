'use strict';

(function($){

  $(function() {

    var datascource = {
      'id': '1',
      'name': 'Lao Lao',
      'title': 'general manager',
      'relationship': '001',
      'children': [
        { 'id': '2', 'name': 'Bo Miao', 'title': 'department manager', 'relationship': '110' },
        { 'id': '3', 'name': 'Su Miao', 'title': 'department manager', 'relationship': '111',
          'children': [
            { 'id': '4', 'name': 'Tie Hua', 'title': 'senior engineer', 'relationship': '110' },
            { 'id': '5', 'name': 'Hei Hei', 'title': 'senior engineer', 'relationship': '111',
              'children': [
                { 'id': '6', 'name': 'Pang Pang', 'title': 'engineer', 'relationship': '110' },
                { 'id': '7', 'name': 'Xiang Xiang', 'title': 'UE engineer', 'relationship': '110' }
              ]
            }
          ]
        },
        { 'id': '8', 'name': 'Yu Jie', 'title': 'department manager', 'relationship': '110' },
        { 'id': '9', 'name': 'Yu Li', 'title': 'department manager', 'relationship': '110' },
        { 'id': '10', 'name': 'Hong Miao', 'title': 'department manager', 'relationship': '110' },
        { 'id': '11', 'name': 'Yu Wei', 'title': 'department manager', 'relationship': '110' },
        { 'id': '12', 'name': 'Chun Miao', 'title': 'department manager', 'relationship': '110' },
        { 'id': '13', 'name': 'Yu Tie', 'title': 'department manager', 'relationship': '110' }
      ]
    };

    $('#chart-container').orgchart({
      'data' : datascource,
      'depth': 2,
      'nodeTitle': 'name',
      'nodeContent': 'title',
      'nodeID': 'id',
      'createNode': function($node, data) {
        var secondMenuIcon = $('<i>', {
          'class': 'fa fa-info-circle second-menu-icon',
          click: function() {
            $(this).siblings('.second-menu').toggle();
          }
        });
        var secondMenu = '<div class="second-menu"><img class="avatar" src="../img/avatar/' + data.id + '.jpg"></div>';
        $node.append(secondMenuIcon).append(secondMenu);
      }
    });

  });

})(jQuery);