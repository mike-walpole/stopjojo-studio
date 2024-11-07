export default {
    name: 'course',
    title: 'Course',
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
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'whatToExpect',
        title: 'What to Expect',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'Describe what students will learn and achieve in this course'
      },
      {
        name: 'whatIsIt',
        title: 'What is it?',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'Explain the course concept and main objectives'
      },
      {
        name: 'isItForMe',
        title: 'Is it for me?',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'Describe the target audience and prerequisites'
      },
      {
        name: 'importantInfo',
        title: 'Important Information',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'Key information students should know before enrolling'
      },
      {
        name: 'numberOfLessons',
        title: 'Number of Lessons',
        type: 'number',
        validation: Rule => Rule.required().positive().integer(),
        description: 'Total number of lessons in the course'
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'chapters',
        title: 'Chapters',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'chapter' }] }]
      },
      {
        name: 'availabilityType',
        title: 'Availability Type',
        type: 'string',
        options: {
          list: [
            { title: 'Limited', value: 'limited' },
            { title: 'Unlimited', value: 'unlimited' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'availabilityDuration',
        title: 'Availability Duration (in days)',
        type: 'number',
        hidden: ({ document }) => document?.availabilityType !== 'limited'
      }
    ]
  }
