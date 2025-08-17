"use client";

import { useFormContext } from "react-hook-form";
import { CompanyFormData } from "./company.form.jsx";
import { countries } from "./data/countries.js";

export function CompanyDetailsForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompanyFormData>();

  return (
    <div className="flex flex-col gap-4">
      <div className="card">
        <div className="card-body flex-row">
          <div className="flex flex-col gap-4 flex-1">
            <div className="border-b border-slate-300 pb-2">
              <h3 className="card-title">Company details</h3>
            </div>

            <div className="flex flex-row gap-4">
              <fieldset className="fieldset flex-1">
                <legend className="fieldset-legend uppercase">
                  Brand name
                </legend>
                <input
                  type="text"
                  {...register("brandName", {
                    required: "Brand name is required",
                  })}
                  className="input input-md"
                  placeholder="Enter Company Brand Name"
                />
                {errors.brandName && (
                  <p className="text-sm text-red-600">
                    {errors.brandName.message}
                  </p>
                )}

                <legend className="fieldset-legend uppercase">
                  Offical name
                </legend>
                <input
                  type="text"
                  {...register("officialName", {
                    required: "Official name is required",
                  })}
                  className="input input-md"
                  placeholder=""
                />
                {errors.officialName && (
                  <p className="text-sm text-red-600">
                    {errors.officialName.message}
                  </p>
                )}

                <legend className="fieldset-legend uppercase">
                  First name + Last name
                </legend>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="input input-md"
                  placeholder=""
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}

                <legend className="fieldset-legend uppercase">
                  Your job title
                </legend>
                <input
                  type="text"
                  {...register("jobTitle", {
                    required: "Job title is required",
                  })}
                  className="input input-md"
                  placeholder=""
                />
                {errors.jobTitle && (
                  <p className="text-sm text-red-600">
                    {errors.jobTitle.message}
                  </p>
                )}
              </fieldset>

              <fieldset className="fieldset flex-1">
                <legend className="fieldset-legend uppercase">
                  Corporate group
                </legend>
                <input
                  type="text"
                  {...register("corporateGroup", {
                    required: "Corporate group is required",
                  })}
                  className="input input-md"
                  placeholder="Are you part of a larger group?"
                />
                {errors.corporateGroup && (
                  <p className="text-sm text-red-600">
                    {errors.corporateGroup.message}
                  </p>
                )}

                <legend className="fieldset-legend uppercase">
                  Contact email
                </legend>
                <input
                  type="email"
                  {...register("contactEmail", {
                    required: "Contact email is required",
                  })}
                  className="input input-md"
                  placeholder=""
                />
                {errors.contactEmail && (
                  <p className="text-sm text-red-600">
                    {errors.contactEmail.message}
                  </p>
                )}

                <legend className="fieldset-legend uppercase">
                  Origin country
                </legend>
                <select
                  defaultValue="Pick a country"
                  className="select select-md"
                >
                  <option disabled={true}>Pick a country</option>
                  {countries.map(({ code, name }) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>

                <legend className="fieldset-legend uppercase">
                  Instagram @
                </legend>
                <input
                  type="text"
                  {...register("instagram", {
                    required: false,
                  })}
                  className="input input-md"
                  placeholder=""
                />
              </fieldset>

              <fieldset className="fieldset flex-1"></fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
