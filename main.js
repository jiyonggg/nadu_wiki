// ESLint Test

/**
 * 라이트-다크 테마 변경
 */
function changeTheme() {
    const bodyElem = document.body;

    switch (bodyElem.className) {
        case 'light':
            bodyElem.className = 'dark';
            break;
        case 'dark':
            bodyElem.className = 'light';
            break;
        default:
            bodyElem.className = 'dark';
            break;
    }
}

console.log('Hello World!');
