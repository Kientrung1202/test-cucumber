Feature: Login Form

  Scenario Outline: Login with valid or invalid credentials
    Given I am on the login page
    When I enter "<username>" and "<password>"
    And I click the login button
    Then I should see "<message>"

    Examples:
      | username | password | message |
      | admin    | admin    | ok      |
      | user2    | pass2    | wrong   |
      | user2    | pass2    | ok      |

