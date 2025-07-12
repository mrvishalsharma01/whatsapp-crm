const { getSheetData } = require("./googleSheet");

getSheetData().then((leads) => {
  console.log("✅ Leads from Sheet:");
  console.log(leads);
});
