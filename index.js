const line = require("@line/bot-sdk");


const config = {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new line.Client(config);

exports.handler = async (event) => {
    const date = new Date();
    const week = date.getDay();

    let text;
    switch (week){
        case 1:
            text = "今日は月曜日です、、ルネサンスが休みなので腹筋ローラーをしましょう！";
            break;
        case 2:
            text = "今日は火曜日です。腹筋ローラーをしよう！";
            break;
        case 3:
            text = "今日はリフレッシューです。ジムに行きましょう！";
            break;
        case 4:
            text = "今日は木曜日です。腹筋ローラーをしよう!";
            break;
        case 5:
            text = "今日は金曜日です！筋トレはできたらしましょう!";
            break;
            
    }
    const messages = [
        {
            type: "text",
            text:text,
        },
    ];
    if (text) {
        try {
          // メッセージ送信
          const res = await client.broadcast(messages);
          console.log("成功");
          console.log(res);
        } catch (error) {
          console.log(`エラー: ${error.statusMessage}`);
          console.log(error.originalError.response.data);
        }
      }

}