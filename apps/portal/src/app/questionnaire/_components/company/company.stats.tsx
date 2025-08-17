import { employees } from "./data/employees.js";
import { productCategories } from "./data/product_categories.js";
import { revenues } from "./data/revenues.js";

export function CompanyStatsForm() {
  return (
    <div className="flex flex-col gap-4">
      <div className="card">
        <div className="card-body flex-row">
          <div className="flex flex-col gap-4 flex-1">
            <div className="border-b border-slate-300 pb-2">
              <h3 className="card-title">Company statistics</h3>
            </div>

            <div className="flex flex-row gap-4">
              <fieldset className="fieldset flex-1">
                <legend className="fieldset-legend uppercase">
                  Company's Annual Revenue in 2024
                </legend>
                <select
                  defaultValue="Select revenue"
                  className="select select-md"
                >
                  <option disabled={true}>Select revenue</option>
                  {revenues.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="fieldset flex-1">
                <legend className="fieldset-legend uppercase">
                  Number of employees
                </legend>
                <select
                  defaultValue="Select employees"
                  className="select select-md"
                >
                  <option disabled={true}>Select employees</option>
                  {employees.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="fieldset flex-1">
                <legend className="fieldset-legend uppercase">
                  Product Categories
                </legend>
                <select
                  defaultValue="Select categories"
                  className="select select-md"
                >
                  <option disabled={true}>Select categories</option>
                  {productCategories.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
