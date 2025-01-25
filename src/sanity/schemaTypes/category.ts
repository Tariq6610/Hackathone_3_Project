export default {
    name: 'category', // Unique name for the schema
    title: 'Category', // Display name in Sanity Studio
    type: 'document', // Specifies this is a document schema
    fields: [
      {
        name: 'name', // Field name for internal use
        title: 'Name', // Display name in Studio
        type: 'string', // The type of data stored (text in this case)
        description: 'Name of the category (e.g., New Products, Top Products)', // Tooltip in Studio
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug', // Sanity's built-in slug type
        options: {
          source: 'name', // Auto-generate the slug based on the name field
          maxLength: 96, // Limits the length of the slug
        },
        description: 'Unique identifier for the category', // Tooltip in Studio
      },
    ],
  };
  