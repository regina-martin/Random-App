/**
 * Google Apps Script for Student Topic Wheel
 *
 * This script receives data from the web app and saves it to a Google Sheet.
 *
 * Instructions:
 * 1. Open Google Sheets and create a new spreadsheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this script
 * 4. Click "Deploy" > "New deployment"
 * 5. Choose type: "Web app"
 * 6. Set "Execute as": Me
 * 7. Set "Who has access": Anyone
 * 8. Click "Deploy"
 * 9. Copy the web app URL and paste it in script.js (GOOGLE_SCRIPT_URL)
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Check if header row exists, if not create it
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Student Name', 'Topic Assigned']);
      // Format header row
      var headerRange = sheet.getRange(1, 1, 1, 3);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4a5568');
      headerRange.setFontColor('#ffffff');
    }

    // Format timestamp
    var timestamp = new Date(data.timestamp);
    var formattedTimestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');

    // Append the new row
    sheet.appendRow([
      formattedTimestamp,
      data.name,
      data.topic
    ]);

    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 3);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function doGet(e) {
  return ContentService.createTextOutput('Student Topic Wheel - Google Apps Script is running!');
}
