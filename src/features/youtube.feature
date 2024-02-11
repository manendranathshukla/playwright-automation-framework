Feature: YouTube Search and Video Playback

  Scenario: User searches for a video and plays it
    Given the user is on the YouTube homepage
    When the user searches for "Playwright automation"
    And the user clicks on the first video
    Then the video title should contain "Playwright"
