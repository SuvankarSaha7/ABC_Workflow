import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const DivisionPage = () => {
  const { division } = useParams();
  const location = useLocation();
  const [data, setData] = useState(null);

  const queryParams = new URLSearchParams(location.search);

  const type = queryParams.get("type");
  const reportType = queryParams.get("reportType");
  const workflowType = queryParams.get("workflowType");

  useEffect(() => {
    fetch(
      `http://127.0.0.1:5000/get_Workflow?division=${division}&type=${type}&reportType=${reportType}&workflowType=${workflowType}`
    )
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
      })
      .catch((err) => console.error(err));
  }, [division, type, reportType, workflowType]);

  if (!data) return <p className="text-center mt-10">Loading...</p>;
  if (data.length === 0)
    return <p className="text-center mt-10">No workflow found.</p>;

  const workflow = data[0];

  // Create ordered flow steps
  const steps = [
    { label: "Initiator", value: workflow.initiator },
    { label: "Approver 1", value: workflow.approver1 },
    { label: "Approver 2", value: workflow.approver2 },
    { label: "Approver 3", value: workflow.approver3 },
    { label: "Approver 4", value: workflow.approver4 },
  ].filter((step) => step.value); // remove empty ones

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-purple-700">
            Workflow Approval Flow
          </h1>
          <p className="text-gray-500 mt-2">
            {workflow.division} | {workflow.type} | {workflow.reportType}
          </p>
        </div>

        {/* Horizontal Flow Chart */}
        <div className="flex items-center justify-start overflow-x-auto space-x-6 pb-4">

          {steps.map((step, index) => (
            <React.Fragment key={index}>

              {/* Step Box */}
              <div className="min-w-[220px] bg-white border border-purple-200 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition duration-300">
                <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                  {step.label}
                </h3>
                <p className="mt-3 text-gray-700 font-medium">
                  {step.value}
                </p>
              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="text-4xl text-purple-400 font-light">
                  →
                </div>
              )}

            </React.Fragment>
          ))}

        </div>
      </div>
    </div>
  );
};

export default DivisionPage;
