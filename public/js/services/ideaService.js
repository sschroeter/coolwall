angular.module('coolwall.ideas').service('IdeaService', function( $location, Ideas ) {

	

	this.getIdeas = function() {
		 return Ideas.query(function(ideas) {
            this.allideas = ideas;
        });
	}

    this.update = function(idea) {
         console.log("update idea");

         if (!idea.updated) {
             idea.updated = [];
         }
         idea.updated.push(new Date().getTime());

         idea.$update(function() {
             $location.path('ideas/' + idea._id);
         });
    };
	

    // $scope.global = Global;

    // $scope.create = function() {
    //     console.log("create idea");
    //     var idea = new Ideas({
    //         title: this.title,
    //         description: this.description
    //     });
    //     idea.$save(function(response) {
    //         $location.path("ideas/" + response._id);
    //     });

    //     this.title = "";
    //     this.description = "";
    // };

    // $scope.remove = function(idea) {
    //     idea.$remove();  

    //     for (var i in $scope.ideas) {
    //         if ($scope.ideas[i] == idea) {
    //             $scope.ideas.splice(i, 1);
    //         }
    //     }
    // };



    // $scope.find = function() {
    //     Ideas.query(function(ideas) {
    //         $scope.ideas = ideas;
    //     });
    // };

    // $scope.findOne = function() {
    //     Ideas.get({
    //         ideaId: $routeParams.ideaId
    //     }, function(idea) {
    //         $scope.idea = idea;
    //     });
    // };
});