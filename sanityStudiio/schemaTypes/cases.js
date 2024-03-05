import {defineField, defineType} from 'sanity'
import {MdSettings as icon} from 'react-icons/md'

export default defineType({
  name: 'cases',
  title: 'Cases',
  type: 'document',
  icon,
  fields: [
    {
      name: 'heading',
      title: 'Case Heading',
      type: 'string',
    },
    {
      name: 'featureImage',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    // {
    //   name: 'summary',
    //   title: 'Summary',
    //   type: 'string',
    // },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heading',
        maxLength: 96,
      },
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    },
    {
      name: 'paragraphs',
      title: 'Paragraph',
      type: 'text',
    },
    {
      name: 'caseImage',
      title: 'Case Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'mainCaseImage',
      title: 'Case Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'bullet',
      title: 'Bullet Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'string',
            },
            {
              name: 'bulletHeading',
              title: 'Bullet Heading',
              type: 'string',
            },
            {
              name: 'bulletDescription',
              title: 'Bullet Description',
              type: 'array',
              of: [{type: 'string'}],
            },
            {
              name: 'bulletImage',
              title: 'Bullet Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'nextCaseSlug',
      title: 'Next Case Slug',
      type: 'string',
    },
    {
      name: 'creattedAt',
      title: 'Created At',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'featureImage',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title,
        media,
      }
    },
  },
})
