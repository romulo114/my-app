import React, { useState } from 'react';
import { OrderAPIs } from '../service/api-service';
import { showToast } from '../service/utils';
import { EToastType } from '../service/types';

interface FormErrors {
  date?: string;
  vendorName?: string;
  file?: string;
}
const PurchaseOrderForm = () => {
  const [date, setDate] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors: FormErrors = {};

    if (!date) {
      errors.date = "Date is required";
    }

    if (!vendorName) {
      errors.vendorName = "Vendor name is required";
    }

    if (!file) {
      errors.file = "File is required";
    }

    if (Object.keys(errors).length === 0) {
      // Submit form data
      console.log("Form data:", { date, vendorName, file });
      const formData = new FormData();

      formData.append("date", date);
      formData.append("vendorName", vendorName);
      formData.append("file", file as File);

      OrderAPIs.purchaseOrder(formData).then( result => {
        showToast(result?.message ?? 'Success!')
      }).catch(err => {
        showToast(err.response.data.message ?? err.message, EToastType.ERROR)
      })
    } else {
      setErrors(errors);
    }
  }

  function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border p-5">
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="date">
            Date:
          </label>
          <input
            className={`w-full p-2 border rounded-md ${
              errors.date ? "border-red-500" : ""
            }`}
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="vendorName"
          >
            Vendor Name:
          </label>
          <input
            className={`w-full p-2 border rounded-md ${
              errors.vendorName ? "border-red-500" : ""
            }`}
            type="text"
            id="vendorName"
            name="vendorName"
            value={vendorName}
            onChange={(event) => setVendorName(event.target.value)}
          />
          {errors.vendorName && (
            <p className="text-red-500 text-sm mt-1">{errors.vendorName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="file">
            File (CSV format):
          </label>
          <input
            className={`w-full p-2 border rounded-md ${
              errors.file ? "border-red-500" : ""
            }`}
            type="file"
            id="file"
            name="file"
            accept=".csv"
            onChange={handleFileInputChange}
          />
          {errors.file && (
            <p className="text-red-500 text-sm mt-1">{errors.file}</p>
          )}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
  );
};

export default PurchaseOrderForm;