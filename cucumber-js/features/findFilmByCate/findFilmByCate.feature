Feature: Find Films By category

  Scenario Outline: Find Films
    Given I am on the find films page
    When I enter "<category>"
    And I click the find button
    Then I should see "<numberOfFilm>" films

    Examples:
      | category | numberOfFilm  |
      | anime    | 2             |
      | mv       | 1             |
