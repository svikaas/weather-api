//
var URL = "http://api.usergrid.com/svikaas/testapp/restaurants";

var requestURI = context.getVariable('request.uri');

var restaurantName = requestURI.substring(requestURI.lastIndexOf('/') + 1);

var requestURL = URL.concat("?ql= select * where name contains '",restaurantName,"'");

context.setVariable("target.url",requestURL);