const today = new Date();

// 年を取得
const year = today.getFullYear();

// 月を取得（0から11なので+1して1から12にする）
const month = today.getMonth() + 1;

// 日を取得
const day = today.getDate();

// 日付を「YYYY年MM月DD日」の形式で表示
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);