import {defineConfig, defineType} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index' 

export default defineConfig({
  name: 'default',
  title: 'My-Portfolio-Website',

  projectId: 'mcyck4vc',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes.map(type => defineType(type)),
  },
})
