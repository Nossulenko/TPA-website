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
      initialValue: 'Inspired to build your sustainable future',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      initialValue: 'Lets Innovate Together',
    }),
    defineField({
      name: 'officeLocations',
      title: 'Office Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'officeName',
              title: 'Office Name',
              type: 'string',
            },
            {
              name: 'address',
              title: 'Office Address',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Office Map Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
      initialValue: [
        {
          officeName: 'UK Office',
          address: 'Guardian House,7 N Bar StBanbury OX16 0TB United Kingdom',
        },
        {
          officeName: 'BE Office',
          address: 'Thonetlaan 74, 2050 Antwerp Belgium',
        },
      ],
      validation: (Rule) =>
        Rule.required().min(1).max(2).error('You must input between 1 and 2 office locations.'),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'officeLocations[0].image',
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
