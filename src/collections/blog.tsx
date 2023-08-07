import React from "react";
import { buildCollection, buildProperty } from "firecms";
import { localeCollection } from "./locales.tsx";

// Define the News type
type News = {
  coinDescription: string;
  coinHeading: string;
  coinImage: string;
  coinName: string;
  coinType: string;
  createdAt: Date;
  createdBy: string;
  marketsCard: boolean;
  topicTitle: string;
  category: string;
  totalDislikes: string[];
  totalLikes: string[];
};

export const NewsCollection = buildCollection<News>({
  name: "News",
  singularName: "News",
  path: "News",
  icon: "News",
  group: "News",
  permissions: ({ authController, user }) => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  subcollections: [localeCollection],
  properties: {
    coinHeading: {
      name: "Coin Heading",
      validation: { required: true },
      dataType: "string",
    },
    coinDescription: {
      name: "Coin Description",
      validation: { required: true },
      dataType: "string",
      columnWidth: 500,
    },
    category: {
      name: "Category",
      dataType: "string",
    },
    coinImage: buildProperty({
      name: "Coin Image",
      dataType: "string",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
      },
    }),
    coinType: {
      name: "Coin Type",
      dataType: "string",
    },
    createdAt: buildProperty({
      name: "Created on",
      dataType: "date",
      autoValue: "on_create",
    }),
    createdBy: {
      name: "Created By",
      dataType: "string",
    },
    marketsCard: {
      name: "Markets Card",
      dataType: "boolean",
    },
    coinName: {
      name: "Coin Name",
      dataType: "string",
    },
    topicTitle: {
      name: "Topic Title",
      dataType: "string",
    },
    totalLikes: {
      name: "Likes",
      dataType: "array",
      of: {
        dataType: "string",
      },
    },
    totalDislikes: {
      name: "Dislikes",
      dataType: "array",
      of: {
        dataType: "string",
      },
    },
  },
});
