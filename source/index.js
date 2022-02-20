
// import hello from "./hello.js";
// import world from "./world.js";
import './style.css';
import './main.css';

// import logo from './image/icon.svg';

// const image = `<img width="40px" src="${logo}" alt='logo'>`
// document.querySelector('#root').innerHTML = image + hello + ' ' + world;


import List from './List'

const topics = [
    {
        id: 1,
        name: 'wepback'
    },
    {
        id: 2,
        name: 'react'
    },
    {
        id: 3,
        name: 'typescript'
    },
    {
        id: 4,
        name: 'css'
    },
    {
        id: 5,
        name: 'html'
    }
]

// appendChild() :특정 노드의 자식 노드로 맨 뒤에 붙임
document.querySelector('#root').appendChild(List({ topicList: topics }))
