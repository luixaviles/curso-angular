'use strict';

var Page = function() {
    this.list = element.all(by.repeater('user in $data'));
    this.tabs = element.all(by.repeater('tab in tabset.tabs'));
    this.editButton = element(by.css('[ng-click="vmAngular.edit(user)"]'));

    //Popup edit
    this.closePopup = element(by.css('[ng-click="vmAngularEdit.close()"]'));
    this.nameField = element(by.model('vmAngularEdit.selected.name'));
};

module.exports = new Page();

