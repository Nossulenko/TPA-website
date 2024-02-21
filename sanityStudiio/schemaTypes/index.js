import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import theme from './theme'
import elevating from './elevating'
import whatWeDo from './whatWeDo'
import howWeOperate from './howWeOperate'
import letsTalk from './letsTalk'
import team from './team'

export const schemaTypes = [
  // Document types
  theme,
  elevating,
  whatWeDo,
  howWeOperate,
  team,
  letsTalk,
  movie,
  person,
  screening,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
