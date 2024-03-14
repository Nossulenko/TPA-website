import {defineField, defineType} from 'sanity'
import {MdTerrain as icon} from 'react-icons/md' //changed to similar icon

export default defineType({
  name: 'elevating',
  title: 'Elevating',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      // Add Sample value
      initialValue: 'ELEVATING IDEAS,ENRICHING LIVES',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      // Add Sample value
      initialValue: 'Strategic Design Meets Bespoke Innovation',
    }),
    defineField({
      name: 'link',
      title: 'Navigate to: ',
      type: 'slug',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      // Add Sample value
      initialValue: 'Discover Our Projects',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'A short description of the image for accessibility',
        },
        {
          name: 'width',
          title: 'Width',
          type: 'number',
          description: 'Width of the image in pixels',
        },
        {
          name: 'height',
          title: 'Height',
          type: 'number',
          description: 'Height of the image in pixels',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      }
    },
  },
})
