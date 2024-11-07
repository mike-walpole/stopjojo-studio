import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'stopjojo-studio',

  projectId: 'lxrdcccy',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    muxInput({
      mp4_support: 'standard',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
