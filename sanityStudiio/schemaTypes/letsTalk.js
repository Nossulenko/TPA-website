import {defineField, defineType} from 'sanity'
import {MdChat as icon} from 'react-icons/md'

export default defineType({
  name: 'letsTalk',
  title: 'Lets Talk',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'office1Name',
      title: 'Office 1 Name',
      type: 'string',
    }),
    defineField({
      name: 'office1Address',
      title: 'Office 1 Address',
      type: 'string',
    }),
    defineField({
      name: 'office1Image',
      title: 'Office 1 Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'office2Name',
      title: 'Office 2 Name',
      type: 'string',
    }),
    defineField({
      name: 'office2Address',
      title: 'Office 2 Address',
      type: 'string',
    }),
    defineField({
      name: 'office2Image',
      title: 'Office 2 Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'officeLocations[0].officeImage',
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
