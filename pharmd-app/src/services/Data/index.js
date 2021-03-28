// Learn more here: https://marmelab.com/react-admin/DataProviders.html

import { BACKEND_URL } from "../../config/backendRoutes";
import DeleteHooks from "./DeleteHooks";
import GetHooks from "./GetHooks";
import httpClient from "./httpClient";
import EditHooks from "./EditHooks";
import UpdateHooks from "./UpdateHooks";
import CreateHooks from "./CreateHooks";

// import real BACKEND_URL to use pharmD backend data
// const BACKEND_URL = FAKE_API;

export default {
  ...GetHooks(httpClient, BACKEND_URL),
  ...CreateHooks(httpClient, BACKEND_URL),
  ...EditHooks(httpClient, BACKEND_URL),
  ...UpdateHooks(httpClient, BACKEND_URL),
  ...DeleteHooks(httpClient, BACKEND_URL)
};
