document.getElementById("generate").addEventListener("click", () => {
  const weight = Number(document.getElementById("weight").value);
  const habit = document.getElementById("habit").value;
  const mood = document.getElementById("mood").value;
  const result = document.getElementById("result");

  if (!weight) {
    result.innerHTML = "体重を入力してね！";
    return;
  }

  // 目安カロリー
  const baseCal = weight * 30;

  // メニュー候補
  const menus = {
    healthy: {
      breakfast: ["オートミール＋ヨーグルト", 350],
      lunch: ["焼き魚定食", 600],
      dinner: ["野菜たっぷりスープ＋ごはん少なめ", 500]
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
  const totalCal = menu.breakfast[1] + menu.lunch[1] + menu.dinner[1];

  result.innerHTML = `
    <h3>🍳 朝</h3>
    ${menu.breakfast[0]}（${menu.breakfast[1]}kcal）

    <h3>🍚 昼</h3>
    ${menu.lunch[0]}（${menu.lunch[1]}kcal）

    <h3>🍲 夜</h3>
    ${menu.dinner[0]}（${menu.dinner[1]}kcal）

    <hr>

    <p><strong>🔥 1日の合計カロリー：</strong>${totalCal} kcal</p>
    <p><strong>🎯 あなたの目安：</strong>${baseCal} kcal</p>

    <p><strong>💡 アドバイス：</strong><br>
    ${totalCal > baseCal ? "今日は少し多め。明日は炭水化物を減らそう。" : "バランス良し！たんぱく質を意識できてるよ。"}
    </p>

    <p><strong>📖 簡単レシピ（夜）</strong><br>
    材料：豚肉・キャベツ・ポン酢<br>
    作り方：豚肉を茹でて野菜にのせ、ポン酢をかけるだけ
    </p>
  `;
});
