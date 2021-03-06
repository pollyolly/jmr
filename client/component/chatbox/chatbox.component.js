(function(){
'use strict';
var module = angular.module('chatbox',[]);
module.component('chatBox',{
    templateUrl: 'client/component/chatbox/chatbox.template.html',
    controller: ['$scope','$http','chatboxSrv', function chatboxCtrl($scope, $http, chatboxSrv){
        var chatbox = this;
        $scope.show = false;
        chatbox.chatlist = function(){
            return chatboxSrv.chatMsg();
        }
		chatbox.chatPost = function(){
			var data = {
				'chat_user': chatbox.chat_user,
				'chat_message': chatbox.chat_message
			}
			console.log(data);
			chatboxSrv.chatPostsend(data);
			chatbox.emptychatPost();	
		}
		chatbox.emptychatPost = function(){
			chatbox.chat_message = '';
		}
    }],
    controllerAs: 'chat'
});
})();
