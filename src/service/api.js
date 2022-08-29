import { apis } from "service";

const COMMON_URL = `https://`;

const API_URLS = {
  GET_BRANCHES: `${COMMON_URL}dhiwise-team.freshteam.com/api/branches`,
  GET_EMPLOYEECAPABILITYSELECT: `${COMMON_URL}rpspezcanqopwgztzymx.supabase.co/rest/v1/Employee_capability?select=*`,
  GET_EMPLOYEECAPABILITYIDEQ5: `${COMMON_URL}rpspezcanqopwgztzymx.supabase.co/rest/v1/Employee_capability?id=eq.5`,
  PATCH_EMPLOYEECAPABILITYIDEQ5: `${COMMON_URL}rpspezcanqopwgztzymx.supabase.co/rest/v1/Employee_capability?id=eq.5`,
  POST_EMPLOYEECAPABILITY: `${COMMON_URL}rpspezcanqopwgztzymx.supabase.co/rest/v1/Employee_capability`,
  GET_EMPLOYEES: `${COMMON_URL}dhiwise-team.freshteam.com/api/employees`,
};

export const getBranches = (payload) =>
  apis.get(API_URLS.GET_BRANCHES, {
    ...payload,
    headers: {
      accept: "application/json",
      Authorization: "Bearer VCcK26hV70FYHIsD2h2spA",
      ...payload?.headers,
    },
  });

export const getEmployeecapabilityselect = (payload) =>
  apis.get(API_URLS.GET_EMPLOYEECAPABILITYSELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc3BlemNhbnFvcHdnenR6eW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNDgwNTksImV4cCI6MTk3MjkyNDA1OX0.xcmHxepkSt8oG5-a3vr8R8vB4rVxxqL_yS8il1HwDEY",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc3BlemNhbnFvcHdnenR6eW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNDgwNTksImV4cCI6MTk3MjkyNDA1OX0.xcmHxepkSt8oG5-a3vr8R8vB4rVxxqL_yS8il1HwDEY",
      Range: "0-9",
      ...payload?.headers,
    },
  });

export const getEmployeecapabilityideq5 = (payload) =>
  apis.get(API_URLS.GET_EMPLOYEECAPABILITYIDEQ5, {
    ...payload,
    params: { id: "eq.5", ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc3BlemNhbnFvcHdnenR6eW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNDgwNTksImV4cCI6MTk3MjkyNDA1OX0.xcmHxepkSt8oG5-a3vr8R8vB4rVxxqL_yS8il1HwDEY",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc3BlemNhbnFvcHdnenR6eW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNDgwNTksImV4cCI6MTk3MjkyNDA1OX0.xcmHxepkSt8oG5-a3vr8R8vB4rVxxqL_yS8il1HwDEY",
      Range: "0-9",
      ...payload?.headers,
    },
  });

export const patchEmployeecapabilityideq5 = (payload) =>
  apis.patch(API_URLS.PATCH_EMPLOYEECAPABILITYIDEQ5, {
    ...payload,
    params: { id: "eq.5", ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc3BlemNhbnFvcHdnenR6eW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNDgwNTksImV4cCI6MTk3MjkyNDA1OX0.xcmHxepkSt8oG5-a3vr8R8vB4rVxxqL_yS8il1HwDEY",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc3BlemNhbnFvcHdnenR6eW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNDgwNTksImV4cCI6MTk3MjkyNDA1OX0.xcmHxepkSt8oG5-a3vr8R8vB4rVxxqL_yS8il1HwDEY",
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...payload?.headers,
    },
  });

export const postEmployeecapability = (payload) =>
  apis.post(API_URLS.POST_EMPLOYEECAPABILITY, {
    ...payload,
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc3BlemNhbnFvcHdnenR6eW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNDgwNTksImV4cCI6MTk3MjkyNDA1OX0.xcmHxepkSt8oG5-a3vr8R8vB4rVxxqL_yS8il1HwDEY",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc3BlemNhbnFvcHdnenR6eW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNDgwNTksImV4cCI6MTk3MjkyNDA1OX0.xcmHxepkSt8oG5-a3vr8R8vB4rVxxqL_yS8il1HwDEY",
      "Content-Type": "application/json",
      ...payload?.headers,
    },
  });

export const getEmployees = (payload) =>
  apis.get(API_URLS.GET_EMPLOYEES, {
    ...payload,
    headers: {
      accept: "application/json",
      Authorization: "Bearer VCcK26hV70FYHIsD2h2spA",
      ...payload?.headers,
    },
  });
