"use client";

export type CompanyDocumentsFormData = {
  ownFacilities: number;
  facilitiesPercent: number;
  externalSuppliers: number;
  externalSuppliersPercent: number;
  readyMadeProducts: number;
  readyMadeProductsPercent: number;
};

export function CompanyDocumentsForm() {
  return (
    <div className="flex flex-col gap-4">
      <div className="card">
        <div className="card-body flex-row">
          <div className="flex flex-col gap-4 flex-1">
            <div className="border-b border-slate-300 pb-2">
              <h3 className="card-title">Complementary documents</h3>
            </div>

            <div role="alert" className="alert alert-info alert-soft">
              <span>
                Select all that apply. Please email us the following documents
                to <a>sustainability@ivalo.com</a>
              </span>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <fieldset className="fieldset">
                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2">
                    Code of conduct
                  </span>
                </label>

                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2">
                    Our brand <b>does not have</b> a Code of Conduct
                  </span>
                </label>

                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2">
                    Our brand does not have any certificates
                  </span>
                </label>

                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2">
                    OEKO-TEX® standard certificate
                  </span>
                </label>

                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2">
                    Our products <b>do not</b> have OEKO-TEX® standard
                  </span>
                </label>
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2">
                    Factory lists (info can also be added on tab Q5)
                  </span>
                </label>

                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2">
                    Factory audit reports
                  </span>
                </label>

                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2">
                    Factory certificates & other social and environmental labels
                  </span>
                </label>
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2">
                    Customer measurements sizing table for your brand (pdf or
                    excel)
                  </span>
                </label>

                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2">
                    Full product list with origin and fiber data, from current
                    and upcoming collection
                  </span>
                </label>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
