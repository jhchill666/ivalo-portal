"use client";

import { FormProvider, useForm } from "react-hook-form";
import { CompanyConsentForm } from "./company.consent.js";
import { CompanyDetailsForm } from "./company.details.js";
import { CompanyDocumentsForm } from "./company.documents.js";
import {
  CompanyBusinessModelForm,
  CompanyModelFormData,
} from "./company.model.js";
import { CompanyStatsForm } from "./company.stats.js";

export type CompanyFormData = {
  brandName: string;
  officialName: string;
  name: string;
  jobTitle: string;
  corporateGroup: string;
  contactEmail: string;
  instagram: string;
} & CompanyModelFormData;

export function CompanyForm() {
  const methods = useForm<CompanyFormData>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex-col">
        <div className="flex flex-col gap-4">
          <div role="alert" className="alert alert-info alert-soft !bg-sky-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                color="white"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="font-semibold text-white">
              Please fill the questionnaire here. Do not download or save it
              anywhere else as the field links will be broken.
            </span>
          </div>
          <div className="card bg-white/80 w-full shadow-sm">
            <div className="card-body flex flex-col !p-3">
              <CompanyDetailsForm />
              <CompanyStatsForm />
              <CompanyBusinessModelForm />
              <CompanyDocumentsForm />
              <CompanyConsentForm />

              <div className="rounded-lg bg-slate-400/[0.10] p-7 flex items-start gap-2">
                <p className="!text-sm">
                  For any questions, please add a comment to the file, or email
                  them to sustainability@ivalo.com. Our CSO will see the
                  comments made in this file. You can also book a 1-2-1 meeting
                  with Outi Pyy, our Head of Sustainability, if you need further
                  assistance. More indormation at the bottom of the page
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <button className="btn btn-success btn-xl flex-1 font-display bg-green-300">
              Submit
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
