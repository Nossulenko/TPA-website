import {defineField, defineType} from 'sanity'
import {MdSettings as icon} from 'react-icons/md'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'services',
      title: 'Services',
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
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'subHeading',
              title: 'Sub Heading',
              type: 'string',
            },
            {
              name: 'desc',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
      initialValue: [
        {
          id: '01',
          heading: 'Test First, Build Later',
          subHeading: 'At the heart of our process  lies rapid prototyping and user validation.',
          desc: 'We believe in testing ideas in real-world scenarios to refine and perfect them before full-scale development. This approach not only saves time and resources, but also ensures that the final product truly resonates with its intended audience.',
        },
        {
          id: '02',
          heading: 'Innovation through Dedication and Non-Linear Thinking',
          subHeading: "Innovation doesn't follow a straight path. Our team thrives on complex ",
          desc: 'challenges, employing an iterative and non-linear thinking approach that progressively hones in on solutions and meets the needs of each project. We dive deep into each mission, combining creative exploration with strategic analysis to bring forth breakthrough innovations.',
        },
        {
          id: '03',
          heading: 'Embracing Circularity in a Resource-Constrained World',
          subHeading: 'Understanding the scarcity of resources, we champion sustainable',
          desc: 'design principles. Our focus is on creating products that not only serve current needs but also contribute to a sustainable future. By integrating circularity, we not only help conserve resources but also create more value and longevity in every product.',
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).max(3).error('You must input exactly 3 operation items.'),
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
      const {title, media} = selection
      return {
        title,
        media,
      }
    },
  },
})
