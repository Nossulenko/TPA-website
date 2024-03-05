import {defineField, defineType} from 'sanity'
import {MdWork as icon} from 'react-icons/md'

export default defineType({
  name: 'whatWeDo',
  title: 'What We Do',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      // Add Sample value
      initialValue: 'Transcending Boundaries with Tailored Sustainable Innovation',
    }),
    defineField({
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'text',
      // Add Sample value
      initialValue:
        'Our approach blends in-depth research with creative insight, ensuring every idea is grounded yet groundbreaking. We co-create with a blend of cross-sector expertise, strategy and intuition, focusing on meaningful impact.',
    }),
    defineField({
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'text',
      // Add Sample value
      initialValue:
        'Whether you&apos;re a nimble start-up or a sprawling multinational, our team is equipped to guide you towards success at every scale.',
    }),
    defineField({
      name: 'paragraph3',
      title: 'Paragraph 3',
      type: 'text',
      // Add Sample value
      initialValue:
        'Proud partner of the Duval Union family, we leverage a network of expertise to amplify our added value.',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      // Add Sample value
      initialValue: 'Explore Our Projects',
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
