"use client";
import React from "react";
import { useEffect, useState } from "react";

const KeyValueTemplate = () => {
  return (
    <div className="input-group my-2" data-key-value-pair>
      <input type="text" data-key className="form-control" placeholder="Key" />
      <input
        type="text"
        data-value
        className="form-control"
        placeholder="Value"
      />
      <button type="button" data-remove-btn className="btn btn-outline-danger">
        Remove
      </button>
    </div>
  );
};

const MyComponent = () => {
  const [activeTab, setActiveTab] = useState("tabs-home");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="p-6">
      <form data-form>
        <div className="mb-4 flex items-center h-10">
          <select className="py-2 px-3 border border-gray-300 rounded-l-md h-full">
            <option value="GET" selected>
              GET
            </option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>
          <input
            className="block w-full py-2 px-3 border border-gray-300 h-full"
            type="url"
            placeholder="https://example.com"
          />

          <button className="px-4 py-2 h-full border border-gray-500 rounded-r-md bg-blue-500 hover:bg-blue-700 text-white">
            Send
          </button>
        </div>

        <div className="mb-6">
          <ul className="flex mb-5 list-none border-b-2 pl-0">
            <li
              className={`mr-4 ${
                activeTab === "tabs-home" ? "border-b-2 border-blue-500" : ""
              }`}
            >
              <button
                className="px-4 py-2 font-medium text-sm uppercase text-neutral-500 hover:text-blue-500"
                onClick={() => handleTabClick("tabs-home")}
              >
                Home
              </button>
            </li>
            <li
              className={`mr-4 ${
                activeTab === "tabs-profile" ? "border-b-2 border-blue-500" : ""
              }`}
            >
              <button
                className="px-4 py-2 font-medium text-sm uppercase text-neutral-500 hover:text-blue-500"
                onClick={() => handleTabClick("tabs-profile")}
              >
                Profile
              </button>
            </li>
            <li
              className={`mr-4 ${
                activeTab === "tabs-messages"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
            >
              <button
                className="px-4 py-2 font-medium text-sm uppercase text-neutral-500 hover:text-blue-500"
                onClick={() => handleTabClick("tabs-messages")}
              >
                Messages
              </button>
            </li>
            <li
              className={`mr-4 ${
                activeTab === "tabs-contact" ? "border-b-2 border-blue-500" : ""
              }`}
            >
              <button
                className="px-4 py-2 font-medium text-sm uppercase text-neutral-500 hover:text-blue-500"
                onClick={() => handleTabClick("tabs-contact")}
              >
                Contact
              </button>
            </li>
          </ul>

          <div
            id="tabs-home"
            className={`hidden ${
              activeTab === "tabs-home" ? "block" : "hidden"
            }`}
          >
            Tab 1 content
          </div>
          <div
            id="tabs-profile"
            className={`hidden ${
              activeTab === "tabs-profile" ? "block" : "hidden"
            }`}
          >
            Tab 2 content
          </div>
          <div
            id="tabs-messages"
            className={`hidden ${
              activeTab === "tabs-messages" ? "block" : "hidden"
            }`}
          >
            Tab 3 content
          </div>
          <div
            id="tabs-contact"
            className={`hidden ${
              activeTab === "tabs-contact" ? "block" : "hidden"
            }`}
          >
            Tab 4 content
          </div>
        </div>

        <div className="tab-content p-3 border-t-0 border">
          <div
            className="tab-pane fade show active"
            id="query-params"
            role="tabpanel"
            aria-labelledby="query-params-tab"
          >
            <div data-query-params></div>
            <button
              data-add-query-param-btn
              className="mt-2 btn btn-outline-success"
              type="button"
            >
              Add
            </button>
          </div>
          <div
            className="tab-pane fade"
            id="request-headers"
            role="tabpanel"
            aria-labelledby="request-headers-tab"
          >
            <div data-request-headers></div>
            <button
              data-add-request-header-btn
              className="mt-2 btn btn-outline-success"
              type="button"
            >
              Add
            </button>
          </div>
          <div
            className="tab-pane fade"
            id="json"
            role="tabpanel"
            aria-labelledby="json-tab"
          >
            <div
              data-json-request-body
              className="overflow-auto"
              style={{ maxHeight: "200px" }}
            ></div>
          </div>
        </div>
      </form>

      <div className="mt-5 hidden" data-response-section>
        <h3>Response</h3>
        <div className="flex my-2">
          <div className="me-3">
            Status: <span data-status></span>
          </div>
          <div className="me-3">
            Time: <span data-time></span>ms
          </div>
          <div className="me-3">
            Size: <span data-size></span>
          </div>
        </div>

        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="body-tab"
              data-bs-toggle="tab"
              data-bs-target="#body"
              type="button"
              role="tab"
              aria-controls="body"
              aria-selected="true"
            >
              Body
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="response-headers-tab"
              data-bs-toggle="tab"
              data-bs-target="#response-headers"
              type="button"
              role="tab"
              aria-controls="response-headers"
              aria-selected="false"
            >
              Headers
            </button>
          </li>
        </ul>

        <div className="tab-content p-3 border-t-0 border">
          <div
            className="tab-pane fade show active"
            id="body"
            role="tabpanel"
            aria-labelledby="body-tab"
          >
            <div
              data-json-response-body
              className="overflow-auto"
              style={{ maxHeight: "200px" }}
            ></div>
          </div>
          <div
            className="tab-pane fade"
            id="response-headers"
            role="tabpanel"
            aria-labelledby="response-headers-tab"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: ".5rem 2rem",
              }}
              data-response-headers
            ></div>
          </div>
        </div>
      </div>

      <div>
        <KeyValueTemplate />
      </div>
    </div>
  );
};

export default MyComponent;
