export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'normalText',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'button',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
  ],
}
