import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { MemoryRouter } from "react-router";
import RouterBreadcrumb from "../components/Basic/Breadcrumb";

export default {
  title: "Breadcrumb",
  component: RouterBreadcrumb,
  decorators: [withKnobs]
};

export const Default = () => (
  <MemoryRouter initialEntries={["/posts/3"]} initialIndex={0}>
    <RouterBreadcrumb />
  </MemoryRouter>
);
