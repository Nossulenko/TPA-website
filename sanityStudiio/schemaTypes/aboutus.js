import {defineField, defineType} from 'sanity'
import {MdSettings as icon} from 'react-icons/md'

export default defineType({
  name: 'aboutus',
  title: 'About Us Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'heading',
      title: 'Services Heading',
      type: 'string',
    },
    {
      name: 'subHeading',
      title: 'Services Sub Heading',
      type: 'string',
    },
    {
      name: 'aboutImage',
      title: 'About Image',
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
      name: 'firstPart',
      title: 'First Part',
    //   type: 'array',
    //   of: [
        // {
          type: 'object',
          fields: [
            {
              name: 'partheading',
              title: 'Part Heading',
              type: 'string',
            },
            {
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'singleParagraph',
                      title: 'Single Paragraph',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'bulletPoints',
              title: 'Bullet Points',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'singleBullet',
                      title: 'Single Bullet',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        // },
    //   ],
    //   validation: (Rule) => Rule.required().min(2).max(2).error('You must input exactly 2 parts.'),
    },
    {
      name: 'secondPart',
      title: 'Second Part',
    //   type: 'array',
    //   of: [
        // {
          type: 'object',
          fields: [
            {
              name: 'partheading',
              title: 'Part Heading',
              type: 'string',
            },
            {
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'singleParagraph',
                      title: 'Single Paragraph',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'bulletPoints',
              title: 'Bullet Points',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'singleBullet',
                      title: 'Single Bullet',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        // },
    //   ],
    //   validation: (Rule) => Rule.required().min(2).max(2).error('You must input exactly 2 parts.'),
    },
    {
      name: 'cardData',
      title: 'Card Data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'cardheading',
              title: 'Card Heading',
              type: 'string',
            },
            {
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'singleParagraph',
                      title: 'Single Paragraph',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'cardImage',
              title: 'Card Image',
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
      name: 'creattedAt',
      title: 'Created At',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'aboutImage',
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
