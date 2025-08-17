"use client";

import { useFormContext } from "react-hook-form";

export type CompanyModelFormData = {
  ownFacilities: number;
  facilitiesPercent: number;
  externalSuppliers: number;
  externalSuppliersPercent: number;
  readyMadeProducts: number;
  readyMadeProductsPercent: number;
};

export function CompanyBusinessModelForm() {
  const { watch, register } = useFormContext();

  const ownFacilities = watch("ownFacilities");
  const externalSuppliers = watch("externalSuppliers");
  const readyMadeProducts = watch("readyMadeProducts");

  return (
    <div className="flex flex-col gap-4">
      <div className="card">
        <div className="card-body flex-row">
          <div className="flex flex-col gap-4 flex-1">
            <div className="border-b border-slate-300 pb-2">
              <h3 className="card-title">Business model</h3>
            </div>

            <div role="alert" className="alert alert-info alert-soft">
              <span>
                Select all that apply & add (%) for each field. Maximum 100%.
              </span>
            </div>

            <div className="flex flex-row gap-4 items-center justify-between">
              <fieldset className="fieldset">
                <label className="label">
                  <input
                    type="checkbox"
                    {...register("ownFacilities")}
                    className="checkbox checkbox-md"
                  />
                  <span className="text-sm text-black">
                    Company has their own factory / production (vertically
                    integrated)
                  </span>
                </label>
              </fieldset>

              <div className="flex gap-3 items-center">
                <input
                  type="number"
                  {...register("facilitiesPercent", {
                    required: ownFacilities ? "Percent required" : false,
                  })}
                  className="input input-md w-[60px]"
                  placeholder="0"
                  disabled={!ownFacilities}
                />
                <span className="text-sm text-black">% of the business</span>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center justify-between">
              <fieldset className="fieldset">
                <label className="label">
                  <input
                    type="checkbox"
                    {...register("externalSuppliers")}
                    className="checkbox checkbox-md"
                  />
                  <span className="text-sm text-black">
                    Company produces with external suppliers / manufacturers
                  </span>
                </label>
              </fieldset>

              <div className="flex gap-3 items-center">
                <input
                  type="number"
                  {...register("externalSuppliersPercent", {
                    required: externalSuppliers ? "Percent required" : false,
                  })}
                  className="input input-md w-[60px]"
                  placeholder="0"
                  disabled={!externalSuppliers}
                />
                <span className="text-sm text-black">% of the business</span>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center justify-between">
              <fieldset className="fieldset">
                <label className="label">
                  <input
                    type="checkbox"
                    {...register("readyMadeProducts")}
                    className="checkbox checkbox-md"
                  />
                  <span className="text-sm text-black">
                    Company commercializes ready-made-products (designed and
                    produced by third-parties)
                  </span>
                </label>
              </fieldset>

              <div className="flex gap-3 items-center">
                <input
                  type="number"
                  {...register("readyMadeProductsPercent", {
                    required: readyMadeProducts ? "Percent required" : false,
                  })}
                  className="input input-md w-[60px]"
                  placeholder="0"
                  disabled={!readyMadeProducts}
                />
                <span className="text-sm text-black">% of the business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
