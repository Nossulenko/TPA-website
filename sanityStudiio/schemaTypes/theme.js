import {defineField, defineType} from 'sanity'
import {BiPalette as ThemeIcon} from 'react-icons/bi'

export default defineType({
  name: 'theme',
  title: 'Theme',
  type: 'document',
  icon: ThemeIcon,
  fields: [
    defineField({
      name: 'font',
      title: 'Font',
      type: 'string',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color in Hex Code only',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).error(
          'Please enter a valid hex color code for Text Color.',
        ),
    }),
    defineField({
      name: 'background',
      title: 'Background Color in Hex Code only',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).error(
          'Please enter a valid hex color code for Background Color.',
        ),
    }),
    defineField({
      name: 'lightBackground',
      title: 'Light Background Color in Hex Code only',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).error(
          'Please enter a valid hex color code for Light Background Color.',
        ),
    }),
  ],
  preview: {
    select: {
      title: 'font',
      color: 'textColor',
      background: 'background',
      lightBackground: 'lightBackground',
    },
    prepare(selection) {
      return {
        title: `Font: ${selection.font}, Color: ${selection.color}, Background: ${selection.background},Light Background: ${selection.background}`,
      }
    },
  },
})
