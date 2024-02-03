
import React from "react";
import { buildCollection, buildProperty } from  "firecms";
import { localeCollection } from "./locales.tsx";



type News = {
  coinDescription: string;
  coinHeading: string;
  coinImage: string;
  createdAt: Date;
  createdBy: string;
  marketsCard: boolean;
  assetName: string;
  topicTitle: string;
  category: string[];
  totalDislikes: string[];
  totalLikes: string[];
};

export const NewsCollection = buildCollection<News>({
  name: "News",
  singularName: "News",
  path: "News",
  icon: "News",
  group: "News",
  permissions: ({ user }: { user: any }) => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  subcollections: [localeCollection],
  properties: {
    coinHeading: {
      name: "Title",
      validation: { required: true },
      dataType: "string",
    },
    coinDescription: {
      name: "Summary",
      validation: { required: true },
      dataType: "string",
      columnWidth: 500,
    },
    coinImage: buildProperty({
      name: "Image",
      dataType: "string",
      
      validation: { required: true },

      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
      },
    }),
    category: buildProperty({
        name: 'Category',
        validation: { required: true },
        dataType: "array",
        of: {
            dataType: "string",
            values: [
                { label: "Crypto", values: ["Bitcoin", "Ethereum", "Analytics", "Exchange", "Markets", "Metaverse", "Blockchain", "GameFi", "Finance", "Others", "Mining", "Security"] },
                { label: "India", values: ["Banking", "Economy", "Environment", "Industry", "Infra", "IPO", "Markets", "Politics", "Science", "Sports", "Stats", "Wealth"] }
            ]
        },
        ui: {
            widget: "checkbox",
            showEnumIcon: true
        }
    })
    
    
,    
    
    
    
    
    
  
  
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
