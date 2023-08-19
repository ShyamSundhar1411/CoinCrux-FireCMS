import React from "react";
import { buildCollection, buildProperty } from "firecms";
import { localeCollection } from "./locales.tsx";

// Define the News type
type News = {
  coinDescription: string;
  coinHeading: string;
  coinImage: string;
  createdAt: Date;
  createdBy: string;
  marketsCard: boolean;
  assetName: string;
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
    coinImage: buildProperty({
      name: "Coin Image",
      dataType: "string",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
      },
    }),
    category: buildProperty({
      name:'Category',
      validation: { required: true },
      dataType: "string",
    }),
    assetName: buildProperty({
      name:'Asset Name',
      validation: { required: true },
      dataType: "string",
    }),
    marketsCard: {
      name: "Markets Card",
      dataType: "boolean",
    },
    createdAt: buildProperty({
      name: "Created on",
      dataType: "date",
      autoValue: "on_create",
    }),
    createdBy: {
      name: "Created By",
      validation: { required: true },
      dataType: "string",
    },
    topicTitle: {
      name: "Topic Title",
      validation: { required: true },
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
