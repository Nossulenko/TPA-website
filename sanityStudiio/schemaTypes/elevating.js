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
      title: 'Link',
      type: 'url',
      // Add Sample value
      initialValue: 'https://www.example.com',
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
