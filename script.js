document.getElementById("generate").addEventListener("click", generateMenu);

function generateMenu() {
  const weight = Number(document.getElementById("weight").value);
  const habit = document.getElementById("habit").value;
  const mood = document.getElementById("mood").value;
  const result = document.getElementById("result");

  if (!weight) {
    result.innerHTML = "⚠️ 体重を入力してください";
    return;
  }

  const baseCal = weight * 30;

  const menus = {
    healthy: {
      breakfast: ["オートミール＋ヨーグルト", 350],
      lunch: ["焼き魚定食", 600],
      dinner: ["野菜スープ＋ごはん少なめ", 500]
    },
    easy: {
      breakfast: ["バナナ＋牛乳", 300],
      lunch: ["コンビニおにぎり＋サラダ", 550],
      dinner: ["冷凍パスタ", 650]
    },
    hungry: {
      breakfast: ["卵かけごはん＋味噌汁", 450],
      lunch: ["唐揚げ定食", 900],
      dinner: ["豚しゃぶ＋ごはん", 700]
    }
  };

  const menu = menus[mood];
  const totalCal =
    menu.breakfast[1] + menu.lunch[1] + menu.dinner[1];

  const advice =
    totalCal > baseCal
      ? "今日は少し多め。明日は炭水化物を控えめにしよう。"
      : "バランス良し！この調子でいこう。";

  result.innerHTML = `
    <h3>🍳 朝</h3>
    ${menu.breakfast[0]}（${menu.breakfast[1]} kcal）

    <h3>🍚 昼</h3>
    ${menu.lunch[0]}（${menu.lunch[1]} kcal）

    <h3>🍲 夜</h3>
    ${menu.dinner[0]}（${menu.dinner[1]} kcal）

    <hr>

    <p><strong>🔥 1日の合計：</strong>${totalCal} kcal</p>
    <p><strong>🎯 あなたの目安：</strong>${baseCal} kcal</p>

    <p><strong>💡 アドバイス：</strong><br>${advice}</p>
  `;
}
