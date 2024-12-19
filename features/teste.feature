Feature: Post

  Scenario: SignIn
    Given I am on conduit app's Sign In page
    When I enter email and password
    And I click on Sign In button
    Then The page should display "Your Feed"