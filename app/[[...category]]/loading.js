import { CategoriesLoading } from '@/components/categories/loading'
import { FeatureMovieLoading } from '@/components/featured-movie'
import { MoviesSectionLoading } from '@/components/movies-section/loading'
import React from 'react'

export default function loading() {
  return (
    <div>
      <FeatureMovieLoading/>
      <CategoriesLoading />
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
    </div>
  )
}
