import {defineField, defineType} from 'sanity'
import {MdPeople as icon} from 'react-icons/md'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'firstTeamMemberName',
      title: 'First Team Member Name',
      type: 'string',
    }),
    defineField({
      name: 'firstTeamMemberDesignation',
      title: 'First Team Member Designation',
      type: 'string',
    }),
    defineField({
      name: 'firstTeamMemberDescription',
      title: 'First Team Member Description',
      type: 'string',
    }),
    defineField({
      name: 'firstTeamMemberImage',
      title: 'First Team Member Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondTeamMemberName',
      title: 'Second Team Member Name',
      type: 'string',
    }),
    defineField({
      name: 'secondTeamMemberDesignation',
      title: 'Second Team Member Designation',
      type: 'string',
    }),
    defineField({
      name: 'secondTeamMemberDescription',
      title: 'Second Team Member Description',
      type: 'string',
    }),
    defineField({
      name: 'secondTeamMemberImage',
      title: 'Second Team Member Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'thirdTeamMemberName',
      title: 'Third Team Member Name',
      type: 'string',
    }),
    defineField({
      name: 'thirdTeamMemberDesignation',
      title: 'Third Team Member Designation',
      type: 'string',
    }),
    defineField({
      name: 'thirdTeamMemberDescription',
      title: 'Third Team Member Description',
      type: 'string',
    }),
    defineField({
      name: 'thirdTeamMemberImage',
      title: 'Third Team Member Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'firstTeamMemberName',
      media: 'firstTeamMemberImage',
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
