var SCRIPT_NAME = "CCTDashboar"
var SCRIPT_VERSION = "v0.5"

function onOpen() {
  SpreadsheetApp
    .getUi()
    .createMenu('CCTReports')
    .addItem('Get InTrac data', 'getData')
    .addToUi()
}

function getData() {CCTReports.onGetUsage()}

function test_hideAllSheets() {
  SpreadsheetApp.getActive().getSheets().forEach(function(sheet){
    sheet.hideSheet()
  })
}

function test_deleteRosebery() {
  var ss = SpreadsheetApp.getActive()
  var ui = SpreadsheetApp.getUi()
  ss.getSheets().forEach(function(sheet){
    var name = sheet.getName()
    if (name.indexOf('Rosebery') !== -1) {
      var response = ui.alert('Delete "' + name + '"', ui.ButtonSet.YES_NO) 
      if (response === ui.Button.YES) {
        ss.deleteSheet(sheet)
      }
    }
  })
}