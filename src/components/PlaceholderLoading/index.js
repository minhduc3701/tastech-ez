import React from 'react'
import { News, Question } from './style'

export const PlaceholderLoadingNews = () => (
  <News>
    <div className="img" />
    <div className="text w-40" />
    <div className="heading w-80" />
    <div className="text w-90" />
    <div className="text" />
    <div className="text w-60" />
  </News>
)


export const PlaceholderLoadingQuestion = () => (
  <Question>
    <div className="heading w-60" />
    <div className="w-100" />
    <div className="text w-20" />
    <div className="text w-10 ml-3" />
    <div className="text mt-2" />
    <div className="text" />
    <div className="text w-80" />
  </Question>
)
