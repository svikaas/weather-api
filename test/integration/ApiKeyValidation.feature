Feature: Test API 
	As an API admin, I would like to validate the api key
	So that I can identify client application

	Scenario: Get Lines with valid api key to get Mock Response
		Given I set X-Mockup-Flag header to true
		When I GET ?apikey=fDyp0U8d0ShzGYFF5GurF5nzxA37Rs6Z
		Then response code should be 200
		