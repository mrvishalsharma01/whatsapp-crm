const { google } = require("googleapis");
const credentials = require("./credentials.json");

async function getSheetData() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1T6EPGOj9M0hhPgqu3mgflXPVgw4xjbT3W5Tq13E6E5o";
  const range = "Sheet1!A2:G"; // assuming 7 columns

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = res.data.values;
  if (!rows.length) {
    console.log("No data found.");
    return [];
  }

  const leads = rows.map((row) => ({
    name: row[0],
    phone: row[1],
    status: row[2],
    createdAt: row[3],
    propertyAddress: row[4] || '',
    agentName: row[5] || '',
    appointmentTime: row[6] || '',
  }));

  return leads;
}

module.exports = { getSheetData };
