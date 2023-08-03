import csv from "csv-parser";
import fs from "fs";
import sqliteDB from "./sqliteDB.controller.js";

const showAllOrders = (req, res) => {
  sqliteDB.getAllOrders().then((rows) => res.json(rows));
};

const purchaseOrder = (req, res) => {
  const file = req.file;
  const results = [];
  const date = req.body.date;
  const vendorName = req.body.vendorName;

  fs.createReadStream(file.path)
    .pipe(csv())
    .on("data", (data) => {
      // Validate the CSV row data
      const modelNumber = data["Model Number"];
      const unitPrice = parseFloat(data["Unit Price"]);
      const quantity = parseInt(data["Quantity"]);

      if (modelNumber == "\n") {
        return;
      } else if (
        typeof modelNumber !== "string" ||
        modelNumber == "" ||
        isNaN(unitPrice) ||
        isNaN(quantity)
      ) {
        const errorMsg = `Validation error in order data: ${JSON.stringify(
          data
        )}`;
        // Handle validation errors
        console.error(errorMsg);
        res.status(404).json({ message: errorMsg });
        return;
      } else {
        // insert order data into sqlite DB
        sqliteDB
          .indertOrder({
            date,
            vendorName,
            modelNumber,
            unitPrice,
            quantity,
          })
          .then((lastId) => {
            // If validation passes, push the row data to the results array
            results.push({
              id: lastId,
              "Order Date": date,
              "Vendor Name": vendorName,
              "Model Number": modelNumber,
              "Unit Price": unitPrice,
              Quantity: quantity,
            });
            res.json({
              message: "Order purchased successfully!",
              data: results,
            });
            return;
          })
          .catch((err) => {
            res.status(404).json({ message: err.message });
          });
      }
    });
};

export default {
  purchaseOrder,
  showAllOrders,
};
