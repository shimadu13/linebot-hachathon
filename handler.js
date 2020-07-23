import { Client } from '@line/bot-sdk';

// 環境変数からトークンを取得
const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN;

// LINE APIのクライアントを初期化
const lineClient = new Client({ channelAccessToken });

// 初期フラグ設定
let flug = 0;

// POST:/reply
export const reply = async event => {
  const body = JSON.parse(event.body);

  // replyToken: 応答に必要なトークン, message: 送信されたメッセージの情報
  const { replyToken, message } = body.events[0];

  // デベロッパーコンソールからのテスト打鍵の場合replyせずに返す
  if (replyToken === '00000000000000000000000000000000') {
    return { statusCode: 200 };
  }

  // 問題と解答の分岐
  if(flug != 0){
    switch(flug) {
      case 1:
        if(message.text == "上御霊神社"){
          message.text = "正解！良い感じですね！";
          flug = 0;
        } else {
          message.text = "残念！正解は「上御霊神社」でした！";
          flug = 0;
        }
        break;
      case 2:
        if(message.text == "櫟谷七野神社"){
          message.text = "正解！良い感じですね！";
          flug = 0;
        } else {
          message.text = "残念！正解は「櫟谷七野神社」でした！";
          flug = 0;
        }
        break;
      case 3:
        if(message.text == "無関普門"){
          message.text = "正解！良い感じですね！";
          flug = 0;
        } else {
          message.text = "残念！正解は「無関普門(むかんふもん)」でした！";
          flug = 0;
        }
        break;
      case 4:
        if(message.text == "大聖寺"){
          message.text = "正解！良い感じですね！";
          flug = 0;
        } else {
          message.text = "残念！正解は「大聖寺」でした！";
          flug = 0;
        }
        break;
        case 5:
          if(message.text == "霊鑑寺"){
            message.text = "正解！良い感じですね！";
            flug = 0;
          } else {
            message.text = "残念！正解は「霊鑑寺」でした！";
            flug = 0;
          }
          break;
        case 6:
          if(message.text == "奝然"){
            message.text = "正解！良い感じですね！";
            flug = 0;
          } else {
            message.text = "残念！正解は「奝然(ちょうねん)」でした！";
            flug = 0;
          }
          break;
    }
  } 
  else{
    if(message.text != "999999999999999899999999999"){
        const rend = Math.floor( Math.random() * 6 ) +1;
       switch (rend) {
            case 1:
                message.text = "出雲氏の氏寺である上出雲寺の鎮守社と伝えられ、応仁の乱の戦端が開かれたところはどこか。";
                flug = 1;
                break;
            case 2:
                message.text = "賀茂斎院があったところと推定され「賀茂斎院跡」の石碑があり、縁戻しのご利益があるとされる神社はどこか。";
                flug = 2;
                break;
            case 3:
                message.text = "南禅寺の開山で知られ、東福寺龍吟庵が塔頭(墓所)となっている人物は誰か。";
                flug = 3;
                break;
            case 4:
                message.text = "室町幕府の将軍御所である花の御所のあったところに今もある尼門跡寺院はどこか。";
                flug = 4;
                break;
            case 5:
                message.text = "今から400年ほど前に作られた門跡尼院(もんぜきにいん)で、境内が日光(じっこう)椿の名所である東山鹿ヶ谷のお寺はどこか。";
                flug = 5;
                break;
            case 6:
                message.text = "嵯峨野清涼寺の本尊である三国伝来の釈迦如来像を中国より持ち帰ったのは誰か。";
                flug = 6;
                break;
        }
    };
  }

  // 応答メッセージを送信
  await lineClient.replyMessage(replyToken, [
    {
      type: 'text',
      text: message.text,
    },
  ]);

  return {
    statusCode: 200,
    body: 'OK',
  };
};

// GET:/hello
export const hello = async event => {
  return {
    statusCode: 200,
    body: 'Hello',
  };
};