export default {
    name: 'chapter',
    title: 'Chapter',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'video',
        title: 'Video',
        type: 'mux.video'
      },
      {
        name: 'orderIndex',
        title: 'Order Index',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      }
    ],
    orderings: [
      {
        title: 'Chapter Order',
        name: 'chapterOrder',
        by: [
          { field: 'orderIndex', direction: 'asc' }
        ]
      }
    ]
  }
  