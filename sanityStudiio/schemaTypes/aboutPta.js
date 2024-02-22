import {defineField, defineType} from 'sanity'
import {MdSettings as icon} from 'react-icons/md'

export default defineType({
  name: 'aboutPTA',
  title: 'About PTA',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        {
          name: 'id',
          title: 'ID',
          type: 'string',
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'desc1',
          title: 'Description 1',
          type: 'string',
        },
        {
          name: 'desc2',
          title: 'Description 2',
          type: 'string',
        },
        {
          name: 'desc3',
          title: 'Description 3',
          type: 'string',
        },
        {
          name: 'desc4',
          title: 'Description 4',
          type: 'string',
        },
      ],
      initialValue: {
        id: '01',
        heading: 'Elevating Ideas, Enriching Lives',
        desc1:
          "As sustainable service designers, we are passionate about today's generation and those that follow. We want to offer them the product experiences and services they deserve while safeguarding the planet's resources.",
        desc2:
          'Start to finish At The Product Architects (TPA), we can propel your product from idea to customer-validated prototype and business model in as little as four weeks.',
        desc3:
          'Our goal is to help businesses create user-centered experiences and minimize time-to-market through validation and purposeful execution. By focusing on essentials and backing assumptions with concrete evidence, we enable informed decisions and inspire confidence.',
        desc4:
          'In focused design sprints, TPA combines behavioral design, design thinking and system thinking. Iteration is central to our strategic design methodology, with a relentless focus on gathering feedback to refine and optimize the overall experience.',
      },
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
      title: 'about.heading',
      media: 'image',
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
