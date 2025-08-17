export function CompanyConsentForm() {
  return (
    <div className="flex flex-col gap-4">
      <div className="card">
        <div className="card-body flex-row">
          <div className="flex flex-col gap-4 flex-1">
            <div className="border-b border-slate-300 pb-2">
              <h3 className="card-title">Data collection consent</h3>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <fieldset className="fieldset">
                <label className="label">
                  <input type="checkbox" className="checkbox checkbox-md" />
                  <span className="text-sm text-black ml-2 whitespace-normal">
                    I understand and agree to the use of our sustainability
                    data. We also acknowledge that all information provided in
                    this questionnaire is given to the best of our factual
                    knowledge and truth. Additionally, we hereby grant
                    permission for IVALO.COM to digitally store and view the
                    provided information.
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
