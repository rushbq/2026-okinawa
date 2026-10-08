# 2026 沖繩自駕行程

旅遊日期：2026/10/6–10/12

## 專案內容

- `index.html`：手機版行程主頁，無需建置工具即可開啟。
- `assets/original-itinerary.png`：最初提供的景點安排圖片。
- `assets/okinawa-itinerary-map.png`：依照 1A–5C 景點重新製作的手機版全覽地圖。

## 本機開啟

可直接用瀏覽器開啟 `index.html`。若要模擬正式網站環境：

```bash
python3 -m http.server 8080
```

接著瀏覽 `http://localhost:8080`。

## GitHub Pages

網站直接由 `main` 分支根目錄發布，不需要安裝套件或執行建置：

1. 更新 `index.html` 或 `assets/`。
2. 提交並推送至 `origin/main`。
3. GitHub Pages 會自動更新 [公開網站](https://rushbq.github.io/2026-okinawa/)。

`.nojekyll` 用來停用 Jekyll 處理，確保靜態檔案原樣發布。

## 使用限制

- 行程內容、日期切換與介面本身不依賴外部套件。
- Google Maps、景點官網及電話功能需由對應裝置支援，地圖與官網需要網路。
- 勾選清單與旅行備忘儲存在瀏覽器的 `localStorage`；清除網站資料後會消失。
- 每日「旅途記錄」（額外景點、餐廳、購物、心得）同樣存在 `localStorage`（key：`okinawa-journal-v1`），僅限單一裝置；可在「更多 → 旅途記錄」匯出／匯入 JSON 備份，或複製成文字分享。匯入以記錄 ID 合併，不會重複，但刪除不會同步到其他裝置。
- 景點營業時間與交通狀況應在出發前再次確認。
