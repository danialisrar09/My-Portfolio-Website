import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema.js'

export default defineConfig({
  name: 'default',
  title: 'My-Portfolio-Website',

  projectId: 'mcyck4vc',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
