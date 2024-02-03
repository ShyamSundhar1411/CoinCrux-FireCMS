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
  //   category: buildProperty({
  //     name: 'Category',
  //     validation: { required: true },
  //     dataType: "array",
  //     of: {
  //         dataType: "string",
  //     },
  //     enumValues: [
  //         {
  //             label: "India",
  //             options: {
  //                 Banking: "Banking",
  //                 Economy: "Economy",
  //                 Environment: "Environment",
  //                 Industry: "Industry",
  //                 Infra: "Infra",
  //                 IPO: "IPO",
  //                 Markets: "Markets",
  //                 Politics: "Politics",
  //                 Science: "Science",
  //                 Sports: "Sports",
  //                 Stats: "Stats",
  //                 Wealth: "Wealth"
  //             }
  //         },
  //         {
  //             label: "Crypto",
  //             options: {
  //                 Bitcoin: "Bitcoin",
  //                 Ethereum: "Ethereum",
  //                 Analytics: "Analytics",
  //                 Exchange: "Exchange",
  //                 Markets: "Markets",
  //                 Metaverse: "Metaverse",
  //                 Blockchain: "Blockchain",
  //                 GameFi: "GameFi",
  //                 Finance: "Finance",
  //                 Others: "Others",
  //                 Mining: "Mining",
  //                 Security: "Security",
  //                 Economy: "Economy",
  //                 World: "World",
  //                 Legal: "Legal",
  //                 Altcoins: "Altcoins"
  //             }
  //         }
  //     ],
  //     ui: {
  //       widget: "enum",
  //       showLabel: true
  //   }
  // }),
  
  
  category: buildProperty({
    name:'Category',
    validation: { required: true },
    dataType: "string",
   
    enumValues:{
      Altcoins: "Altcoins",
      Analytics: "Analytics",
      Banking: "Banking",
      Bitcoin: "Bitcoin",
      Blockchain: "Blockchain",
      Economy: "Economy",
      Ethereum: "Ethereum",
      Exchange: "Exchange",
      Finance: "Finance",
      GameFi: "GameFi",
      India: "India",
      Markets: "Markets",
      Metaverse: "Metaverse",
      Mining: "Mining",
      Others: "Others",
      Regulations: "Regulations",
      Security: "Security",
      World: "World"
          }
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
      enumValues: {
        Samridhi: "Samridhi Jain",

        
    }
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
