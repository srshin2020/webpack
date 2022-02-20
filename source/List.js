import Topic from './Topic';

export default function List({ topicList }) {
    const ul = document.createElement('ul');
    console.log(topicList);
    // 각 배열 요소 각각에 함수 실행
    topicList.forEach(topic => {
        ul.appendChild(Topic({ name: topic.name }))
    });
    return ul;

} 