import React from 'react'
import ExCardio from './ExCardio'
import ExDate from './ExDate'
import exStyle from './Exercise.module.css'
import ExNote from './ExNote'
import ExSearchPage from './ExSearchPage'
import ExStrength from './ExStrength'

export default function ExercisePage() {
  return (
    <div>

      <ExDate></ExDate>
      <ExCardio></ExCardio>
      <ExStrength></ExStrength>
      <ExNote></ExNote>
      <ExSearchPage></ExSearchPage>
    </div>
  )
}
