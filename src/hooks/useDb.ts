import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import { PostType } from '../types/postType'

export const useDb = () => {
  const [postCount, setPostCount] = useState(0)
  const dbClient = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_API_KEY
  )

  const getPosts = async () => {
    const { data, error } = await dbClient.from('posts').select()

    if (error) {
      throw error
    }

    console.log({ data })
    setPostCount(data.length)
  }

  const deletePost = async (id: number) => {
    const { error } = await dbClient.from('posts').delete().eq('id', id)

    if (error) {
      throw error
    }
  }

  const createPost = async (data: PostType) => {
    const { error } = await dbClient.from('posts').insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      adult_guests: data.adultGuests,
      child_guests: data.childGuests,
      food_preferences: data.foodPreferences || null,
      message: data.message || null,
      travel_option: data.travelOption || null,
      number_of_cars: data.numberOfCars || null,
      need_accommodation_help: data.needAccommodationHelp,
      name_list: data.nameList || null,
    })

    if (error) {
      throw error
    }
  }

  return { getPosts, createPost, deletePost, postCount }
}
