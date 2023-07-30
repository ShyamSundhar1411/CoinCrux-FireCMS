import { buildCollection, buildProperty, EntityReference } from "firecms";
import { localeCollection } from "./locales.tsx";

type Blog = {
    name: string,
    header_image: string,
    // created_on: Date,
    status: string,
    content: string,
}
type BlogEntryImages = {
    type: "images";
    value: string[];
}

type BlogEntryText = {
    type: "text";
    value: string;
}

type News = {
    coinColor: number,
    coinDescription: string,
    coinHeading: string,
    coinImage: string,
    coinName: string,
    coinType: string,
    createdAt: Date,
    createdBy: string,
    marketsCard: string,
    topicTitle: string,
    totalDislikes: string[];
    totalLikes: string[];

}

export const blogCollection = buildCollection<Blog>({
    name: "Blogs",
    singularName: "Blog",
    path: "blog",
    icon: "Blog",
    group: "Blogs",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    subcollections: [
        localeCollection
    ],
    properties: {
        name: {
            name: "Name",
            validation: { required: true },
            dataType: "string"
        },
        status: {
            name: "Status",
            validation: { required: true },
            dataType: "string",
            description: "Should this product be visible in the website",
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            enumValues: {
                private: "Private",
                public: "Public"
            }
        },
        header_image: buildProperty({ // The `buildProperty` method is a utility function used for type checking
            name: "Image",
            dataType: "string",
            storage: {
                storagePath: "images",
                acceptedFiles: ["image/*"]
            }
        }),
        content: {
            name: "Description",
            description: "This is the description of the product",
            multiline: true,
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            dataType: "string",
            columnWidth: 300
        },
    }
});

export const NewsCollection = buildCollection<News>({
    name: "News",
    singularName: "News",
    path: "News",
    icon : "News",
    group: "News",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    subcollections: [
        localeCollection
    ],
    properties:{
        coinColor:{
            name: "Coin Color",
            validation: { required: true },
            dataType: "number"
        },
        coinDescription:{
            name: "Coin Description",
            validation: {required:true},
            dataType: "string",
            columnWidth:500,
        },
        coinHeading:{
            name: "Coin Heading",
            validation: {required:true},
            dataType: "string",
        },
        coinImage: buildProperty({ // The `buildProperty` method is a utility function used for type checking
            name: "Coin Image",
            dataType: "string",
            storage: {
                storagePath: "images",
                acceptedFiles: ["image/*"]
            }
        }),
        coinType:{
            name:"Coin Type",
            dataType: "string"
        },
        coinName:{
            name:"Coin Name",
            dataType:"string",
        },
        createdAt:buildProperty( {
            name: "Created on",
            dataType: "date",
            autoValue: "on_create"
        }),
        createdBy:{
            name: "Created By",
            dataType: "string",
        },
        marketsCard:buildProperty({
            name: "Markets Card",
            dataType:"string",
        }),
        topicTitle:{
            name:"Topic Title",
            dataType:"string",
        },
        totalLikes:buildProperty({
            name: "Likes",
            dataType:"array",
            of:{
                dataType:"string"
            }
        }),
        totalDislikes:buildProperty({
            name: "Dislikes",
            dataType:"array",
            of:{
                dataType:"string"
            }
        }),
    }
});