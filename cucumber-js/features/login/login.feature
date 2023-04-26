Feature: Login Form

  Scenario Outline: Login with valid or invalid credentials
    Given I am on the login page
    When I enter "<username>" and "<password>"
    And I click the login button
    Then I should see "<message>"

    Examples:
      | username    | password    | message             |
      | kientrung   | kientrung   | Successfully Login  |
      | haiphong    | haiphong    | Successfully Login  |
      | tienquang   | tienquang   | Successfully Login  |
      | tienquang   | tienquang1  | Unauthorized        |


