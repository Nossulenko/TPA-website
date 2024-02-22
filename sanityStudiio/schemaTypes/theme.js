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
      title: 'Font Link in .ttf only',
      type: 'url',
      validation: (Rule) => Rule.regex(/\.ttf$/, { name: 'ttf', invert: false }).uri(),
      initialValue:
        'http://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUUsjNsFjTDJK.ttf',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color in Hex Code only',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).error(
          'Please enter a valid hex color code for Text Color.',
        ),
      initialValue: '#FECF4F',
    }),
    defineField({
      name: 'background',
      title: 'Background Color in Hex Code only',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).error(
          'Please enter a valid hex color code for Background Color.',
        ),
      initialValue: '#ECEBE9',
    }),
    defineField({
      name: 'lightBackground',
      title: 'Light Background Color in Hex Code only',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).error(
          'Please enter a valid hex color code for Light Background Color.',
        ),
      initialValue: '#fada82',
    }),
  ],
  preview: {
    select: {
      font: 'font',
      color: 'textColor',
      background: 'background',
      lightBackground: 'lightBackground',
    },
    prepare(selection) {
      return {
        title: `Font: ${selection.font}, Color: ${selection.color}, Background: ${selection.background}, Light Background: ${selection.lightBackground}`,
      }
    },
  },
})
