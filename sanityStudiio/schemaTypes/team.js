import {defineField, defineType} from 'sanity'
import {MdPeople as icon} from 'react-icons/md'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'members',
      title: 'Members',
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
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'designation',
              title: 'Designation',
              type: 'string',
            },
            {
              name: 'about',
              title: 'About',
              type: 'text',
            },
          ],
        },
      ],
      initialValue: [
        {
          id: '01',
          name: 'Alain De Keyser1',
          designation: 'Managing Partner & Strategy Designer',
          about:
            "With extensive expertise in Product Management, Startups, and Design Thinking, has played a vital role in creating innovative solutions for the banking industry and beyond. He's a dance enthusiast, often found enjoying Salsa, Bachata, Merengue and Kizomba.",
        },
        {
          id: '02',
          name: 'Alain De Keyser2',
          designation: 'Managing Partner & Strategy Designer',
          about:
            "With extensive expertise in Product Management, Startups, and Design Thinking, has played a vital role in creating innovative solutions for the banking industry and beyond. He's a dance enthusiast, often found enjoying Salsa, Bachata, Merengue and Kizomba.",
        },
        {
          id: '03',
          name: 'Alain De Keyser3',
          designation: 'Managing Partner & Strategy Designer',
          about:
            "With extensive expertise in Product Management, Startups, and Design Thinking, has played a vital role in creating innovative solutions for the banking industry and beyond. He's a dance enthusiast, often found enjoying Salsa, Bachata, Merengue and Kizomba.",
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).max(3).error('You must input exactly 3 team members.'),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'members[0].image',
    },
    prepare(selection) {
      const {teamName, media} = selection
      return {
        title: teamName,
        media,
      }
    },
  },
})
