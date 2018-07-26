import Vuetify from "vuetify";
import './styles/theme.styl'

export default ({ Vue, options, router, siteData}) => {
  const { themeConfig: theme, pages } = siteData;
  Vue.use(Vuetify, theme)
}