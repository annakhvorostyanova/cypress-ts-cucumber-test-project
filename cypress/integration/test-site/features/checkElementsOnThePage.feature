Feature: Check all elements in the Page
  Scenario: I check all the elements on the main page
    When I open the main page
    Then I see all the elements on the main page
  Scenario: I check all the elements on the first semester page
    When I open the first semester page
    Then I see all the elements on the first semester page
  Scenario: I check all the elements on the second semester page
    When I open the second semester page
    Then I see all the elements on the second semester page
    Then I see all the titles on the second semester page
    Then I see all the titles on the second semester page are correct
    Then I open histology exam page
    Then I check correct answer is green and tick symbol is below
    Then I check incorrect answer is red and cross symbol is below
  Scenario: I check all the elements on the third semester page
    When I open the third semester page
    Then I see all the elements on the third semester page
    Then I see all the titles on the third semester page
    Then I see all the titles on the third semester page are correct
  Scenario: I check all the elements on the fourth semester page
    When I open the fourth semester page
    Then I see all the elements on the fourth semester page
    Then I see all the titles on the fourth semester page
    Then I see all the titles on the fourth semester page are correct
  Scenario: I check all the elements on the fifth semester page
    When I open the fifth semester page
    Then I see all the elements on the fifth semester page
    Then I see all the titles on the fifth semester page
    Then I see all the titles on the fifth semester page are correct
  Scenario: I check all the elements on the sixth semester page
    When I open the sixth semester page
    Then I see all the elements on the sixth semester page
  Scenario: I check all the elements on the fourth year page
    When I open the fourth year page
    Then I see all the elements on the fourth year page
  Scenario: I check all the elements on fifth year page
    When I open the fifth year page
    Then I see all the elements on the fifth year page
  Scenario: I check all the elements on sixth year page
    When I open the sixth year page
    Then I see all the elements on the sixth year page
