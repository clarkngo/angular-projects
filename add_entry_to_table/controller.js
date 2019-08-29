function SampleCtrl($scope) {

  $scope.people = [
    {id:1, last: "Ngo", first: "Clark"},
    {id:2, last: "James", first: "LeBron"},
    {id:3, last: "Davis", first: "Anthony"}
  ];

  $scope.addPerson = function() {
    var newId = $scope.people.length;
    newId++;

    $scope.people.push(
      {id: newId, last: $scope.addLast, first: $scope.addFirst}
    );
  };
};
