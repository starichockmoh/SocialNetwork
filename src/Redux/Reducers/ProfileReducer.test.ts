import App from "../../App";
import React from "react";
import ProfileReducer, {ProfileActions} from "./ProfileReducer";
import {NullableType, ProfileType} from "../../Types/Types";
const {addNewPost, deleteProfilePost} = ProfileActions

test('numbers of posts changed', () => {
    let action = addNewPost('hey')
    let state = {
        PostsData: [
            {message: 'Heil Hitler', id: 1, likecount: 1488},
            {message: 'salam', id: 2, likecount: 228},
        ],
        ProfileInfo: null as NullableType<ProfileType>,
        ProfileStatus: '',
        isFetching: false,
        submitWasSuccess: false
    }
    let newState = ProfileReducer(state,action)
    console.log(newState.PostsData.length)
    expect(newState.PostsData.length).toBe(3)
});

test('post was correct', () => {
    let action = addNewPost('hey')
    let state = {
        PostsData: [
            {message: 'Heil Hitler', id: 1, likecount: 1488},
            {message: 'salam', id: 2, likecount: 228},
        ],
        ProfileInfo: null as NullableType<ProfileType>,
        ProfileStatus: '',
        isFetching: false,
        submitWasSuccess: false
    }
    let newState = ProfileReducer(state,action)
    expect(newState.PostsData[2].message).toBe('hey')
});

test('post was deleted', () => {
    let action = deleteProfilePost(2)
    let state = {
        PostsData: [
            {message: 'Heil Hitler', id: 1, likecount: 1488},
            {message: 'salam', id: 2, likecount: 228},
        ],
        ProfileInfo: null as NullableType<ProfileType>,
        ProfileStatus: '',
        isFetching: false,
        submitWasSuccess: false
    }
    let newState = ProfileReducer(state,action)
    expect(newState.PostsData.length).toBe(1)
});