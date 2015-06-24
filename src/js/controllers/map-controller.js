/**
 * Created by alvinWei on 15/5/13.
 */

app.controller('MapController', function ($scope) {
        var mapHeight=document.body.clientHeight-50;//minus header's height 50
        window.onresize=function(){
            mapHeight=document.body.clientHeight-50;
            $scope.mapHeight=mapHeight;
        }
        $scope.mapHeight=mapHeight;
        $scope.mapStyle={
            "height":mapHeight+"px"
        }
        $scope.map = {
            center: {
                lng: 131,
                lat: 31.523452
            },
            zoom: 5
        };
    });
