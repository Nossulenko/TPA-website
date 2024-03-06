import {defineField, defineType} from 'sanity'
import {MdSettings as icon} from 'react-icons/md'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
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
      type: 'text',
    },
    {
      name: 'cards',
      title: 'Cards Content',
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
              name: 'cardHeading',
              title: 'Card Heading',
              type: 'string',
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
                      name: 'bulletHeading',
                      title: 'Bullet Heading',
                      type: 'string',
                    },
                    {
                      name: 'bulletDetail',
                      title: 'Bullet Detail',
                      type: 'text',
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
      media: 'cards[3].cardImage',
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
