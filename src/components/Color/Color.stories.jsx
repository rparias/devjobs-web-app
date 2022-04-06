import Color from './Color'

export default {
  title: 'Color',
  component: Color
}

const Template = (args) => <Color {...args} />

export const Violet = Template.bind({})
export const LightViolet = Template.bind({})
export const VeryDarkBlue = Template.bind({})
export const Midnight = Template.bind({})
export const White = Template.bind({})
export const LightGrey = Template.bind({})
export const Grey = Template.bind({})
export const DarkGrey = Template.bind({})

Violet.args = {
  color: '#5964E0'
}
LightViolet.args = {
  color: '#939BF4'
}
VeryDarkBlue.args = {
  color: '#19202D'
}
Midnight.args = {
  color: '#121721'
}
White.args = {}
LightGrey.args = {
  color: '#F4F6F8'
}
Grey.args = {
  color: '#9DAEC2'
}
DarkGrey.args = {
  color: '#6E8098'
}
