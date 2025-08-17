import { CircleArrowRight } from "lucide-react";
import { categoryState } from "../../../_store/category.state.js";
import { CompanyForm } from "./company.form.js";

export function Company() {
  return (
    <div className="divide-y divide-gray-100">
      <div className="space-y-6">
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-8 ">
              <h1 className="text-3xl font-bold text-gray-900 font-display">
                General Information
              </h1>

              <button
                className="btn btn-outline btn-success"
                onClick={() => (categoryState.tab = "questions")}
              >
                Skip to questions <CircleArrowRight />
              </button>
            </div>

            <CompanyForm />
          </div>
        </div>
      </div>
    </div>
  );
}
