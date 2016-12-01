'use strict';

var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

var config = browser.params;

describe('Angular List View', function() {
  var page;

  beforeEach(function() {
    browser.get(config.baseUrl + '/list/angular');
    page = require('./angular-list.po');
  });

  it('should load list of students', function() {
      expect(page.list.count()).toBeGreaterThan(0);
    //   expect(page.list.count()).toBe(2);
  });

  it('should display tabs', function() {
      expect(page.tabs.count()).toBeGreaterThan(0);
  });

  it('should open Edit popup', function() {
      page.editButton.click();
      expect(page.closePopup.isDisplayed()).toBe(true);
      page.closePopup.click();
  });

  it('should change name', function() {
      page.editButton.click();
      page.nameField.clear();
      page.nameField.sendKeys('Juan Perez');
      expect(page.nameField.getAttribute('value')).toBe('Juan Perez');
  });
  
});
