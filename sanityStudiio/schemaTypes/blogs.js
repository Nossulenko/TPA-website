import {defineField, defineType} from 'sanity'
import {MdTerrain as icon} from 'react-icons/md' //changed to similar icon

export default defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  icon,
  fields: [
    {
      name: 'blogs',
      title: 'Blogs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
            {
              name: 'img',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'link',
              type: 'url',
              title: 'Link',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'blogs.0.title',
      media: 'blogs.0.img',
    },
  },
})
