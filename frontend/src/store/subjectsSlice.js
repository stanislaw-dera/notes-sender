import { createSlice } from '@reduxjs/toolkit'

export const subjectsSlice = createSlice({
  name: 'subjects',
  initialState: {
    subjects: [],
  },
  reducers: {
    addSubject: (state, action) => {
      state.subjects.push({
        id: state.subjects.length,
        name: action.payload,
        note: "",
        photos: []
      })
    },

    addPhoto: (state, action) => {
      state.subjects[action.payload.subject].photos.push({
        id: state.subjects[action.payload.subject].photos.length,
        ...action.payload
      })
    },

    addNote: (state, action) => {
      state.subjects[action.payload.subject].note = action.payload.note
    },

    addUploadedPhotoURL: (state, action) => {
      state.subjects[action.payload.subject].photos[action.payload.photo].url = action.payload.url
    }
  }
})

export const { addSubject, addPhoto, addNote, addUploadedPhotoURL } = subjectsSlice.actions

export default subjectsSlice.reducer