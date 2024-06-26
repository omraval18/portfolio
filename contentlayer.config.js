import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'; 
import rehypePrettyCode from 'rehype-pretty-code'; 
import rehypeSlug from 'rehype-slug'; 
import remarkGfm from 'remark-gfm'; 


/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
};

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `posts/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
        date: {
            type: "date",
            required: true,
        },
        published: {
            type: "boolean",
            default: true,
        },
        image: {
            type: "string",
            required: true,
        },
        github: {
            type: "string",
            required: false,
            
        },
        live: {
            type: "string",
            required: false,
        },
        authors: {
        
            type: "list",
            of: { type: "string" },
            required: true,
        },
    },
    computedFields,
}));

// export const Post = defineDocumentType(() => ({
//     name: "Post",
//     filePathPattern: `posts/**/*.mdx`,
//     contentType: "mdx",
//     fields: {
//         title: {
//             type: "string",
//             required: true,
//         },
//         description: {
//             type: "string",
//         },
//         date: {
//             type: "date",
//             required: false,
//         },
//     },
//     computedFields,
// }));


export default makeSource({
    contentDirPath: "src/content",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, {
            theme: "github-dark",        
            onVisitLine(node) {
                if (node.children.length === 0) {
                    node.children = [{type: "text", value: " "}];
                }
            },
            onVisitHighlightedLine(node) {
                node.properties.className.push("line--highlight");
            },
            onVisitHighlightedWord(node) {
                node.properties.className = ["word--highlight"];
            }
        }], [rehypeAutolinkHeadings, {
            properties: {    
                className: ["subheading-anchor"],
                ariaLabel: "Link to Action",
            },
        }]],       

    }
});
