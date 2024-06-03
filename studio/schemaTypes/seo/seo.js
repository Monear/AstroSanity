export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
  ],
}
