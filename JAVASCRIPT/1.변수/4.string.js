// 문자열타입
let string = "안녕하세요";
string = `안녕?`;
console.log(string);
string = '"안녕"';

// 특수 문자 출력하는법
string = "'안녕~'";
console.log(string);

junny = "명준?\n공부안하니?\t\t\t뭐 하냐고?";
console.log(junny);

// 탬플릿 리터널 (Template Literal)
let id = "명준";
let greetings = "'그래, '" + id + "어서오고\n";
console.log(greetings);

greetings = `'안녕, ${id}
즐거운 하루 보내요!'`;
console.log(greetings);
