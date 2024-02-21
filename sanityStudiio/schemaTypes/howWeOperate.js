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
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
            {
              name: 'linkText',
              title: 'Link Text',
              type: 'string',
            },
          ],
        },
      ],
      initialValue: [
        {
          description:
            'In our previous article, we delved into the essentials of conducting effective user testing, from ensuring a representative sample to avoiding biases. However, the quest for improving user testing never stops. Building on our comprehensive guide, we at The Product Architects BV (TPA) present four additional tips to take your user testing to the next level...',

          link: 'https://www.example.com',
          linkText: 'Level Up your User Testing Skills',
        },
        {
          description:
            'With current rates of resource depletion and growing stress on our social model, it is impossible to maintain this idea of economics. The Doughnut Economy is an alternative approach, one that strives to spread growth and find balance. What best practices and design questions should we adhere to so that we can drive sustainability forward?...',

          link: 'https://www.example.com',
          linkText: 'How the Donut Economy drives sustainability',
        },
        {
          description:
            'Innovation and product creation processes (where product relates to actual products, services, digital, physical or phygital experiences) are inherently difficult for a lot of companies. This usually results in products that cannot meet customer needs, long and time-consuming projects, or even budgetary graveyards...',

          link: 'https://www.example.com',
          linkText: 'What is Strategic Product Design',
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).max(3).error('You must input exactly 3 operation items.'),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'operations[0].image',
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
