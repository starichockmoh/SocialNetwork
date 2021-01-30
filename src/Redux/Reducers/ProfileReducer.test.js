import App from "../../App";
import React from "react";
import ProfileReducer, {addNewPost, deleteProfilePost} from "./ProfileReducer";

test('numbers of posts changed', () => {
    let action = addNewPost('hey')
    let state = {PostsData: [
            {message: 'Heil Hitler', id: 1, likecount: 1488},
            {message: 'salam', id: 2, likecount: 228},
        ]}
    let newState = ProfileReducer(state,action)
    console.log(newState.PostsData.length)
    expect(newState.PostsData.length).toBe(3)
});

test('post was correct', () => {
    let action = addNewPost('hey')
    let state = {PostsData: [
            {message: 'Heil Hitler', id: 1, likecount: 1488},
            {message: 'salam', id: 2, likecount: 228},
        ]}
    let newState = ProfileReducer(state,action)
    expect(newState.PostsData[2].message).toBe('hey')
});

test('post was deleted', () => {
    let action = deleteProfilePost(2)
    let state = {PostsData: [
            {message: 'Heil Hitler', id: 1, likecount: 1488},
            {message: 'salam', id: 2, likecount: 228},
        ]}
    let newState = ProfileReducer(state,action)
    expect(newState.PostsData.length).toBe(1)
});