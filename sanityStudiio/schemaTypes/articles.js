import {defineField, defineType} from 'sanity'
import {MdAssignment as icon} from 'react-icons/md'

export default defineType({
  name: 'articles',
  title: 'Articles',
  type: 'document',
  icon,
  fields: [
    {
      name: 'heading',
      title: 'Article Heading',
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
      name: 'time',
      title: 'Time to Read (In Minutes)',
      type: 'number',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
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
      title: 'Paragraphs',
      type: 'array',
      of: [{type: 'text'}],
    },
    {
      name: 'articleImage',
      title: 'Article Image',
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
              type: 'text',
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
      name: 'nextArticleSlug',
      title: 'Next Article Slug',
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
