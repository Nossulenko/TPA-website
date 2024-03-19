import {defineField, defineType} from 'sanity'
import {MdChat as icon} from 'react-icons/md'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'icon',
      title: 'Project Icon',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      initialValue: 'The Product Architects',
    }),
    defineField({
      name: 'navBarOptions',
      title: 'NavBar Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'optionName',
              title: 'Option Name',
              type: 'string',
            },
            {
              name: 'optionLink',
              title: 'Option Link',
              type: 'string',
            },
          ],
        },
      ],
      initialValue: [
        {
          optionName: 'Sustainable Service Design',
          optionLink: '#',
        },
      ],
      validation: (Rule) =>
        Rule.required().min(1).max(2).error('You must input between 1 and 2 office locations.'),
    }),
    defineField({
      name: 'navData',
      title: 'Navigation Options',
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
              name: 'name',
              title: 'Navigation Name',
              type: 'string',
            },
            {
              name: 'link',
              title:
                'Nav  Options Use any: [ {elevatingIdea}, {whatWeDo}, {howWeOperate},{howToOperate}, {services}, {articles},{about}, {team}, {letsTalk} ]',
              type: 'string',
            },
          ],
        },
      ],
      initialValue: [
        {
          id: '01',
          name: 'Projects',
          link: 'whatWeDo',
        },
        {
          id: '02',
          name: 'Services',
          link: 'services',
        },
        {
          id: '03',
          name: 'Articles',
          link: 'articles',
        },
        {
          id: '04',
          name: 'Cases',
          link: 'articles',
        },
        {
          id: '05',
          name: 'Lets Talk',
          link: 'letsTalk',
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      initialValue: 'hello@productarchitects.eu',
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: 'socialData',
      title: 'Social Data',
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
              name: 'imageSrc',
              title: 'Icon',
              type: 'image',
            },
            {
              name: 'alt',
              title: 'Image Alt Text',
              type: 'string',
            },
          ],
        },
      ],
      initialValue: [{id: '0'}, {id: '1'}, {id: '2'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon',
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
