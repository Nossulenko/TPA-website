import {defineField, defineType} from 'sanity'
import {MdSettings as icon} from 'react-icons/md'

export default defineType({
  name: 'howWeOperate',
  title: 'How We Operate',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'operations',
      title: 'Operations',
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
          heading: 'Embracing Finite Resources with Circularity',
          subHeading: 'The scarcity of resources is an undeniable reality.',
          desc: 'We champion sustainable design principles. Our focus is on creating products that not only serve current needs but also contribute to a sustainable future. By integrating circularity, we not only help conserve resources but also create more value and longevity in every product.',
        },
        {
          id: '02',
          heading: 'Innovation equals Non-Linear Thinking',
          subHeading: "Innovation doesn't follow a straight path.",
          desc: 'Our team thrives on complex challenges, employing an iterative and non-linear thinking approach that progressively hones in on solutions and meets the needs of each project. We dive deep into each mission, combining creative exploration with strategic analysis to bring forth breakthrough innovations.',
        },
        {
          id: '03',
          heading: 'Level Up your User Testing Skills',
          subHeading: 'Level Up your User Testing Skills',
          desc: 'In our previous article, we delved into the essentials of conducting effective user testing, from ensuring a representative sample to avoiding biases. However, the quest for improving user testing never stops. Building on our comprehensive guide, we at The Product Architects BV (TPA) present four additional tips to take your user testing to the next level...',
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
